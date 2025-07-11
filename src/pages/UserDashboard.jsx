import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {/* User Info */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              User Dashboard
            </h1>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Your Information
              </h2>
              <div className="space-y-2 text-sm text-blue-600 dark:text-blue-200">
                <p><strong>Name:</strong> {user?.full_name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Institution:</strong> {user?.institution}</p>
                <p><strong>Course:</strong> {user?.course}</p>
                <p><strong>Student ID:</strong> {user?.student_id}</p>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/events" className="text-blue-600 dark:text-blue-400 hover:underline">Upcoming Events</a>
                </li>
                <li>
                  <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Latest Blog Posts</a>
                </li>
                <li>
                  <a href="/jobs" className="text-blue-600 dark:text-blue-400 hover:underline">Job Opportunities</a>
                </li>
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <p className="text-gray-600 dark:text-gray-300">No recent activity to display.</p>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">No new notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 