"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-120px] top-[20%] h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-100px] top-[30%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-500/50" />
            AI & ML ENGINEER
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm Redam{" "}
            <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Jaswanth
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-2xl text-2xl font-semibold leading-tight text-zinc-200 sm:text-3xl"
          >
            Building the Future with{" "}
            <span className="text-violet-400">AI</span> &{" "}
            <span className="text-cyan-400">Machine Learning</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build intelligent applications using Machine Learning,
            Generative AI, Large Language Models, RAG and Agentic AI. Turning
            ideas into practical AI-powered solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="group rounded-full border border-violet-400/40 bg-violet-500/15 px-7 py-3.5 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/10 transition-all duration-300 hover:border-violet-400/70 hover:bg-violet-500/25 hover:text-white"
            >
              View Projects
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Download Resume */}
            <a
              href="/Redam_Jaswanth_Latest.pdf"
              download
              className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
            >
              Download Resume ↓
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RedamJaswanth"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
            >
              GitHub ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <div>
              <p className="text-2xl font-bold text-white">AI</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                Artificial Intelligence
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">GenAI</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                Generative AI
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">RAG</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                Retrieval Systems
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-cyan-500/20 to-violet-500/30 blur-2xl"
          />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-400/30 bg-white/[0.04] p-2 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-950/80 via-zinc-950 to-cyan-950/60">
              <Image
                src="/profile.png"
                alt="Redam Jaswanth"
                width={800}
                height={1000}
                priority
                className="relative z-10 w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Labels */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[-20px] top-[35%] z-20 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-xs font-medium text-zinc-200 shadow-xl backdrop-blur-xl"
              >
                <span className="mr-2 text-violet-400">✦</span>
                Generative AI
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[22%] right-[-20px] z-20 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-xs font-medium text-zinc-200 shadow-xl backdrop-blur-xl"
              >
                <span className="mr-2 text-cyan-400">✦</span>
                RAG & AI Agents
              </motion.div>

              {/* Floating Dots */}
              <motion.span
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute right-8 top-8 z-20 h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-500/70"
              />

              <motion.span
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 left-8 z-20 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/70"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}