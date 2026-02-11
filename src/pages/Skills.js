// src/pages/Skills.js
import { useState } from 'react';
import skills from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Berikut adalah teknologi dan tools yang saya kuasai dalam pengembangan aplikasi web modern
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
        {skills.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale ${
              activeCategory === index
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="animate-fadeInUp">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          {skills[activeCategory].category}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].items.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover-scale transition-all duration-300 hover:bg-white/10"
            >
              {/* Check if it's Organizations category */}
              {skills[activeCategory].category === 'Organizations' ? (
                // Organizations Layout
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-float">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                  <p className="text-sm text-blue-400 font-medium mb-3">{skill.role}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-glow"></div>
                </div>
              ) : (
                // Skills Layout
                <>
                  {/* Skill Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl animate-float">{skill.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out animate-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-20 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center mb-12">
          Learning <span className="gradient-text">Journey</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {[
              {
                year: '2020',
                title: 'Started Web Development',
                description: 'Mulai belajar HTML, CSS, dan JavaScript dasar'
              },
              {
                year: '2021',
                title: 'React & Modern Frontend',
                description: 'Mendalami React.js, ES6+, dan tools modern seperti Webpack'
              },
              {
                year: '2022',
                title: 'Full Stack Development',
                description: 'Belajar Node.js, Express, database, dan deployment'
              },
              {
                year: '2023',
                title: 'Advanced Technologies',
                description: 'TypeScript, Next.js, cloud services, dan microservices'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass p-6 rounded-xl hover-scale">
                    <div className="text-blue-400 font-bold text-lg mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse-custom"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}