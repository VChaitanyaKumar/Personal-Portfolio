import React, { useState, useEffect } from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleExpanded = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
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
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-0 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Cards - Modern Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 w-full mx-auto px-0">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="group relative bg-gray-900/95 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 border-gray-600/70 shadow-lg shadow-gray-900/50"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-green-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>

            {/* Card Number */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Experience Content */}
            <div className="p-10">
              {/* Company Logo */}
              <div className="flex justify-center mb-6">
                <div
                  className={`${
                    experience.company.includes("Lumbini Technologies")
                      ? "w-24 h-20"
                      : experience.company.includes("WhiteCloudsMedia")
                      ? "w-52 h-20"
                      : "w-48 h-20"
                  } bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-gray-600/30`}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>

              {/* Role Title */}
              <div className="mb-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 leading-tight">
                  {experience.role}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Company Details */}
              <div className="mb-6 text-center">
                <div className="text-gray-300 font-medium mb-2 text-base sm:text-lg md:text-xl">
                  {experience.company.includes("Lumbini Technologies") ? (
                    <>
                      <div className="mb-1">Lumbini Technologies Pvt Ltd</div>
                      <div>Remote</div>
                    </>
                  ) : experience.company.includes("UptoSkills") ? (
                    <>
                      <div className="mb-1">UptoSkills</div>
                      <div>Remote</div>
                    </>
                  ) : experience.company.includes("WhiteCloudsMedia") ? (
                    <>
                      <div className="mb-1">WhiteCloudsMedia Pvt Ltd</div>
                      <div>Onsite</div>
                    </>
                  ) : (
                    experience.company
                  )}
                </div>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                  {experience.date}
                </p>
              </div>

              {/* Description Points */}
              <div className="mb-6">
                <h4 className="text-cyan-300 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-4">
                  Key Responsibilities
                </h4>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-500 hidden sm:block"></div>

                  <div className="space-y-6">
                    {(expandedCards[experience.id]
                      ? experience.desc
                      : experience.desc.slice(0, 2)
                    ).map((point, index) => (
                      <div
                        key={index}
                        className="relative flex items-start group"
                      >
                        {/* Content */}
                        <div className="ml-0 flex-1">
                          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-xl p-5 border-l-4 border-cyan-400 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                              {point.includes("React Native") ? (
                                <>
                                  Developed a cross-platform{" "}
                                  <span className="text-blue-400 font-semibold">
                                    School Management App
                                  </span>{" "}
                                  using{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    React Native (Expo)
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-purple-400 font-semibold">
                                    TypeScript
                                  </span>
                                  , integrated with{" "}
                                  <span className="text-green-400 font-semibold">
                                    Supabase (PostgreSQL)
                                  </span>{" "}
                                  for{" "}
                                  <span className="text-yellow-400 font-semibold">
                                    real-time data synchronization
                                  </span>
                                </>
                              ) : point.includes("role-based") ? (
                                <>
                                  Implemented{" "}
                                  <span className="text-orange-400 font-semibold">
                                    role-based access control
                                  </span>{" "}
                                  for{" "}
                                  <span className="text-pink-400 font-semibold">
                                    Admin, Teachers, and Students
                                  </span>{" "}
                                  with{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    full CRUD operations
                                  </span>
                                  ,{" "}
                                  <span className="text-blue-400 font-semibold">
                                    attendance management
                                  </span>
                                  , and{" "}
                                  <span className="text-green-400 font-semibold">
                                    secure authentication
                                  </span>
                                </>
                              ) : point.includes("app modules") ? (
                                <>
                                  Designed and built app modules including{" "}
                                  <span className="text-purple-400 font-semibold">
                                    Home, Timetable, Tasks, Notes, Exams, Events
                                  </span>
                                  , and{" "}
                                  <span className="text-blue-400 font-semibold">
                                    Student Directory
                                  </span>{" "}
                                  with{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    responsive UI styling
                                  </span>{" "}
                                  using{" "}
                                  <span className="text-orange-400 font-semibold">
                                    Git & GitHub
                                  </span>{" "}
                                  for version control and{" "}
                                  <span className="text-green-400 font-semibold">
                                    Tailwind CSS
                                  </span>
                                </>
                              ) : point.includes("AI-driven") ? (
                                <>
                                  Developed an{" "}
                                  <span className="text-purple-400 font-semibold">
                                    AI-driven personalized learning platform
                                  </span>{" "}
                                  that uses{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    NLP
                                  </span>{" "}
                                  for{" "}
                                  <span className="text-blue-400 font-semibold">
                                    interactive tutoring
                                  </span>
                                  , along with{" "}
                                  <span className="text-green-400 font-semibold">
                                    adaptive video lectures, notes, and quizzes
                                  </span>{" "}
                                  tailored to student needs
                                </>
                              ) : point.includes("AI chatbot") ? (
                                <>
                                  Implemented an{" "}
                                  <span className="text-orange-400 font-semibold">
                                    AI chatbot
                                  </span>{" "}
                                  with{" "}
                                  <span className="text-pink-400 font-semibold">
                                    speech Recognition
                                  </span>
                                  , enabling{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    voice-based interactions
                                  </span>{" "}
                                  and enhancing the{" "}
                                  <span className="text-yellow-400 font-semibold">
                                    learning experience
                                  </span>
                                </>
                              ) : point.includes("progress tracking") ? (
                                <>
                                  Incorporated{" "}
                                  <span className="text-blue-400 font-semibold">
                                    progress tracking
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-green-400 font-semibold">
                                    AI-generated certificates
                                  </span>
                                  , providing a{" "}
                                  <span className="text-purple-400 font-semibold">
                                    structured learning path
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-orange-400 font-semibold">
                                    personalized achievements
                                  </span>{" "}
                                  for users
                                </>
                              ) : point.includes("company website") ? (
                                <>
                                  Developed and deployed the{" "}
                                  <span className="text-blue-400 font-semibold">
                                    official company website
                                  </span>{" "}
                                  using{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    HTML, CSS, Bootstrap, and JavaScript
                                  </span>
                                  , ensuring a{" "}
                                  <span className="text-green-400 font-semibold">
                                    responsive and user-friendly design
                                  </span>{" "}
                                  across devices
                                </>
                              ) : point.includes("cross-functional") ? (
                                <>
                                  Collaborated with{" "}
                                  <span className="text-purple-400 font-semibold">
                                    cross-functional team
                                  </span>{" "}
                                  to align the{" "}
                                  <span className="text-orange-400 font-semibold">
                                    website's UI
                                  </span>{" "}
                                  with{" "}
                                  <span className="text-pink-400 font-semibold">
                                    branding guidelines
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-yellow-400 font-semibold">
                                    business objectives
                                  </span>
                                </>
                              ) : point.includes("website performance") ? (
                                <>
                                  Enhanced{" "}
                                  <span className="text-cyan-400 font-semibold">
                                    website performance
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-blue-400 font-semibold">
                                    navigation structure
                                  </span>
                                  , resulting in a{" "}
                                  <span className="text-green-400 font-semibold">
                                    smooth user experience
                                  </span>{" "}
                                  and improved{" "}
                                  <span className="text-purple-400 font-semibold">
                                    accessibility
                                  </span>
                                </>
                              ) : (
                                point
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                {experience.desc.length > 2 && (
                  <button
                    onClick={() => toggleExpanded(experience.id)}
                    className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm font-medium mt-4 transition-colors duration-200 flex items-center gap-2"
                  >
                    {expandedCards[experience.id] ? (
                      <>
                        <span>Show Less</span>
                        <svg
                          className="w-4 h-4 transform rotate-180"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>+{experience.desc.length - 2} more details</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-green-300 text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm sm:text-base md:text-lg font-medium px-3 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200"
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
