import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t border-gray-200/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Aruhi Kumari
            </div>
            <p className="text-gray-600 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and sharing knowledge with the tech community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Twitter size={20} className="text-gray-700" />
              </a>
              <a
                href="mailto:aruhi@example.com"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Aruhi Kumari. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;