import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] text-white py-8 sm:py-10 md:py-12 border-t border-gray-800">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Left Column - About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">V Chaitanya Kumar</h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              An aspiring software engineer passionate about developing scalable, 
              real-world solutions while continuously enhancing technical and 
              problem-solving skills in web development and AI technologies.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="https://www.linkedin.com/in/v-chaitanya-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <FaLinkedin className="text-white text-sm sm:text-lg" />
              </a>
              <a
                href="https://github.com/VChaitanyaKumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
              >
                <FaGithub className="text-white text-sm sm:text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
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
                  className="block text-gray-300 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-300 text-sm">vchaitanyakumar@gmail.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div className="text-gray-300 text-sm">
                  <p>Bangalore, Karnataka</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 V Chaitanya Kumar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;