import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name) && name.trim().length > 0;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com)$/;
    return emailRegex.test(email);
  };

  const validateSubject = (subject) => {
    return subject.length <= 50 && subject.trim().length > 0;
  };

  const validateMessage = (message) => {
    return message.length <= 250 && message.trim().length > 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.user_name)) {
      newErrors.user_name = 'Name must contain only alphabetic characters (A-Z, a-z)';
    }

    if (!validateEmail(formData.user_email)) {
      newErrors.user_email = 'Email must end with @gmail.com or @hotmail.com';
    }

    if (!validateSubject(formData.subject)) {
      newErrors.subject = 'Subject must be 1-50 characters long';
    }

    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be 1-250 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_axbtt7a",  // Replace with your EmailJS Service ID
        "template_1ziboq3",  // Replace with your EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset(); // Reset form fields after sending
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
          setErrors({});
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans relative bg-skills-gradient clip-path-custom-2"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="relative text-center mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">GET IN TOUCH</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mb-6"></div>
        <p className="text-gray-400 text-xl font-semibold max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's collaborate and create something amazing together!
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-16 items-stretch">
          
          {/* Contact Info Section */}
          <div className="space-y-8 lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 h-full min-h-[600px]">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-10">
                I'm always excited to discuss new opportunities, innovative projects, or just have a friendly chat about technology and development.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl">Email</h4>
                    <p className="text-gray-400 text-lg">vanamachaitanya246@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl">Phone</h4>
                    <p className="text-gray-400 text-lg">+91 9391325081</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl">Location</h4>
                    <p className="text-gray-400 text-lg">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-10 border-t border-gray-700/50">
                <h4 className="text-white font-semibold text-xl mb-8">Follow Me</h4>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/v-chaitanya-kumar" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/VChaitanyaKumar" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 h-full min-h-[600px] lg:col-span-4">
            <div className="mb-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Send Message
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter Your Name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-5 text-lg rounded-2xl bg-gray-800/50 text-white border ${errors.user_name ? 'border-red-500' : 'border-gray-600/50'} focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-400`}
                />
                {errors.user_name && <p className="text-red-400 text-sm mt-2">{errors.user_name}</p>}
                <p className="text-gray-500 text-xs mt-1">Only alphabetic characters allowed</p>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter Your Email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-5 text-lg rounded-2xl bg-gray-800/50 text-white border ${errors.user_email ? 'border-red-500' : 'border-gray-600/50'} focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-400`}
                />
                {errors.user_email && <p className="text-red-400 text-sm mt-2">{errors.user_email}</p>}
                <p className="text-gray-500 text-xs mt-1">Only @gmail.com or @hotmail.com allowed</p>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  maxLength="50"
                  required
                  className={`w-full p-5 text-lg rounded-2xl bg-gray-800/50 text-white border ${errors.subject ? 'border-red-500' : 'border-gray-600/50'} focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-400`}
                />
                {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject}</p>}
                <p className="text-gray-500 text-xs mt-1">{formData.subject.length}/50 characters</p>
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength="250"
                  required
                  className={`w-full p-5 text-lg rounded-2xl bg-gray-800/50 text-white border ${errors.message ? 'border-red-500' : 'border-gray-600/50'} focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-400 resize-none`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                <p className="text-gray-500 text-xs mt-1">{formData.message.length}/250 characters</p>
              </div>
              
              {/* Send Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-5 px-8 text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;