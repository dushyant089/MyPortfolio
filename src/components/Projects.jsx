import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Synergy Desk",
      category: "Java",
      number: "01",
      description:
        "A full-stack employee management system designed to manage employees, attendance and tasks through a modern web interface.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/dushyant089/Synergy-Desk",
      live: "https://synergy-desk-production.up.railway.app/",
    },
    {
      title: "Student Management System",
      category: "Java",
      number: "02",
      description:
        "A web-based application for managing student information with a clean interface and backend data management.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/dushyant089/-Student-Management-System-",
      live: "https://student-management-system-1-c3o9.onrender.com/",
    },
    {
      title: "AI Resume Analyzer",
      category: "AI",
      number: "03",
      description:
        "An AI-focused application that analyzes resume content and provides useful insights using NLP and machine learning concepts.",
      tech: ["Python", "Flask", "NLP", "Machine Learning"],
      github: "https://github.com/dushyant089/AI-Resume-Analyzer",
      live: "https://dazzling-cat-31d46c.netlify.app/",
    },
  ];

  const categories = ["All", "Java", "AI"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#020b16]"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            What I've built
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5 shadow-[0_0_15px_rgba(6,217,255,0.5)]" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-7">
            Some of the real-world applications I've developed while
            learning, experimenting and solving practical problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-400 border-cyan-400 text-[#020b16] shadow-[0_0_22px_rgba(6,217,255,0.25)]"
                  : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_55px_rgba(6,217,255,0.08)]"
            >
              {/* Top Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-7 flex flex-col flex-1">

                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 font-bold font-mono">
                    {project.number}
                  </div>

                  <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-500">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#071421] border border-white/5 text-xs text-gray-400 group-hover:border-cyan-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    View Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/dushyant089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="text-lg" />
            Explore more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;