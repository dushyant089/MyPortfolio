import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020b16] px-5 pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,217,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,217,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06d9ff]" />
              Available for opportunities
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                Dushyant
              </span>
              <br />
              <span className="text-white">Rajput</span>
              <span className="text-cyan-400">.</span>
            </h1>

            {/* Typing Animation */}
            <div className="mt-6 text-xl sm:text-2xl font-semibold">
              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                  "React & Spring Boot Developer",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-cyan-400"
              />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-8">
              I build modern, scalable and user-focused web applications using
              Java, Spring Boot, React and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-[#020b16] font-bold shadow-[0_0_25px_rgba(6,217,255,0.22)] hover:bg-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(6,217,255,0.4)]"
              >
                Hire Me
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href="/Dushyant-Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-cyan-400/30 bg-white/[0.03] text-white font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-1"
              >
                Download Resume
                <span>↓</span>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              {["Java", "Spring Boot", "React", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Profile Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

              {/* Decorative Rings */}
              <div className="absolute -inset-5 rounded-full border border-cyan-400/20" />
              <div className="absolute -inset-10 rounded-full border border-blue-500/10" />

              {/* Photo Card */}
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                glareEnable={true}
                glareColor="#06d9ff"
                glareMaxOpacity={0.18}
                scale={1.03}
                transitionSpeed={1800}
                className="relative rounded-full"
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_50px_rgba(6,217,255,0.2)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#071421] p-2">
                    <img
                      src="/MyPhoto.jpg"
                      alt="Dushyant Rajput"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </Tilt>

              {/* Floating Developer Badge */}
              <div className="absolute -bottom-3 -left-5 sm:-left-10 px-4 py-3 rounded-xl border border-cyan-400/20 bg-[#071421]/90 backdrop-blur-xl shadow-[0_0_25px_rgba(6,217,255,0.08)]">
                <p className="text-xs text-gray-500">Currently</p>
                <p className="text-sm font-semibold text-cyan-300">
                  MCA Student
                </p>
              </div>

              {/* Floating Code Badge */}
              <div className="absolute -top-3 -right-3 sm:-right-8 px-4 py-3 rounded-xl border border-blue-400/20 bg-[#071421]/90 backdrop-blur-xl shadow-[0_0_25px_rgba(59,130,246,0.08)]">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="text-sm font-semibold text-white">
                  Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;