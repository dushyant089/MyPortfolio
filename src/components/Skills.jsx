import React from "react";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      subtitle: "Building modern interfaces",
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-cyan-400" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-blue-400" />,
        },
      ],
    },
    {
      title: "Backend",
      subtitle: "Powering scalable applications",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="text-red-400" />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-400" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Database",
      subtitle: "Managing application data",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-orange-400" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500" />,
        },
      ],
    },
    {
      title: "Tools",
      subtitle: "Development & collaboration",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="text-orange-400" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#020b16]"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Technologies I use
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5 shadow-[0_0_15px_rgba(6,217,255,0.5)]" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-7">
            A collection of technologies and tools I use to design, develop
            and deploy modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025] hover:shadow-[0_15px_45px_rgba(6,217,255,0.08)]"
            >
              {/* Top Glow */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category Number */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {category.subtitle}
                  </p>
                </div>

                <span className="text-xs text-cyan-400/60 font-mono">
                  0{skillCategories.indexOf(category) + 1}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-[#071421]/80 hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.04] text-2xl">
                      {skill.icon}
                    </div>

                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-cyan-400/30" />

          <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Always learning
          </span>

          <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-cyan-400/30" />
        </div>
      </div>
    </section>
  );
};

export default Skills;