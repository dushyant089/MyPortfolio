import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "IIMT University, Meerut",
      year: "2024 – 2026",
      status: "Completed",
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      university: "Chaudhary Charan Singh University, Meerut",
      year: "2021 – 2024",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-5 sm:px-8 overflow-hidden bg-[#020b16]"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Academic journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5 shadow-[0_0_15px_rgba(6,217,255,0.5)]" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-7">
            My academic journey has helped me build a strong foundation in
            computer science and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex items-start ${
                  index % 2 === 0
                    ? "sm:justify-start"
                    : "sm:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 sm:left-1/2 top-8 -translate-x-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#020b16] shadow-[0_0_15px_rgba(6,217,255,0.8)]" />
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[44%] ml-12 sm:ml-0 ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(6,217,255,0.08)]">

                    {/* Top Line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                    {/* Year */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span className="px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-semibold">
                        {edu.year}
                      </span>

                      <span className="text-xs text-gray-600 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* University */}
                    <p className="mt-3 text-gray-400 text-sm sm:text-base leading-6">
                      {edu.university}
                    </p>

                    {/* Status */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,217,255,0.7)]" />
                      <span className="text-xs text-gray-500">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Learning · Building · Growing
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;