import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#020b16]"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5 shadow-[0_0_15px_rgba(6,217,255,0.5)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-6 rounded-3xl bg-cyan-400/5 blur-3xl" />

              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareColor="#06d9ff"
                glareMaxOpacity={0.15}
                scale={1.02}
                transitionSpeed={1800}
                className="relative"
              >
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400/70 via-blue-500/40 to-cyan-400/20">
                  <div className="rounded-3xl overflow-hidden bg-[#071421] p-2">
                    <img
                      src="/MyPhoto.jpg"
                      alt="Dushyant Rajput"
                      className="w-64 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover object-center rounded-2xl"
                    />
                  </div>
                </div>
              </Tilt>

              {/* Experience/Focus Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-8 px-5 py-4 rounded-xl border border-cyan-400/20 bg-[#071421]/95 backdrop-blur-xl">
                <p className="text-2xl font-extrabold text-cyan-400">
                  MCA
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Computer Applications
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Java Full Stack Developer
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Building ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                real-world applications.
              </span>
            </h3>

            <p className="text-gray-400 leading-8 text-base sm:text-lg mb-5">
              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Dushyant Rajput
              </span>
              , a passionate Java Full Stack Developer focused on building
              modern, scalable and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-8 text-base sm:text-lg mb-8">
              I work with technologies like Java, Spring Boot, React, REST
              APIs and MySQL. I enjoy solving real-world problems and turning
              ideas into clean and practical digital experiences.
            </p>

            {/* Quick Information */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition">
                <p className="text-xs text-gray-500 mb-1">Education</p>
                <p className="text-sm font-semibold text-gray-200">
                  MCA · IIMT University
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition">
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <p className="text-sm font-semibold text-gray-200">
                  Meerut, Uttar Pradesh
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition">
                <p className="text-xs text-gray-500 mb-1">Specialization</p>
                <p className="text-sm font-semibold text-gray-200">
                  Java + Spring Boot
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition">
                <p className="text-xs text-gray-500 mb-1">Frontend</p>
                <p className="text-sm font-semibold text-gray-200">
                  React.js
                </p>
              </div>
            </div>

            <a
              href="/Dushyant-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 font-semibold hover:bg-cyan-400 hover:text-[#020b16] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,217,255,0.25)]"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;