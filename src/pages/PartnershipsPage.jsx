import React, { useState } from 'react';
import { Building, Users, Award, Mail, Phone, ExternalLink, ArrowRight, HandHeart, Target, Briefcase } from 'lucide-react';

const PartnershipsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const partners = [
    {
      id: 1,
      name: "Equity Bank Foundation",
      logo: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Providing scholarship opportunities and financial literacy training for students from Nyandarua County.",
      type: "Financial Services",
      partnership: "Scholarship Program",
      impact: "150+ students supported",
      website: "https://equitybank.co.ke",
      featured: true
    },
    {
      id: 2,
      name: "Safaricom Foundation",
      logo: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Supporting digital literacy and entrepreneurship programs for young people in rural areas.",
      type: "Technology",
      partnership: "Digital Skills Training",
      impact: "300+ students trained",
      website: "https://safaricom.co.ke",
      featured: true
    },
    {
      id: 3,
      name: "Kenya Private Sector Alliance",
      logo: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Connecting students with internship opportunities in various industries across Kenya.",
      type: "Industry Association",
      partnership: "Internship Placement",
      impact: "80+ internships facilitated",
      website: "https://kepsa.or.ke",
      featured: false
    },
    {
      id: 4,
      name: "Chandaria Foundation",
      logo: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Mentorship programs and seed funding for student entrepreneurs with innovative business ideas.",
      type: "Development",
      partnership: "Entrepreneurship Support",
      impact: "25 startups funded",
      website: "https://chandaria.org",
      featured: false
    },
    {
      id: 5,
      name: "Nyandarua County Government",
      logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Local government support for student development programs and community engagement initiatives.",
      type: "Government",
      partnership: "Community Development",
      impact: "500+ students engaged",
      website: "https://nyandarua.go.ke",
      featured: false
    },
    {
      id: 6,
      name: "Kenya Association of Manufacturers",
      logo: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      description: "Industrial attachment programs and career guidance for engineering and technical students.",
      type: "Manufacturing",
      partnership: "Industrial Training",
      impact: "120+ attachments",
      website: "https://kam.co.ke",
      featured: false
    }
  ];

  const partnershipTypes = [
    {
      icon: Award,
      title: "Scholarship Programs",
      description: "Partner with us to provide educational scholarships and financial aid to deserving students.",
      color: "bg-blue-500"
    },
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      description: "Offer internship and job placement opportunities for students in various fields.",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Training & Development",
      description: "Provide skill development workshops, training programs, and professional development.",
      color: "bg-purple-500"
    },
    {
      icon: HandHeart,
      title: "Mentorship Programs",
      description: "Connect experienced professionals with students for guidance and career development.",
      color: "bg-orange-500"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Students Supported",
      description: "Through various partnership programs"
    },
    {
      number: "25+",
      label: "Active Partners",
      description: "Organizations supporting our mission"
    },
    {
      number: "KES 10M+",
      label: "Value Created",
      description: "In scholarships and opportunities"
    },
    {
      number: "150+",
      label: "Job Placements",
      description: "Successful career transitions"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Partnership inquiry submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      partnershipType: '',
      message: ''
    });
    alert('Thank you for your interest! We will get back to you soon.');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const featuredPartners = partners.filter(partner => partner.featured);
  const regularPartners = partners.filter(partner => !partner.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Partnerships & Sponsorships
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Together, we're building a stronger future for Nyandarua County students. 
            Join us in creating opportunities that transform lives and communities.
          </p>
        </div>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Partnership Impact</h2>
              <p className="text-xl opacity-90">
                See how our partnerships are making a difference in students' lives
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Multiple ways to support and engage with our student community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        {partner.type}
                      </p>
                      <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium mt-2">
                        Featured Partner
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Partnership:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{partner.partnership}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Impact:</span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">{partner.impact}</span>
                    </div>
                  </div>
                  
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      {partner.type}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {partner.description}
                </p>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium">Impact:</span> {partner.impact}
                </div>
                
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Learn More
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join us in creating opportunities and empowering the next generation of leaders
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partnership Interest *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  required
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Partnership Type</option>
                  <option value="scholarship">Scholarship Programs</option>
                  <option value="internship">Internship Opportunities</option>
                  <option value="training">Training & Development</option>
                  <option value="mentorship">Mentorship Programs</option>
                  <option value="sponsorship">Event Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">partnerships@nccsc.org</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">+254 700 123 456</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnershipsPage;