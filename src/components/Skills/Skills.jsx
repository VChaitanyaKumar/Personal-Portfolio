// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-skills-gradient clip-path-custom relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
          SKILLS
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* 3D Skills Cube Layout */}
      <div className="max-w-7xl mx-auto perspective-1000">
        {/* Skills Cube Container */}
        <div className="relative transform-style-3d">
          {SkillsInfo.map((category, categoryIndex) => (
            <div key={category.title} className="mb-20 last:mb-0">
              {/* Category Title */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800/60 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-700/50 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    {/* 3D Icon Container */}
                    <div className="w-16 h-16 relative transform-style-3d">
                      {/* Front Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform translateZ-8">
                        <span className="text-white text-sm sm:text-base md:text-lg font-bold">
                          {String(categoryIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Top Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl transform rotateX-90 translateZ-8 origin-top"></div>
                      {/* Right Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl transform rotateY-90 translateZ-8 origin-right"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="text-gray-400 text-sm">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <Tilt
                    key={skill.name}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <div
                      className="group relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 transform-style-3d cursor-pointer"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      {/* 3D Cube */}
                      <div className="absolute inset-0 transform-style-3d transition-transform duration-700 group-hover:rotateY-180">
                        {/* Front Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 transform translateZ-16">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                            <img
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                            />
                          </div>
                          <div className="text-sm sm:text-base font-medium text-gray-300 text-center leading-tight">
                            {skill.name.length > 12
                              ? skill.name.substring(0, 10) + "..."
                              : skill.name}
                          </div>
                        </div>

                        {/* Back Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/90 to-cyan-600/95 backdrop-blur-sm rounded-2xl border border-purple-500/50 shadow-xl flex flex-col items-center justify-center p-4 transform rotateY-180 translateZ-16">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">
                              {Math.floor(Math.random() * 25) + 75}%
                            </div>
                            <div className="text-xs text-gray-200 mb-3">
                              Proficiency
                            </div>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < 4 ? "bg-white" : "bg-white/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Top Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/60 to-gray-800/80 rounded-2xl transform rotateX-90 translateZ-16 origin-top border border-gray-600/30"></div>

                        {/* Bottom Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl transform rotateX-90 translateZ-0 origin-bottom border border-gray-800/50"></div>

                        {/* Left Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-750/70 to-gray-850/85 rounded-2xl transform rotateY-90 translateZ-0 origin-left border border-gray-700/40"></div>

                        {/* Right Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-750/70 to-gray-850/85 rounded-2xl transform rotateY-90 translateZ-16 origin-right border border-gray-700/40"></div>
                      </div>

                      {/* Floating Shadow */}
                      <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-6 sm:h-7 md:h-8 bg-black/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-300"></div>

                      {/* Skill Level Indicator */}
                      <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg z-10">
                        A
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Custom CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .translateZ-0 {
          transform: translateZ(0px);
        }
        .translateZ-8 {
          transform: translateZ(8px);
        }
        .translateZ-10 {
          transform: translateZ(10px);
        }
        .translateZ-16 {
          transform: translateZ(16px);
        }
        .rotateX-90 {
          transform: rotateX(90deg);
        }
        .rotateY-90 {
          transform: rotateY(90deg);
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .rotateY-45 {
          transform: rotateY(45deg);
        }
        .rotateX-15 {
          transform: rotateX(15deg);
        }
      `}</style>
    </section>
  );
};

export default Skills;
