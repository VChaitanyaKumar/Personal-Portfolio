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

  // Auto-slide functionality - slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Slider Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Slider Wrapper */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border border-gray-700">
                  {/* Company Logo Header */}
                  <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {experience.role}
                        </h3>
                        <p className="text-purple-100 text-sm font-medium mb-1">
                          {experience.company}
                        </p>
                        <p className="text-purple-200 text-sm">
                          {experience.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Description Points */}
                    <ul className="text-gray-400 space-y-3 mb-4">
                      {(expandedCards[experience.id] ? experience.desc : experience.desc.slice(0, 2)).map((point, index) => (
                        <li key={index} className="flex items-start text-justify">
                          <span className="text-purple-400 mr-3 mt-1 text-sm">•</span>
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Read More Button */}
                    {experience.desc.length > 2 && (
                      <button
                        onClick={() => toggleExpanded(experience.id)}
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium mb-6 transition-colors duration-200"
                      >
                        {expandedCards[experience.id] ? 'Read Less' : `+${experience.desc.length - 2} more points...`}
                      </button>
                    )}

                    {/* Skills Section */}
                    <div>
                      <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
