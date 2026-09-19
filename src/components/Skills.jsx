import React from "react";
import { FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-pink-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-cyan-400 dark:text-cyan-600">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800/70 dark:bg-gray-200/80 backdrop-blur-lg rounded-xl shadow-lg 
            p-8 hover:shadow-cyan-500/50 transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white dark:text-black">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-gray-900/70 dark:bg-gray-100 
                  rounded-lg p-4 hover:scale-110 transition transform hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                >
                  {skill.icon}
                  <span className="mt-2 text-gray-300 dark:text-gray-700 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
