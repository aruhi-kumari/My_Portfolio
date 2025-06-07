import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for structuring large React applications with proper component architecture and state management.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      category: 'React',
    },
    {
      title: 'Modern Authentication with JWT',
      excerpt: 'A comprehensive guide to implementing secure authentication systems using JSON Web Tokens and refresh tokens.',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      category: 'Security',
    },
    {
      title: 'Database Optimization Techniques',
      excerpt: 'Discover advanced database optimization strategies to improve query performance and reduce load times.',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
      category: 'Database',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Blog
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-gray-200/50 shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group/btn">
                  <span className="mr-2">Read More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;