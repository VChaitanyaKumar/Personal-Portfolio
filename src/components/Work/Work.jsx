import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleExpanded = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="work"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border border-gray-700"
          >
            {/* Project Image */}
            <div 
              className="relative overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {project.title}
              </h3>
              <ul className="text-gray-400 text-sm mb-4 space-y-2">
                {(expandedCards[project.id] ? project.description : project.description.slice(0, 2)).map((point, index) => (
                  <li key={index} className="flex items-start text-justify">
                    <span className="text-purple-400 mr-2 mt-0.5 text-xs">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Read More Button */}
              {project.description.length > 2 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded(project.id);
                  }}
                  className="text-purple-400 hover:text-purple-300 text-xs font-medium mb-4 transition-colors duration-200"
                >
                  {expandedCards[project.id] ? 'Read Less' : `+${project.description.length - 2} more points...`}
                </button>
              )}
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-purple-300 text-xs font-medium px-3 py-1">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Action Button */}
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-4xl overflow-hidden relative border border-gray-700">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-200 bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-1/2 w-full flex justify-center bg-gray-800/50 p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-md object-contain rounded-lg shadow-xl"
                />
              </div>
              
              {/* Project Details */}
              <div className="lg:w-1/2 w-full p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <ul className="text-gray-300 mb-6 space-y-3">
                  {selectedProject.description.map((point, index) => (
                    <li key={index} className="flex items-start text-justify">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* All Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 text-sm font-medium px-3 py-2 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
