import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-cyan-50/80 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;