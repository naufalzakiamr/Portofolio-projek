// src/pages/Projects.js
import { useState } from 'react';
import projects from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Completed', 'In Progress', 'Planning'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Berikut adalah beberapa project yang telah saya kerjakan menggunakan berbagai teknologi modern
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
        {filters.map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale ${
              filter === filterOption
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="glass rounded-xl overflow-hidden hover-scale transition-all duration-300 hover:bg-white/10 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.src = '/project-images/placeholder.jpg';
                }}
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 glass text-center text-sm font-semibold rounded-lg hover-scale transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-center text-sm font-semibold rounded-lg hover-scale transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover-scale"
              >
                ✕
              </button>

              {/* Project Image */}
              <div className="h-64 md:h-80 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/project-images/placeholder.jpg';
                  }}
                />
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 glass font-semibold rounded-lg hover-scale transition-all duration-300"
                  >
                    View on GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold rounded-lg hover-scale transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}