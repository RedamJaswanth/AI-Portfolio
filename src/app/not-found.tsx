"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-white">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl text-center"
      >
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[120px] font-bold leading-none tracking-tight sm:text-[160px]"
        >
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-400">
          The page you are looking for doesn't exist or may have been moved.
          Let's get you back to the portfolio.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-7 py-3.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:scale-105 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Small Brand */}
        <p className="mt-10 text-sm text-zinc-600">
          Redam Jaswanth • AI & Machine Learning Engineer
        </p>
      </motion.div>
    </main>
  );
}