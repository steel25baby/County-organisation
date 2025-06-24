import React from 'react';
import { Eye, Target, Zap, Users, BookOpen, Award, Heart, Globe, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "INSPIRE",
      description: "We ignite passion and motivation in students to pursue excellence and dream beyond boundaries.",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "ASPIRE",
      description: "We encourage students to set ambitious goals and strive for continuous personal and academic growth.",
      color: "bg-blue-600"
    },
    {
      icon: Zap,
      title: "EMPOWER",
      description: "We provide tools, resources, and opportunities that enable students to achieve their full potential.",
      color: "bg-blue-700"
    }
  ];

  const keyAreas = [
    {
      icon: Award,
      title: "Bursaries & Scholarships",
      description: "Facilitating access to financial aid and educational funding opportunities for deserving students."
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connecting students with experienced professionals and alumni for guidance and career development."
    },
    {
      icon: BookOpen,
      title: "Internship Opportunities",
      description: "Creating pathways for practical experience and professional development in various industries."
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Mentoring secondary and primary school students to promote educational excellence in Nyandarua County."
    },
    {
      icon: Globe,
      title: "Networking & Advocacy",
      description: "Being the voice of tertiary students within and beyond Nyandarua County borders."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Active Members",
      description: "Tertiary students across various institutions"
    },
    {
      number: "150+",
      label: "Bursaries Facilitated",
      description: "Financial aid provided to deserving students"
    },
    {
      number: "200+",
      label: "Mentorship Connections",
      description: "Students paired with professional mentors"
    },
    {
      number: "75+",
      label: "Internship Placements",
      description: "Practical experience opportunities created"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About NCTSA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Nyandarua County Tertiary Students Association
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-blue-100">
              "INSPIRE. ASPIRE. EMPOWER."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                <Eye className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "Nyandarua County Tertiary Students Association is a student-led organization that creates the strongest, longest-lasting memories for its members by being their voice within and beyond the borders of Nyandarua County."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                <Target className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "To ease the academic lives of Nyandarua County Tertiary students by enabling access to bursaries, mentorship programs and internship opportunities while mentoring students and youths in secondary and public primary schools in a bid to acknowledge, promote, and appraise the standards of education in Nyandarua County for a more fulfilling future."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Motto */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our key focus areas and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl opacity-90">
              Making a difference in the lives of Nyandarua County students
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
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

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a movement that's transforming the educational landscape in Nyandarua County. 
            Together, we can create lasting memories and build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Involved
            </a>
            <a
              href="/events"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;