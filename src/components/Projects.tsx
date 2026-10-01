"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GitHubProject = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  topics: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/github");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("GitHub projects error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A collection of AI, Machine Learning, Generative AI, and software
            development projects built while learning and experimenting with
            modern technologies.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        )}

        {/* Projects */}
        {!loading && projects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.055]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                {/* Number */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    ↗
                  </a>
                </div>

                {/* Project Name */}
                <h3 className="relative text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                  {project.name.replace(/[-_]/g, " ")}
                </h3>

                {/* Description */}
                <p className="relative mt-3 line-clamp-4 text-sm leading-6 text-zinc-400">
                  {project.description ||
                    "AI and software development project built with modern technologies."}
                </p>

                {/* Technologies */}
                <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {project.language && (
                    <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                      {project.language}
                    </span>
                  )}

                  {project.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                    >
                      {topic}
                    </span>
                  ))}

                  {project.stars > 0 && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                      ⭐ {project.stars}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Empty/Error State */}
        {!loading && projects.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-zinc-400">
              Unable to load GitHub projects right now.
            </p>

            <a
              href="https://github.com/RedamJaswanth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-3 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white"
            >
              Visit GitHub ↗
            </a>
          </div>
        )}

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RedamJaswanth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
          >
            Explore All GitHub Projects
            <span className="text-violet-400">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}