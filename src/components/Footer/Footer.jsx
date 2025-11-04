import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] text-white py-16 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 pl-32">
          {/* Left Column - About */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              V Chaitanya Kumar
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed text-xl">
              An aspiring software engineer passionate about developing
              scalable, real-world solutions while continuously enhancing
              technical and problem-solving skills in web development and AI
              technologies.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <FcGoogle className="text-3xl" />
              </a>
              <a
                href="https://github.com/VChaitanyaKumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/v-chaitanya-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Quick Links</h3>
            <nav className="space-y-4">
              {[
                { name: "About", id: "about" },
                { name: "Education", id: "education" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "work" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  className="block w-full text-gray-300 hover:text-white text-xl font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact Info */}
          <div className="mr-32">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Info</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-lg" />
                </div>
                <span className="text-gray-300 text-xl">+91 9391325081</span>
              </div>

              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <span className="text-gray-300 text-xl">
                  vanamachaitanya246@gmail.com
                </span>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div className="text-gray-300 text-xl">
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center pl-32">
          <p className="text-gray-400 mb-6 md:mb-0 text-lg">
            © 2025 V Chaitanya Kumar. All rights reserved.
          </p>
          <div className="flex space-x-10">
            <button className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              Terms of Service
            </button>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
