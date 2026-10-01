"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "bg-black/30 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-sm font-bold transition-all duration-300 group-hover:scale-105 group-hover:border-violet-400/50 group-hover:bg-violet-500/20">
            <span className="text-white">R</span>
            <span className="text-violet-400">J</span>
          </div>

          <span className="hidden text-sm font-medium text-zinc-300 sm:block">
            Redam Jaswanth
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-violet-500/10 text-white"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/RedamJaswanth"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/10 md:block"
        >
          GitHub ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:border-violet-400/40 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">

            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <a
              href="https://github.com/RedamJaswanth"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigation}
              className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              GitHub ↗
            </a>

          </div>
        </div>
      )}
    </header>
  );
}