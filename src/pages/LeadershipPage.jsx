import React from 'react';
import { Mail, Phone, Linkedin, Twitter, MapPin, GraduationCap, Award, Users } from 'lucide-react';

const LeadershipPage = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Geoffrey Ngache",
      position: "President",
      institution: "Laikipia University",
      course: "Computer Science",
      year: "4th Year",
      bio: "Passionate about technology and youth empowerment. Leading initiatives to bridge the digital divide in Nyandarua County.",
      vision: "To create a platform where every tertiary student from Nyandarua can access opportunities regardless of their background.",
      email: "ngachageoffrey@gmail.com",
      phone: "+254 702381981",
      image: "/president.jpg",
      achievements: ["Dean's List 2022-2023", "Google Developer Student Club Lead", "Published researcher"],
      social: {
        linkedin: "https://linkedin.com/in/geoffrey-ngache",
        twitter: "https://twitter.com/geoffrey_ngache"
      }
    },
    {
      id: 2,
      name: "Margaret Nyambura",
      position: "Vice President",
      institution: "Laikipia University",
      course: "Economics and Statistics",
      year: "3rd Year",
      bio: "Entrepreneur and business strategist with a passion for community development and sustainable growth.",
      vision: "Building partnerships that create lasting impact for current and future generations of Nyandarua students.",
      email: "vp@nctsa.org",
      phone: "+254 723 456 789",
      image: "/vice chair .jpg",
      achievements: ["Young Entrepreneur Award 2023", "Business Plan Competition Winner", "Volunteer of the Year"],
      social: {
        linkedin: "https://linkedin.com/in/margaret-nyambura",
        twitter: "https://twitter.com/margaret_nyambura"
      }
    },
    {
      id: 3,
      name: "Grace Nyambura Kariuki",
      position: "Secretary General",
      institution: "University of Nairobi",
      course: "Medicine",
      year: "5th Year",
      bio: "Medical student with a heart for community health and education. Passionate about improving healthcare access in rural areas.",
      vision: "Ensuring transparent communication and efficient coordination of all association activities and programs.",
      email: "secretary@nctsa.org",
      phone: "+254 734 567 890",
      image: "/chairs panel.jpg",
      achievements: ["Medical Student Association President", "Community Health Champion", "Research Excellence Award"],
      social: {
        linkedin: "https://linkedin.com/in/grace-nyambura",
        twitter: "https://twitter.com/grace_nyambura"
      }
    },
    {
      id: 4,
      name: "Peter Mwangi Githinji",
      position: "Treasurer",
      institution: "Strathmore University",
      course: "Finance",
      year: "4th Year",
      bio: "Finance enthusiast with expertise in financial planning and resource management. Committed to transparent financial stewardship.",
      vision: "Ensuring responsible financial management and creating sustainable funding for student programs and initiatives.",
      email: "treasurer@nctsa.org",
      phone: "+254 745 678 901",
      image: "/Tressurer.jpg",
      achievements: ["CPA Finalist", "Finance Club President", "Scholarship Recipient"],
      social: {
        linkedin: "https://linkedin.com/in/peter-mwangi",
        twitter: "https://twitter.com/peter_mwangi"
      }
    }
  ];

  const departmentHeads = [
    {
      id: 5,
      name: "Advocate Sarah Wanjiku",
      position: "Legal Affairs Director",
      institution: "University of Nairobi",
      course: "Law",
      year: "Advocate of the High Court",
      bio: "Qualified advocate of the High Court of Kenya, providing legal guidance and ensuring compliance with regulations.",
      email: "legal@nctsa.org",
      image: "/advocate.jpg"
    },
    {
      id: 6,
      name: "Grace Muthoni",
      position: "Persons with Disability Representative",
      institution: "Kenyatta University",
      course: "Special Needs Education",
      year: "3rd Year",
      bio: "Passionate advocate for inclusive education and accessibility, ensuring all students have equal opportunities.",
      email: "pwd@nctsa.org",
      image: "/PwD rep.jpg"
    },
    {
      id: 7,
      name: "Catherine Wanjiru Mbugua",
      position: "Welfare Director",
      institution: "JKUAT",
      course: "Social Work",
      year: "4th Year",
      bio: "Passionate about student welfare and mental health support services.",
      email: "welfare@nctsa.org",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Samuel Njuguna Waweru",
      position: "Public Relations Director",
      institution: "University of Nairobi",
      course: "Journalism",
      year: "3rd Year",
      bio: "Communication expert focused on building strong relationships with media and stakeholders.",
      email: "pr@nctsa.org",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const associationStats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Students Represented",
      description: "Across various institutions"
    },
    {
      icon: GraduationCap,
      number: "15+",
      label: "Universities & Colleges",
      description: "Where our members study"
    },
    {
      icon: Award,
      number: "50+",
      label: "Programs Implemented",
      description: "In the past academic year"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Student Leadership
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated student leaders working tirelessly to represent and serve 
            the interests of Nyandarua County tertiary students across various institutions.
          </p>
        </div>

        {/* Association Statistics */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Representation</h2>
              <p className="text-xl opacity-90">
                Leading with purpose, serving with dedication
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {associationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Committee */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Executive Committee
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The core leadership team steering our vision and mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveCommittee.map((leader) => (
              <div
                key={leader.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                        {leader.position}
                      </p>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          <span>{leader.course}, {leader.year}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{leader.institution}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">About</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {leader.bio}
                    </p>

                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Vision</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{leader.vision}"
                    </p>

                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                      {leader.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm">{achievement}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="text-sm">Email</span>
                      </a>
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">Call</span>
                      </a>
                      <a
                        href={leader.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                      <a
                        href={leader.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span className="text-sm">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Department Heads */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Department Directors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized leaders managing specific areas of student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentHeads.map((leader) => (
              <div
                key={leader.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-3 border-blue-500"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {leader.position}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <p>{leader.course}, {leader.year}</p>
                  <p>{leader.institution}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {leader.bio}
                </p>
                <a
                  href={`mailto:${leader.email}`}
                  className="flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">Contact</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our leadership team or volunteer for various committees and initiatives. 
            Your voice and contributions can make a real difference in the student community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@nctsa.org"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Express Interest
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeadershipPage;