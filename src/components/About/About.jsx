import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans mt-12 sm:mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting and Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, <span className="whitespace-nowrap">Dileep Reddy</span>
          </h1>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Software Engineer", "Web Developer", "App Developer"]}
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
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 leading-relaxed text-justify">
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
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-4 border-purple-700 rounded-full"
            style={{ backgroundColor: "#ffffff" }}
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
              className="w-full h-full object-contain rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
