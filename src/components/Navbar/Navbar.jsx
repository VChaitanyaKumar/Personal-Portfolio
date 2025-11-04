import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/50" 
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >


      <div className="relative text-white py-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer group">
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">&lt;</span>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-white transition-all duration-300">
            Portfolio
          </span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-6 py-3 rounded-full text-xl font-medium transition-all duration-300 group ${
                  activeSection === item.id 
                    ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25" 
                    : "text-gray-200 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.label}
                {/* Hover effect underline */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                  activeSection !== item.id ? "group-hover:w-full" : ""
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-3">
          <a
            href="https://github.com/VChaitanyaKumar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-gray-600/50"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/v-chaitanya-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-blue-500/50"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700/50"
          >
            {isOpen ? (
              <FiX className="text-xl text-purple-400" />
            ) : (
              <FiMenu className="text-xl text-purple-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 md:hidden overflow-hidden">
          {/* Mobile Menu Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative p-6">
            <ul className="flex flex-col space-y-3 text-gray-200 mb-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25" 
                        : "text-gray-200 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700/50">
              <a
                href="https://github.com/VChaitanyaKumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/v-chaitanya-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700/50"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;