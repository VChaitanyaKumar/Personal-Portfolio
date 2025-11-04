import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pb-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
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
          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 leading-relaxed text-justify max-w-3xl mx-auto">
            An aspiring software engineer with knowledge in programming and web
            development. Passionate about developing scalable, real-world
            solutions while continuously enhancing technical and problem-solving
            skills and seeking a full-time role in a collaborative, agile
            environment to contribute to innovative software projects.
          </p>
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
