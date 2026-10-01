"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#050505]">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]"
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-xl font-bold shadow-lg shadow-violet-500/10"
        >
          <span className="text-white">R</span>
          <span className="text-violet-400">J</span>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-6 text-sm font-medium tracking-widest text-zinc-400"
        >
          LOADING
        </motion.p>

        {/* Loading Line */}
        <div className="mt-5 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
          />
        </div>

        {/* Brand */}
        <p className="mt-5 text-xs text-zinc-600">
          Redam Jaswanth • AI & Machine Learning
        </p>
      </div>
    </main>
  );
}