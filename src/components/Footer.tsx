"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-sm font-bold transition-all duration-300 group-hover:scale-105 group-hover:border-violet-400/60">
                <span className="text-white">R</span>
                <span className="text-violet-400">J</span>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Redam Jaswanth
                </p>

                <p className="text-xs text-zinc-500">
                  AI & Machine Learning Engineer
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
              Building intelligent applications with AI, Machine Learning,
              Generative AI, RAG and Agentic AI.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Quick Links
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-center">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors duration-300 hover:text-violet-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </p>

            <div className="flex gap-3 md:justify-end">
              {/* GitHub */}
              <a
                href="https://github.com/RedamJaswanth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-400 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/redamjaswanth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-zinc-400 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
              >
                in
              </a>

              {/* Email */}
              <a
                href="mailto:jaswanthredam@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-400 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              >
                @
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Redam Jaswanth. All rights reserved.
          </p>

          <p>
            AI & Machine Learning Engineer{" "}
            <span className="text-violet-400">•</span>{" "}
            Generative AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
}