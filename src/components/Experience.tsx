import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product teams to define technical requirements',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Built responsive web applications using React and Node.js',
        'Developed RESTful APIs and integrated third-party services',
        'Optimized database queries improving performance by 40%',
        'Participated in agile development and sprint planning',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Los Angeles, CA',
      period: '2018 - 2020',
      description: [
        'Created pixel-perfect, responsive user interfaces',
        'Collaborated with designers to implement design systems',
        'Improved site performance and accessibility scores',
        'Maintained and updated legacy codebases',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-gray-800">{exp.title}</h3>
                  <h4 className="text-purple-600 font-medium mb-2">{exp.company}</h4>

                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-500">{exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;