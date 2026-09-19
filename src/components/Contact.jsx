import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-cyan-400 dark:text-cyan-600">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <form className="bg-gray-800/70 dark:bg-gray-200/80 backdrop-blur-lg rounded-xl shadow-lg p-8 flex flex-col gap-6 hover:shadow-cyan-500/50 transition transform hover:scale-105">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-700 dark:border-gray-300 bg-transparent text-gray-300 dark:text-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-700 dark:border-gray-300 bg-transparent text-gray-300 dark:text-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-700 dark:border-gray-300 bg-transparent text-gray-300 dark:text-gray-700 focus:outline-none focus:border-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-700 
            px-6 py-3 rounded-lg text-white dark:text-black font-semibold hover:scale-110 transition transform shadow-lg hover:shadow-cyan-500/50"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Social + Map */}
        <div className="flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="mailto:dushyantrajput@gmail.com" className="hover:text-cyan-400 transition">
              <FaEnvelope size={32} />
            </a>
            <a href="https://github.com/dushyant089" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/dushyant-rajput-a76a27309" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <FaLinkedin size={32} />
            </a>
          </div>

          {/* Embedded Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition">
            <iframe
              title="Meerut Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.123456789!2d77.7064!3d28.9845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f123456789%3A0xabcdef123456789!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
