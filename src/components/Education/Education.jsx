import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">EDUCATION</h2>
        <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-purple-500 mx-auto mt-2 sm:mt-3 md:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-0">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Cards - Single Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border border-gray-700"
          >
            {/* School Logo Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 p-3 sm:p-4 text-center">
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-100 text-xs sm:text-sm font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-purple-200 text-xs">
                    {edu.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4">
              {/* Grade Display */}
              <div className="mb-2 sm:mb-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-white text-xs sm:text-sm">Performance:</h5>
                  <span className="bg-purple-600/20 text-purple-300 text-xs font-semibold px-2 py-1 rounded-full border border-purple-500/30">
                    {edu.grade}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
