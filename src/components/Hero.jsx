import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center 
      text-center md:text-left px-5 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>

      {/* Left Side Content */}
      <div className="flex-1 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 dark:text-cyan-600 mb-6">
          Hi, I'm Dushyant Rajput🚀
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Java Full Stack Developer 💻", 2000,
            "AI Enthusiast 🤖", 2000,
            "Problem Solver 🔧", 2000,
            "React & Spring Boot Developer ⚡", 2000,
          ]}
          wrapper="p"
          repeat={Infinity}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-700 max-w-2xl mb-10"
        />

        {/* Buttons */}
        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
            text-white dark:text-black font-semibold shadow-lg hover:scale-110 transition"
          >
            Hire Me 💼
          </a>

          <a
            href="/Dushyant-Resume.pdf"  // ✅ resume file public folder mein rakho
            download
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 
            text-white dark:text-black font-semibold shadow-lg hover:scale-110 transition"
          >
            Download Resume 📄
          </a>
        </div>
      </div>

      {/* Right Side Photo */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
        <Tilt
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          glareEnable={true}
          glareColor="cyan"
          glareMaxOpacity={0.6}
          scale={1.1}
          transitionSpeed={2500}
          className="rounded-full shadow-lg border-4 border-cyan-400"
        >
          <img
            src="/MyPhoto.jpg"  // ✅ photo ko public folder mein rakho
            alt="Dushyant Rajput"
            className="w-57 h-62 md:w-72 md:h-72 rounded-full object-cover"
          />
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
