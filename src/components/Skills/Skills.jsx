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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">SKILLS</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-2xl font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
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
                        <span className="text-white text-xl font-bold">
                          {String(categoryIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {/* Top Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl transform rotateX-90 translateZ-8 origin-top"></div>
                      {/* Right Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl transform rotateY-90 translateZ-8 origin-right"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="text-gray-400 text-sm">{category.skills.length} Technologies</div>
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
                      className="group relative w-32 h-32 transform-style-3d cursor-pointer"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      {/* 3D Cube */}
                      <div className="absolute inset-0 transform-style-3d transition-transform duration-700 group-hover:rotateY-180">
                        {/* Front Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl flex flex-col items-center justify-center p-4 transform translateZ-16">
                          <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-2 shadow-inner">
                            <img
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-300 text-center leading-tight">
                            {skill.name.length > 12 ? skill.name.substring(0, 10) + '...' : skill.name}
                          </div>
                        </div>

                        {/* Back Face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/90 to-cyan-600/95 backdrop-blur-sm rounded-2xl border border-purple-500/50 shadow-xl flex flex-col items-center justify-center p-4 transform rotateY-180 translateZ-16">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">
                              {Math.floor(Math.random() * 25) + 75}%
                            </div>
                            <div className="text-xs text-gray-200 mb-3">Proficiency</div>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < 4 ? 'bg-white' : 'bg-white/30'
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
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-300"></div>

                      {/* Skill Level Indicator */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10">
                        A
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Statistics Dashboard */}
        <div className="mt-20 text-center">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative inline-block transform-style-3d">
              {/* Main Dashboard */}
              <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl transform translateZ-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                  Skills Dashboard
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { 
                      label: 'Total Skills', 
                      value: SkillsInfo.reduce((total, category) => total + category.skills.length, 0) + '+',
                      color: 'from-purple-500 to-blue-600',
                      icon: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                    },
                    { 
                      label: 'Categories', 
                      value: SkillsInfo.length,
                      color: 'from-blue-500 to-cyan-600',
                      icon: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    },
                    { 
                      label: 'Experience', 
                      value: '3+ Years',
                      color: 'from-cyan-500 to-green-600',
                      icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    },
                    { 
                      label: 'Expertise', 
                      value: 'Advanced',
                      color: 'from-green-500 to-yellow-600',
                      icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="relative w-20 h-20 mx-auto mb-4 transform-style-3d">
                        {/* 3D Icon Cube */}
                        <div className="absolute inset-0 transform-style-3d transition-transform duration-500 hover:rotateY-45 hover:rotateX-15">
                          {/* Front Face */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg transform translateZ-10`}>
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d={stat.icon} clipRule="evenodd" />
                            </svg>
                          </div>
                          {/* Top Face */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-80 rounded-2xl transform rotateX-90 translateZ-10 origin-top`}></div>
                          {/* Right Face */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-60 rounded-2xl transform rotateY-90 translateZ-10 origin-right`}></div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Shadow/Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/60 rounded-3xl transform translateZ-0 translateY-2 translateX-2 -z-10"></div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Custom CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translateZ-0 { transform: translateZ(0px); }
        .translateZ-8 { transform: translateZ(8px); }
        .translateZ-10 { transform: translateZ(10px); }
        .translateZ-16 { transform: translateZ(16px); }
        .rotateX-90 { transform: rotateX(90deg); }
        .rotateY-90 { transform: rotateY(90deg); }
        .rotateY-180 { transform: rotateY(180deg); }
        .rotateY-45 { transform: rotateY(45deg); }
        .rotateX-15 { transform: rotateX(15deg); }
      `}</style>
    </section>
  );
};

export default Skills;