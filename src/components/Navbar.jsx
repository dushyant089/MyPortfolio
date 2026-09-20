import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020b16]/85 backdrop-blur-xl border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Dushyant
              <span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-300"
                }`}
              >
                {item.label}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}

            {/* Resume */}
            <a
              href="/Dushyant-Resume.pdf"
              download
              className="ml-2 px-5 py-2.5 rounded-lg border border-cyan-400/60 text-cyan-300 text-sm font-semibold hover:bg-cyan-400 hover:text-[#020b16] hover:shadow-[0_0_25px_rgba(6,217,255,0.35)]"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-5" : "max-h-0"
          }`}
        >
          <div className="pt-3 border-t border-cyan-400/10">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="/Dushyant-Resume.pdf"
                download
                className="mt-2 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[#020b16] font-bold text-sm hover:shadow-[0_0_25px_rgba(6,217,255,0.35)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;