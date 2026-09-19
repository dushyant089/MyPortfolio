import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Synergy Desk",
      category: "Java",
      description: "Employee Management System built using Java Spring Boot, REST APIs, and MySQL.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/dushyant089/Synergy-Desk",
      live: "https://synergy-desk-production.up.railway.app/?utm_source=chatgpt.com",
    },
    {
      title: "Student Management System",
      category: "Java",
      description: "A web application for managing student information.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/dushyant089/-Student-Management-System-",
      live: "https://student-management-system-1-c3o9.onrender.com/",
    },
    {
      title: "AI Resume Analyzer",
      category: "AI",
      description: "An AI-powered resume analyzer using NLP and ML.",
      tech: ["Python", "Flask", "NLP", "Machine Learning"],
      github: "https://github.com/dushyant089/AI-Resume-Analyzer",
      live: "https://dazzling-cat-31d46c.netlify.app/",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-cyan-400 dark:text-cyan-600">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Java", "AI"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-lg font-semibold transition 
              ${filter === cat 
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg" 
                : "bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/70 dark:bg-gray-200/80 backdrop-blur-lg rounded-xl shadow-lg 
            p-8 hover:shadow-cyan-500/50 transition transform hover:scale-105 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white dark:text-black">
                {project.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                    text-white dark:text-black shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-cyan-400 transition"
              >
                <FaGithub /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-cyan-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
