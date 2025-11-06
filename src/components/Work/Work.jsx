import React, { useState } from "react";
import { projects } from "../../constants";

// Helper function to colorize text
const colorizeText = (text) => {
  const techColors = {
    // Frontend
    'React': 'text-blue-400',
    'Next.js': 'text-blue-400',
    'Vue.js': 'text-blue-400',
    'Angular': 'text-blue-400',
    'HTML': 'text-blue-400',
    'CSS': 'text-blue-400',
    'JavaScript': 'text-blue-400',
    'TypeScript': 'text-blue-400',
    'Tailwind': 'text-blue-400',
    'Bootstrap': 'text-blue-400',
    
    // Backend
    'Node.js': 'text-green-400',
    'Express': 'text-green-400',
    'Django': 'text-green-400',
    'Flask': 'text-green-400',
    'PHP': 'text-green-400',
    'Laravel': 'text-green-400',
    'Spring': 'text-green-400',
    'ASP.NET': 'text-green-400',
    
    // Databases
    'MongoDB': 'text-orange-400',
    'MySQL': 'text-orange-400',
    'PostgreSQL': 'text-orange-400',
    'Firebase': 'text-orange-400',
    'Supabase': 'text-orange-400',
    'Redis': 'text-orange-400',
    'SQLite': 'text-orange-400',
    
    // Mobile
    'React-Native': 'text-purple-400',
    'Flutter': 'text-purple-400',
    'Ionic': 'text-purple-400',
    'Android': 'text-purple-400',
    'iOS': 'text-purple-400',
    
    // Cloud & DevOps
    'AWS': 'text-cyan-400',
    'Azure': 'text-cyan-400',
    'Docker': 'text-cyan-400',
    'GitHub': 'text-cyan-400',
    'Vercel': 'text-cyan-400',
    'Netlify': 'text-cyan-400',
    
    // AI/ML
    'AI': 'text-pink-400',
    'ML': 'text-pink-400',
    'OpenAI': 'text-pink-400',
    'GPT': 'text-pink-400',
    
    // Tools
    'API': 'text-yellow-400',
    'REST': 'text-yellow-400',
    'GraphQL': 'text-yellow-400',
    'JWT': 'text-yellow-400',
    'CRUD': 'text-yellow-400'
  };
  
  let coloredText = text;
  Object.entries(techColors).forEach(([tech, color]) => {
    const regex = new RegExp(`\\b${tech}\\b`, 'gi');
    coloredText = coloredText.replace(regex, `<span class="${color} font-semibold">${tech}</span>`);
  });
  
  return coloredText;
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [showAllProjects, setShowAllProjects] = useState(false);

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

  const toggleShowAllProjects = () => {
    setShowAllProjects(prev => !prev);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section
      id="work"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-0 font-sans relative bg-skills-gradient clip-path-custom"
    >

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">PROJECTS</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
          A showcase of innovative projects demonstrating my expertise in modern web technologies and problem-solving capabilities
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full mx-auto px-0">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-gray-900/95 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 border-gray-600/70 shadow-lg shadow-gray-900/50 cursor-pointer"
            onClick={() => handleOpenModal(project)}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-green-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>
            
            {/* Card Number */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Project Content */}
            <div className="relative z-10 p-10">
              {/* Project Title */}
              <div className="mb-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-cyan-300 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-4">Project Overview</h4>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-500 hidden sm:block"></div>
                  
                  <div className="space-y-6">
                    {(expandedCards[project.id] ? project.description : project.description.slice(0, 2)).map((point, index) => (
                      <div key={index} className="relative flex items-start group">

                        
                        {/* Content */}
                        <div className="ml-0 flex-1">
                          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-xl p-5 border-l-4 border-cyan-400 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                            <div 
                              className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
                              dangerouslySetInnerHTML={{ __html: colorizeText(point) }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Read More Button */}
                {project.description.length > 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(project.id);
                    }}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-4 transition-colors duration-200 flex items-center gap-2"
                  >
                    {expandedCards[project.id] ? (
                      <>
                        <span>Show Less</span>
                        <svg className="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>+{project.description.length - 2} more details</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
              
              {/* Technology Tags */}
              <div className="mb-6">
                <h4 className="text-green-300 text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm sm:text-base md:text-lg font-medium px-2 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(project);
                  }}
                  className="px-4 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Read More / Show Less Button */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={toggleShowAllProjects}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center gap-3"
          >
            {showAllProjects ? (
              <>
                <span>Show Less</span>
                <svg className="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            ) : (
              <>
                <span>View More Projects ({projects.length - 3} more)</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Enhanced Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl lg:w-full w-[95%] max-w-5xl overflow-hidden relative border border-gray-600/50">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 rounded-3xl -z-10"></div>
            
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-all duration-200 bg-gray-700/50 hover:bg-gray-600/50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-8 pb-8">
              {/* Project Header */}
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
                  {selectedProject.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>
              </div>

              {/* Project Details */}
              <div className="mb-8">
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Project Overview</h4>
                <ul className="text-gray-300 space-y-4">
                  {selectedProject.description.map((point, index) => (
                    <li key={index} className="flex items-start text-justify">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className={`flex gap-4 ${selectedProject.title.includes("HIJBLR Church Website") ? "" : "justify-center"}`}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${selectedProject.title.includes("HIJBLR Church Website") ? "flex-1" : "w-full max-w-md"} bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
                {selectedProject.title.includes("HIJBLR Church Website") && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Work;
