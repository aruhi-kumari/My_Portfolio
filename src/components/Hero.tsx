import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
            Aruhi Kumari
          </h1>
          <div className="text-2xl md:text-3xl text-gray-700 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-600 pr-2 animate-pulse">
              {typedText}
            </span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative digital solutions that bridge the gap between design and functionality
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-200/50"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-200/50"
          >
            <Linkedin size={24} className="text-gray-700" />
          </a>
          <a
            href="mailto:aruhi@example.com"
            className="p-3 rounded-full bg-white/80 shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-200/50"
          >
            <Mail size={24} className="text-gray-700" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-blue-100/80 hover:bg-blue-200/80 transition-all duration-300 shadow-lg"
        >
          <ChevronDown size={32} className="text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;