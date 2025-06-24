import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Briefcase, BookOpen, Users, ChevronLeft, ChevronRight, Star, Eye, Target, Zap } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: "Welcome to NCTSA",
      subtitle: "Nyandarua County Tertiary Students Association",
      description: "Join a community of ambitious tertiary students from Nyandarua County. Access bursaries, mentorship programs, and internship opportunities to advance your academic journey.",
      cta: "Join Our Community",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "Latest Opportunities",
      subtitle: "Bursaries & Internships Available",
      description: "Discover exclusive bursary opportunities and internship programs designed specifically for Nyandarua County tertiary students.",
      cta: "View Opportunities",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "Upcoming Events",
      subtitle: "Mentorship & Networking",
      description: "Participate in mentorship programs, networking events, and skill-building workshops throughout the year.",
      cta: "See Events",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Computer Science Student, University of Nairobi",
      content: "NCTSA connected me with an amazing internship opportunity at a tech startup. The mentorship and guidance I received was invaluable for my career growth.",
      rating: 5
    },
    {
      name: "John Kamau",
      role: "Business Administration, Kenyatta University",
      content: "Through NCTSA, I found my passion for entrepreneurship. The networking events and leadership training shaped my business mindset completely.",
      rating: 5
    },
    {
      name: "Grace Nyambura",
      role: "Medical Student, University of Nairobi",
      content: "The bursary I received through NCTSA enabled me to pursue my dream of becoming a doctor. Forever grateful for this amazing community.",
      rating: 5
    }
  ];

  const quickLinks = [
    {
      title: "Events",
      description: "Upcoming workshops, forums, and networking events",
      icon: Calendar,
      path: "/events",
      color: "bg-blue-500"
    },
    {
      title: "Jobs & Opportunities",
      description: "Internships, bursaries, and career opportunities",
      icon: Briefcase,
      path: "/jobs",
      color: "bg-blue-600"
    },
    {
      title: "Blog",
      description: "Student stories, tips, and association updates",
      icon: BookOpen,
      path: "/blog",
      color: "bg-blue-700"
    },
    {
      title: "Leadership",
      description: "Meet your student association representatives",
      icon: Users,
      path: "/leadership",
      color: "bg-blue-800"
    }
  ];

  const mottoValues = [
    {
      icon: Zap,
      title: "INSPIRE",
      description: "Igniting passion and motivation in students to pursue excellence"
    },
    {
      icon: Target,
      title: "ASPIRE",
      description: "Encouraging ambitious goals and continuous growth"
    },
    {
      icon: Eye,
      title: "EMPOWER",
      description: "Providing tools and opportunities for student success"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-blue-400 font-semibold">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {heroSlides[currentSlide].description}
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {heroSlides[currentSlide].cta}
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronLeft className="h-12 w-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronRight className="h-12 w-12" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-400' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mission & Motto Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed italic">
              "To ease the academic lives of Nyandarua County Tertiary students by enabling access to bursaries, 
              mentorship programs and internship opportunities while promoting educational excellence."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mottoValues.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need, just a click away
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from our community members
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with fellow Nyandarua tertiary students, access exclusive opportunities, 
            and be part of a movement that's transforming our community's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;