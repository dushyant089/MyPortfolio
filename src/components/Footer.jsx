import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 
    dark:from-white dark:via-gray-100 dark:to-gray-200 text-gray-300 dark:text-gray-700 py-8 text-center">
      
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="mailto:dushyantrajput@gmail.com" className="hover:text-cyan-400 transition">
          <FaEnvelope size={28} />
        </a>
        <a href="https://github.com/dushyant089" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/dushyant-rajput-a76a27309" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">© 2026 Dushyant Rajput. All rights reserved.</p>

      {/* Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-gradient-to-r from-cyan-500 to-blue-500 
        text-white dark:text-black px-4 py-2 rounded-full shadow-lg hover:scale-110 transition 
        hover:shadow-cyan-500/50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
