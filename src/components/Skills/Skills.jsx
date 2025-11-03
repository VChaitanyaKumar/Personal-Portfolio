// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-6 sm:mb-8 md:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">SKILLS</h2>
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-0">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Main Skills Container - One Big Card */}
    <div className="py-6 sm:py-8 md:py-10">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-2xl sm:rounded-3xl border border-white 
        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)]">
          
          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {SkillsInfo.map((category) => (
              <div key={category.title} className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-4 sm:mb-6">
                  {category.title}
                </h3>

                {/* Skill Items */}
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 sm:space-x-3 bg-transparent border-2 border-gray-700 rounded-xl sm:rounded-2xl py-2 sm:py-3 px-3 sm:px-4 text-center hover:border-purple-500 transition-colors duration-300"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                      />
                      <span className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  </section>
);

export default Skills;
