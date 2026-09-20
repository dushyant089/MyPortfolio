import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#020b16]"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Let's connect
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5 shadow-[0_0_15px_rgba(6,217,255,0.5)]" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-7">
            Have a project idea, opportunity or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Contact Form */}
          <div className="relative p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="mb-7">
              <h3 className="text-2xl font-bold text-white">
                Send a Message
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#071421]/80 text-white placeholder-gray-600 focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#071421]/80 text-white placeholder-gray-600 focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#071421]/80 text-white placeholder-gray-600 resize-none focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-[#020b16] font-bold hover:bg-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,217,255,0.3)] transition-all"
              >
                Send Message
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">

            {/* Intro Card */}
            <div className="relative p-7 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              <h3 className="text-2xl font-bold text-white mb-3">
                Let's build something <span className="text-cyan-400">great.</span>
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                I'm open to discussing development projects, freelance
                opportunities and interesting ideas related to web
                development.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:dushyantrajput@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition-all"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-cyan-300 transition-colors">
                  dushyantrajput@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.025]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <p className="text-sm sm:text-base text-gray-300">
                  Meerut, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-5">
                Find me online
              </p>

              <div className="flex gap-3">

                <a
                  href="https://github.com/dushyant089"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dushyant-rajput-a76a27309"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href="mailto:dushyantrajput@gmail.com"
                  aria-label="Email"
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
                >
                  <FaEnvelope className="text-xl" />
                </a>

              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,217,255,0.8)]" />

              <span className="text-sm text-gray-400">
                Open to opportunities and collaborations
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;