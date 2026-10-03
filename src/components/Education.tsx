"use client";

import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    period: "2023 - 2025",
    degree: "Master of Computer Applications",
    institution: "AITS",
    description:
      "Focused on computer applications, programming, software development, artificial intelligence and modern technologies.",
    highlights: [
      "Computer Applications",
      "Programming",
      "Software Development",
      "Artificial Intelligence",
    ],
  },
  {
    number: "02",
    period: "2020 - 2023",
    degree: "Bachelor of Science",
    institution: "Computer Science • Mathematics • Physics",
    description:
      "Built a strong foundation in computer science, mathematics, programming and analytical problem solving.",
    highlights: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Analytical Problem Solving",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative">
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
          Education
        </motion.p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Academic{" "}
          <span className="text-violet-400">Journey</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          My academic background has helped me develop a strong
          foundation in computer science, programming and technology.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Desktop Timeline Line */}
        <div className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-violet-400/70 via-violet-400/20 to-transparent sm:block" />

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group relative sm:pl-14"
            >
              {/* Timeline Node */}
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + 0.2,
                }}
                className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-black sm:flex"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.05]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    {/* Period */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {item.period}
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="mt-2 text-base font-medium text-cyan-400">
                      {item.institution}
                    </h4>

                    {/* Description */}
                    <p className="mt-5 leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.highlights.map(
                        (highlight, highlightIndex) => (
                          <motion.span
                            key={highlight}
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                0.35 +
                                index * 0.15 +
                                highlightIndex * 0.06,
                            }}
                            whileHover={{
                              scale: 1.05,
                            }}
                            className="cursor-default rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 hover:border-violet-400/30 hover:text-white"
                          >
                            {highlight}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Large Number */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.5,
                    }}
                    className="hidden select-none text-7xl font-bold text-white/[0.035] md:block"
                  >
                    {item.number}
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}