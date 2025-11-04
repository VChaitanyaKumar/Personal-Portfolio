import React, { useState, useEffect } from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleExpanded = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality - slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Cards - Modern Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 max-w-full mx-auto px-2">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700/50"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Card Number */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Experience Content */}
            <div className="p-10">
              {/* Company Logo */}
              <div className="flex justify-center mb-6">
                <div className={`${
                  experience.company.includes('Lumbini Technologies') 
                    ? 'w-24 h-20' 
                    : experience.company.includes('WhiteCloudsMedia')
                    ? 'w-52 h-20'
                    : 'w-48 h-20'
                } bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-gray-600/30`}>
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Role Title */}
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 leading-tight">
                  {experience.role}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Company Details */}
              <div className="mb-6 text-center">
                <div className="text-gray-300 font-medium mb-2 text-2xl">
                  {experience.company.includes('Lumbini Technologies') ? (
                    <>
                      <div className="mb-1">Lumbini Technologies Pvt Ltd</div>
                      <div>Remote</div>
                    </>
                  ) : experience.company.includes('UptoSkills') ? (
                    <>
                      <div className="mb-1">UptoSkills</div>
                      <div>Remote</div>
                    </>
                  ) : experience.company.includes('WhiteCloudsMedia') ? (
                    <>
                      <div className="mb-1">WhiteCloudsMedia Pvt Ltd</div>
                      <div>Onsite</div>
                    </>
                  ) : (
                    experience.company
                  )}
                </div>
                <p className="text-gray-400 text-lg">{experience.date}</p>
              </div>

              {/* Description Points */}
              <div className="mb-6">
                <h4 className="text-cyan-300 text-base font-semibold uppercase tracking-wider mb-4">Key Responsibilities</h4>
                <ul className="text-gray-300 space-y-3">
                  {(expandedCards[experience.id] ? experience.desc : experience.desc.slice(0, 2)).map((point, index) => (
                    <li key={index} className="flex items-start text-justify">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Read More Button */}
                {experience.desc.length > 2 && (
                  <button
                    onClick={() => toggleExpanded(experience.id)}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-4 transition-colors duration-200 flex items-center gap-2"
                  >
                    {expandedCards[experience.id] ? (
                      <>
                        <span>Show Less</span>
                        <svg className="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>+{experience.desc.length - 2} more details</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-green-300 text-base font-semibold uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-medium px-3 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
