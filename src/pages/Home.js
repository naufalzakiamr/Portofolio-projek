// src/pages/Home.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import personal from '../data/personal';

export default function Home() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setTypedText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeInLeft">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-300 mb-6 h-12">
                <span className="text-blue-400">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                {personal.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover-scale animate-glow transition-all duration-300"
              >
                View My Work
              </button>
              <a
                href={personal.resume}
                download="CV-Ahmad-Rizki.pdf"
                className="px-8 py-4 glass text-white font-semibold rounded-lg hover-scale transition-all duration-300 text-center inline-block"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover-scale transition-all duration-300 hover:bg-blue-500/20"
                >
                  <span className="text-xl">
                    {platform === 'github' && '📚'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'instagram' && '📷'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-float">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse-custom opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-custom opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '20+', label: 'Happy Clients' },
            { number: '15+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={index} className="text-center glass p-6 rounded-xl hover-scale">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {personal.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm hover-scale transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}