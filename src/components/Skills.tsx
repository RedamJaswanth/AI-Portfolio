"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: "✦",
    description: "Core AI technologies and machine learning concepts.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    title: "AI Development",
    icon: "◈",
    description: "Frameworks and techniques for building intelligent applications.",
    skills: [
      "RAG",
      "Agentic AI",
      "LangChain",
      "Hugging Face",
      "QLoRA",
      "Transformers",
    ],
  },
  {
    title: "Development",
    icon: "⌘",
    description: "Programming and application development technologies.",
    skills: [
      "Python",
      "FastAPI",
      "Streamlit",
      "SQL",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: "⚡",
    description: "Tools used to build, automate and deploy AI systems.",
    skills: [
      "MLOps",
      "n8n",
      "AutoGen",
      "ChromaDB",
      "REST APIs",
      "Model Deployment",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      {/* Heading */}
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
          My Skills
        </motion.p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies I{" "}
          <span className="text-violet-400">Work With</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A collection of technologies and tools I use to build
          AI, Machine Learning, Generative AI and intelligent
          applications.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.05]"
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Header */}
            <div className="relative flex items-start gap-4">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 6,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-400"
              >
                {group.icon}
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="relative mt-7 flex flex-wrap gap-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.12 +
                      skillIndex * 0.04,
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                  }}
                  className="cursor-default rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        whileHover={{
          y: -4,
        }}
        className="group relative mt-10 overflow-hidden rounded-3xl border border-violet-400/10 bg-gradient-to-r from-violet-500/[0.08] to-cyan-500/[0.05] p-8 text-center transition-all duration-500 hover:border-violet-400/25"
      >
        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl"
        />

        <div className="relative">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Currently Learning
          </p>

          <p className="mt-4 text-lg font-medium text-zinc-200">
            Advanced RAG • Agentic AI • LLM Fine-Tuning • MLOps
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Advanced RAG",
              "Agentic AI",
              "LLM Fine-Tuning",
              "MLOps",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.08,
                }}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}