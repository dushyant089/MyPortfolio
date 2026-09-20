import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#010711] border-t border-cyan-400/10 text-gray-400">

      {/* Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-extrabold text-white hover:text-cyan-400 transition-colors"
            >
              Dushyant<span className="text-cyan-400">.</span>
            </button>

            <p className="text-xs text-gray-600 mt-2">
              Java Full Stack Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

            <a
              href="mailto:dushyantrajput@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
            >
              <FaEnvelope className="text-lg" />
            </a>

            <a
              href="https://github.com/dushyant089"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/dushyant-rajput-a76a27309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
            >
              <FaLinkedin className="text-lg" />
            </a>

          </div>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all"
          >
            <span className="text-xs font-semibold">Back to top</span>
            <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © 2026 Dushyant Rajput. All rights reserved.
          </p>

          <p>
            Built with <span className="text-cyan-400">React</span> &{" "}
            <span className="text-cyan-400">Spring Boot</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;