import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {/* Admin Info */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Admin Dashboard
            </h1>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Admin Information
              </h2>
              <div className="space-y-2 text-sm text-blue-600 dark:text-blue-200">
                <p><strong>Name:</strong> {user?.full_name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role}</p>
                <p><strong>Institution:</strong> {user?.institution}</p>
              </div>
            </div>
          </div>

          {/* Placeholder for future features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                User Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                User management features will be implemented here.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Content Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Content management features will be implemented here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 