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
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold px-4 sm:px-0">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Cards - Modern Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 max-w-full mx-auto px-2">
        {education.map((edu, index) => (
          <div
            key={edu.id}
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

            {/* Education Content */}
            <div className="p-10">
              {/* Institution Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-gray-600/30">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Degree Title */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 leading-tight">
                  {edu.degree.includes('B.Tech') ? (
                    <>
                      <div className="mb-2">B.Tech</div>
                      <div>Computer Science and Engineering</div>
                    </>
                  ) : edu.degree.includes('Intermediate') ? (
                    <>
                      <div className="mb-2">Intermediate (MPC)</div>
                      <div>Higher Secondary Education</div>
                    </>
                  ) : edu.degree.includes('10th') ? (
                    <>
                      <div className="mb-2">10th Standard</div>
                      <div>Secondary Education</div>
                    </>
                  ) : (
                    edu.degree
                  )}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Institution Details */}
              <div className="mb-6 text-center">
                <div className="text-gray-300 font-medium mb-2 text-xl">
                  {edu.school.includes('Jain University') ? (
                    <>
                      <div className="mb-1">Jain University</div>
                      <div>Bangalore, Karnataka</div>
                    </>
                  ) : edu.school.includes('Narayana Junior College') ? (
                    <>
                      <div className="mb-1">Narayana Junior College</div>
                      <div>Nellore, Andhra Pradesh</div>
                    </>
                  ) : edu.school.includes('Narayana High School') ? (
                    <>
                      <div className="mb-1">Narayana High School</div>
                      <div>Nellore, Andhra Pradesh</div>
                    </>
                  ) : (
                    edu.school
                  )}
                </div>
                <p className="text-gray-400 text-base">{edu.date}</p>
              </div>

              {/* Performance Badge */}
              <div className="mb-6 flex justify-center">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-base font-semibold">Percentage: {edu.grade}</span>
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
