"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrollProgress = (scrollTop / documentHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}