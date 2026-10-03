"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "GitHub",
    description: "Explore my projects",
    href: "https://github.com/RedamJaswanth",
    icon: "↗",
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/redamjaswanth/",
    icon: "↗",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 rounded-full bg-cyan-500/5 blur-[110px]"
      />

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl sm:px-12 md:py-20"
      >
        {/* Top Line */}
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

        {/* Bottom Line */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Hover Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Label */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400"
          >
            Get In Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Let's Build Something{" "}
            <span className="text-violet-400">Amazing</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I'm open to AI and Machine Learning opportunities,
            collaborations, interesting projects and innovative ideas.
            If you're working on something exciting, let's connect.
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="mt-10"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 15px 45px rgba(139,92,246,0.2)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="mailto:jaswanthredam@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/15 px-7 py-3.5 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/10 transition-all duration-300 hover:border-violet-400/70 hover:bg-violet-500/25 hover:text-white"
            >
              Send Me an Email
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* Social Cards */}
          <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.6 + index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group/link flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
              >
                <div>
                  <p className="font-medium text-white">
                    {link.label}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {link.description}
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm text-zinc-400 transition-all duration-300 group-hover/link:border-violet-400/30 group-hover/link:text-white">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300"
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-emerald-400"
            />

            Open to AI & ML Opportunities
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}