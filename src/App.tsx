import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import JobsPage from './pages/JobsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="contact" element={<ContactPage />} />

              {/* Protected Routes */}
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } />
              <Route path="events" element={
                <ProtectedRoute>
                  <EventsPage />
                </ProtectedRoute>
              } />
              <Route path="blog" element={
                <ProtectedRoute>
                  <BlogPage />
                </ProtectedRoute>
              } />
              <Route path="jobs" element={
                <ProtectedRoute>
                  <JobsPage />
                </ProtectedRoute>
              } />
              <Route path="partnerships" element={
                <ProtectedRoute>
                  <PartnershipsPage />
                </ProtectedRoute>
              } />
              <Route path="leadership" element={
                <ProtectedRoute>
                  <LeadershipPage />
                </ProtectedRoute>
              } />

              {/* Admin Routes */}
              <Route path="admin" element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;