import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative">
        
        {/* Photo with 3D Tilt */}
        <Tilt
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          glareEnable={true}
          glareColor="cyan"
          glareMaxOpacity={0.6}
          scale={1.05}
          transitionSpeed={2500}
          className="rounded-xl shadow-lg border-4 border-cyan-400"
        >
          <img
            src="/MyPhoto.jpg"   // ✅ photo ko public folder mein rakho
            alt="Dushyant Rajput"
            className="w-72 h-72 md:w-96 md:h-96 rounded-xl object-cover object-center shadow-2xl"
          />
        </Tilt>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-cyan-400 dark:text-cyan-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed mb-6">
            I'm <span className="font-bold text-cyan-400 dark:text-cyan-600">Dushyant Rajput</span>, 
            a passionate <span className="font-bold">Java Full Stack Developer</span> with expertise 
            in React, Spring Boot, and modern UI/UX design. I love building futuristic web applications 
            that blend performance with premium design.
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
            My journey in coding is driven by curiosity and creativity. I enjoy solving real-world 
            problems and continuously learning new technologies to stay ahead in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
