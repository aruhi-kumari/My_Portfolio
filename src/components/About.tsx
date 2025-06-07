import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'Tools', icon: Code, items: ['Git', 'Docker', 'AWS', 'Firebase'] },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center border-4 border-blue-200 shadow-lg">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm Aruhi Kumari, a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating digital experiences that are not only visually appealing but also highly functional and user-friendly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I enjoy tackling complex problems 
              and turning innovative ideas into reality. My goal is to write clean, efficient code that makes a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical blogs and community engagement.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/80 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 hover:bg-white/90 transition-all duration-300 border border-gray-200/50 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;