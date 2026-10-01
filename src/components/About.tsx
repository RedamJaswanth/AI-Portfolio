"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "Generative AI & LLMs",
  "RAG Applications",
  "Agentic AI",
  "LLM Fine-Tuning",
  "AI Application Development",
];

const stats = [
  {
    value: "MCA",
    label: "Computer Applications",
  },
  {
    value: "AI / ML",
    label: "Engineering Focus",
  },
  {
    value: "GenAI",
    label: "Application Development",
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400"
        >
          About Me
        </motion.p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Building Intelligent{" "}
          <span className="text-violet-400">Solutions</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          I am Redam Jaswanth, an AI & Machine Learning Engineer focused
          on building practical applications with modern Artificial
          Intelligence technologies.
        </p>
      </motion.div>

      {/* Main About Cards */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* AI Journey */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.06]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-400"
          >
            ✦
          </motion.div>

          <h3 className="relative text-2xl font-semibold text-white">
            My AI Journey
          </h3>

          <p className="relative mt-5 leading-8 text-zinc-400">
            My journey in technology is focused on understanding how
            Artificial Intelligence can solve real-world problems.
            I enjoy working with Machine Learning, Generative AI,
            Large Language Models and intelligent AI systems.
          </p>

          <p className="relative mt-4 leading-8 text-zinc-400">
            I work with technologies such as Python, LangChain,
            Hugging Face, FastAPI, Streamlit and modern AI tools
            to transform ideas into functional applications.
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.06]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -5,
            }}
            className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-xl text-cyan-400"
          >
            ◈
          </motion.div>

          <h3 className="relative text-2xl font-semibold text-white">
            Current Focus
          </h3>

          <div className="relative mt-6 space-y-4">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + index * 0.08,
                }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                </span>

                {item}
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>

        {/* Developer Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.06]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-400"
          >
            ⌘
          </motion.div>

          <h3 className="relative text-2xl font-semibold text-white">
            My Approach
          </h3>

          <p className="relative mt-5 leading-8 text-zinc-400">
            I focus on learning by building. My goal is to understand
            how AI systems work and turn that knowledge into useful,
            reliable and practical applications.
          </p>

          <div className="relative mt-7 flex flex-wrap gap-2">
            {["Learn", "Build", "Experiment", "Improve"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.45 + index * 0.08,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 hover:border-violet-400/40 hover:text-white"
                >
                  {item}
                </motion.span>
              ),
            )}
          </div>

          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <p className="relative text-3xl font-bold text-white">
              {stat.value}
            </p>

            <p className="relative mt-2 text-sm text-zinc-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}