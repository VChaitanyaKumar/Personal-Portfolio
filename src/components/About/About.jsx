import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pb-4 px-8 sm:px-12 md:px-16 lg:px-56 xl:px-64 font-sans"
    >
      <div className="flex flex-col items-center text-center w-full mx-auto">
        {/* About Me Heading */}
        <div className="text-center mb-12 pt-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Profile Photo - Centered at Top */}
        <div className="mb-8 md:mb-12">
          <Tilt
            className="w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[26rem] border-4 border-purple-700 rounded-2xl overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="V Chaitanya Kumar"
              className="w-full h-full object-cover rounded-2xl drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

        {/* Content - Centered Below Photo */}
        <div className="w-full text-center">
          {/* Greeting and Name */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
            Hi, <span className="whitespace-nowrap">V Chaitanya Kumar</span>
          </h1>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Software Developer",
                "Full Stack Developer",
                "App Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Content Card */}
          <div className="w-full max-w-none mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8 md:mb-10">
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-justify">
                  An aspiring <span className="text-purple-400 font-semibold">software engineer</span> with expertise in{" "}
                  <span className="text-blue-400 font-semibold">programming</span> and{" "}
                  <span className="text-green-400 font-semibold">web development</span>. 
                  Passionate about developing{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    scalable, real-world solutions
                  </span>{" "}
                  while continuously enhancing{" "}
                  <span className="text-yellow-400 font-semibold">technical</span> and{" "}
                  <span className="text-pink-400 font-semibold">problem-solving skills</span> and 
                  seeking a full-time role in a{" "}
                  <span className="text-cyan-400 font-semibold">collaborative, agile environment</span>{" "}
                  to contribute to{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    innovative software projects
                  </span>.
                </p>
              </div>
            </div>
          </div>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1a9WI1Zg9bHUwBz5Xh_Meu6bfh4BT0F_I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full mt-4 sm:mt-5 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
