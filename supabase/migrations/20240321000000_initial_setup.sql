-- Create roles enum
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    role user_role DEFAULT 'user'::user_role,
    institution TEXT,
    course TEXT,
    student_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
    ON public.profiles
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'::user_role
        )
    );

-- Admins can update all profiles
CREATE POLICY "Admins can update all profiles"
    ON public.profiles
    FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'::user_role
        )
    );

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    user_email TEXT;
BEGIN
    -- Get email from the appropriate location
    user_email := COALESCE(
        NEW.email,  -- Try direct email first
        NEW.raw_user_meta_data->>'email',  -- Then raw metadata
        (NEW.identities->0->>'email')  -- Finally check identities
    );

    IF user_email IS NULL THEN
        RAISE EXCEPTION 'No email found for user %', NEW.id;
    END IF;

    -- Create profile with SECURITY DEFINER to bypass RLS
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        user_email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        'user'::user_role
    );
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        RAISE LOG 'Error in handle_new_user trigger: %', SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add policy to allow the trigger to insert new profiles
CREATE POLICY "Allow trigger to create profiles"
    ON public.profiles
    FOR INSERT
    WITH CHECK (true);

-- Trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 