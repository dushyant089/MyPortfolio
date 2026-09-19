import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "IIMT University, Meerut",
      year: "2024 – 2026",
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      university: "Chaudhary Charan Singh University, Meerut",
      
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 
      dark:from-white dark:via-gray-100 dark:to-gray-200 relative overflow-hidden"
      data-aos="fade-left"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-cyan-400 dark:text-cyan-600">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-400 dark:border-cyan-600 ml-6 space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-gray-800 dark:bg-gray-200 rounded-lg p-6 shadow-lg 
              hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-white dark:border-gray-200"></span>

              <h3 className="text-2xl font-semibold text-white dark:text-black">
                {edu.degree}
              </h3>
              <p className="text-gray-300 dark:text-gray-700">{edu.university}</p>
              <p className="text-sm text-cyan-400 dark:text-cyan-600 font-bold mt-2">
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
