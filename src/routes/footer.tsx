import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect with <span className="text-[#305252]">me!</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out!
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-10">
          <a
            href="https://github.com/AlthanN"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            aria-label="GitHub"
          >
            <FiGithub className="w-8 h-8 text-gray-700 group-hover:text-[#305252]" />
          </a>
          
          <a
            href="https://linkedin.com/in/althan-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-8 h-8 text-gray-700 group-hover:text-[#305252]" />
          </a>
          
          <a
            href="https://instagram.com/althan.nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            aria-label="Instagram"
          >
            <FiInstagram className="w-8 h-8 text-gray-700 group-hover:text-[#305252]" />
          </a>
        </div>

        {/* Email Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-4">
            <FiMail className="w-6 h-6 text-[#305252] mr-3" />
            <span className="text-gray-800 font-medium">althannguyen0910@gmail.com</span>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600">
            © {currentYear} Althan Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;