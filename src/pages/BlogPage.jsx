import React, { useState } from 'react';
import { Calendar, User, Tag, Search, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Skills Every Nyandarua Student Should Develop",
      excerpt: "Discover the key skills that will set you apart in today's competitive job market and how to develop them during your college years.",
      content: "In today's rapidly evolving job market, success requires more than just academic excellence...",
      author: "Sarah Wanjiku",
      authorRole: "Student Leader",
      date: "2024-02-20",
      readTime: "8 min read",
      category: "Student Life",
      tags: ["Career Development", "Skills", "Success"],
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Scholarship Opportunities for Nyandarua Students in 2024",
      excerpt: "A comprehensive guide to available scholarships, grants, and financial aid specifically for students from Nyandarua County.",
      content: "Financial constraints shouldn't limit your educational dreams. Here's a detailed look at scholarship opportunities...",
      author: "John Kamau",
      authorRole: "Academic Coordinator",
      date: "2024-02-15",
      readTime: "12 min read",
      category: "Opportunities",
      tags: ["Scholarships", "Financial Aid", "Education"],
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Building a Strong Alumni Network: Lessons from Successful Graduates",
      excerpt: "Learn how our alumni are making a difference and how you can build meaningful connections that last beyond graduation.",
      content: "Networking isn't just about collecting business cards. It's about building genuine relationships...",
      author: "Grace Nyambura",
      authorRole: "Alumni Relations",
      date: "2024-02-10",
      readTime: "6 min read",
      category: "Leadership",
      tags: ["Networking", "Alumni", "Career"],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Entrepreneurship in Nyandarua: Success Stories and Opportunities",
      excerpt: "Meet young entrepreneurs from Nyandarua who are creating jobs and solving local problems through innovative startups.",
      content: "Nyandarua County is becoming a hub for young entrepreneurs who are leveraging technology and innovation...",
      author: "Peter Mwangi",
      authorRole: "Entrepreneurship Mentor",
      date: "2024-02-05",
      readTime: "10 min read",
      category: "Entrepreneurship",
      tags: ["Business", "Startups", "Innovation"],
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Mental Health and Wellness: Prioritizing Your Well-being in College",
      excerpt: "College life can be stressful. Here are practical strategies for maintaining good mental health and academic balance.",
      content: "Mental health is just as important as physical health, especially during the demanding college years...",
      author: "Dr. Mary Wambui",
      authorRole: "Counseling Psychologist",
      date: "2024-01-30",
      readTime: "7 min read",
      category: "Student Life",
      tags: ["Mental Health", "Wellness", "Self-care"],
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'Student Life', label: 'Student Life' },
    { value: 'Opportunities', label: 'Opportunities' },
    { value: 'Leadership', label: 'Leadership' },
    { value: 'Entrepreneurship', label: 'Entrepreneurship' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Student Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stories, insights, and resources from the Nyandarua County College Student Community. 
            Learn, grow, and connect through shared experiences.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (selectedCategory === 'all' || selectedCategory === featuredPost.category) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Featured</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {featuredPost.author}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {featuredPost.authorRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center text-xs text-gray-500 dark:text-gray-400"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No articles found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;