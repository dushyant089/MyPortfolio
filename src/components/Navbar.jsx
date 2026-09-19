import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "contact"];
      let current = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 dark:bg-white/80 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 dark:text-cyan-600 cursor-pointer">
          Dushyant Rajput
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition ${
                activeSection === item.id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300 dark:text-gray-700 hover:text-cyan-400"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Resume Download Button */}
          <li>
            <a
              href="/Dushyant-Resume.pdf" // ✅ apna resume file public folder mein rakho
              download
              className="ml-6 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
              text-white dark:text-black font-semibold shadow-lg hover:scale-110 transition"
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-400 dark:text-cyan-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 dark:bg-gray-200 px-6 py-4 space-y-4 font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition ${
                activeSection === item.id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300 dark:text-gray-700 hover:text-cyan-400"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Resume Download Button (Mobile) */}
          <li>
            <a
              href="/Dushyant-Resume.pdf"
              download
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
              text-white dark:text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
