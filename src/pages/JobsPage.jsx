import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Building, GraduationCap, Search, Filter, ExternalLink } from 'lucide-react';

const JobsPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const opportunities = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechStart Kenya",
      location: "Nairobi",
      type: "internship",
      duration: "3 months",
      salary: "KES 25,000/month",
      description: "Join our dynamic development team to work on cutting-edge web applications. Perfect for computer science students looking to gain real-world experience.",
      requirements: ["Currently pursuing Computer Science or related field", "Basic knowledge of JavaScript, React", "Strong problem-solving skills"],
      deadline: "2024-03-15",
      posted: "2024-02-20",
      remote: false,
      featured: true
    },
    {
      id: 2,
      title: "Equity Bank Bursary Program",
      company: "Equity Bank Foundation",
      location: "Kenya",
      type: "bursary",
      duration: "Full academic year",
      salary: "KES 150,000",
      description: "Full bursary covering tuition fees, accommodation, and living expenses for outstanding students from Nyandarua County.",
      requirements: ["GPA of 3.5 or above", "Demonstrate financial need", "Community involvement"],
      deadline: "2024-03-01",
      posted: "2024-01-15",
      remote: false,
      featured: true
    },
    {
      id: 3,
      title: "Digital Marketing Assistant",
      company: "Nyandarua Agribusiness Co.",
      location: "Ol Kalou",
      type: "part-time",
      duration: "6 months",
      salary: "KES 20,000/month",
      description: "Help promote local agricultural products through social media marketing and content creation. Great for business or communications students.",
      requirements: ["Knowledge of social media platforms", "Basic graphic design skills", "Flexible schedule"],
      deadline: "2024-02-28",
      posted: "2024-02-10",
      remote: true,
      featured: false
    },
    {
      id: 4,
      title: "Research Assistant - Agriculture",
      company: "Kenya Agricultural Research Institute",
      location: "Naivasha",
      type: "internship",
      duration: "4 months",
      salary: "KES 30,000/month",
      description: "Support ongoing research projects in sustainable agriculture and climate change adaptation in the central highlands.",
      requirements: ["Agriculture, Environmental Science, or related field", "Data analysis skills", "Research experience preferred"],
      deadline: "2024-03-10",
      posted: "2024-02-05",
      remote: false,
      featured: false
    },
    {
      id: 5,
      title: "Young Entrepreneur Mentorship Program",
      company: "Chandaria Foundation",
      location: "Virtual",
      type: "mentorship",
      duration: "12 months",
      salary: "Free program + grants available",
      description: "One-year mentorship program for young entrepreneurs with business ideas. Includes funding opportunities up to KES 500,000.",
      requirements: ["Age 18-25", "Viable business idea", "Commitment to program duration"],
      deadline: "2024-04-01",
      posted: "2024-01-20",
      remote: true,
      featured: false
    },
    {
      id: 6,
      title: "Teaching Assistant - Mathematics",
      company: "Ol Kalou Technical Institute",
      location: "Ol Kalou",
      type: "part-time",
      duration: "1 semester",
      salary: "KES 15,000/month",
      description: "Assist in teaching mathematics to diploma students. Great opportunity for education or mathematics students.",
      requirements: ["Strong mathematics background", "Excellent communication skills", "Teaching experience preferred"],
      deadline: "2024-02-25",
      posted: "2024-02-01",
      remote: false,
      featured: false
    }
  ];

  const types = [
    { value: 'all', label: 'All Opportunities' },
    { value: 'internship', label: 'Internships' },
    { value: 'bursary', label: 'Bursaries' },
    { value: 'part-time', label: 'Part-time Jobs' },
    { value: 'mentorship', label: 'Mentorship' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'Nairobi', label: 'Nairobi' },
    { value: 'Ol Kalou', label: 'Ol Kalou' },
    { value: 'Virtual', label: 'Remote/Virtual' },
    { value: 'Kenya', label: 'Nationwide' }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesType = selectedType === 'all' || opportunity.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || opportunity.location === selectedLocation;
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesLocation && matchesSearch;
  });

  const featuredOpportunities = filteredOpportunities.filter(opp => opp.featured);
  const regularOpportunities = filteredOpportunities.filter(opp => !opp.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      internship: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      bursary: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'part-time': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      mentorship: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Jobs & Opportunities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover internships, bursaries, part-time jobs, and mentorship programs 
            specifically curated for Nyandarua County tertiary students.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Opportunities */}
        {featuredOpportunities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-blue-500 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(opportunity.type)}`}>
                          {types.find(t => t.value === opportunity.type)?.label}
                        </span>
                        <span className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        {opportunity.remote && (
                          <span className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                            Remote
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {opportunity.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{opportunity.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {opportunity.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{opportunity.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>Deadline: {formatDate(opportunity.deadline)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      Apply Now
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      Learn More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regular Opportunities */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Opportunities
          </h2>
          <div className="space-y-6">
            {regularOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(opportunity.type)}`}>
                        {types.find(t => t.value === opportunity.type)?.label}
                      </span>
                      {opportunity.remote && (
                        <span className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                          Remote
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {opportunity.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{opportunity.company}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{opportunity.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{opportunity.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{opportunity.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span>Deadline: {formatDate(opportunity.deadline)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      Apply Now
                    </button>
                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      Details
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-2">
              No opportunities found
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;