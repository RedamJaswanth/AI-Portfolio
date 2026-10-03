"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  topics: string[];
}

const featuredProjectNames = [
  "IMDb-Movie-Sentiment-Analyzer",
  "Resume_Projects",
  "Resume_Analyzer_App",
  "YOLO-Object-Detection",
];

const excludedRepositories = [
  "portfolio",
  "RedamJaswanth",
  "Data-Science-AI-GenAI-Learning-Journey",
  "9am_Gitaction_Team",
  "-Basic_Python",
  "Functions",
  "AI-Portfolio",
];

const normalizeName = (name: string) => {
  return name
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");
};

export default function Projects() {
  const [featuredProjects, setFeaturedProjects] = useState<GitHubProject[]>(
    []
  );

  const [exploreProjects, setExploreProjects] = useState<GitHubProject[]>(
    []
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/github");

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub projects");
        }

        const data: GitHubProject[] = await response.json();

        // Remove repositories that should not appear on the portfolio
        const availableProjects = data.filter((project) => {
          const projectName = normalizeName(project.name);

          return !excludedRepositories.some(
            (excludedName) =>
              projectName === normalizeName(excludedName)
          );
        });

        // Select featured projects
        const featured = availableProjects.filter((project) =>
          featuredProjectNames.some(
            (featuredName) =>
              normalizeName(project.name) ===
              normalizeName(featuredName)
          )
        );

        // Everything else goes into Explore GitHub Projects
        const explore = availableProjects.filter(
          (project) =>
            !featuredProjectNames.some(
              (featuredName) =>
                normalizeName(project.name) ===
                normalizeName(featuredName)
            )
        );

        setFeaturedProjects(featured);
        setExploreProjects(explore);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ProjectCard = ({
    project,
    index,
  }: {
    project: GitHubProject;
    index: number;
  }) => (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.05]"
    >
      {/* Project Header */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-medium text-purple-400">
          Project {String(index + 1).padStart(2, "0")}
        </span>

        {project.language && (
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            {project.language}
          </span>
        )}
      </div>

      {/* Project Name */}
      <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-purple-400">
        {project.name}
      </h3>

      {/* Project Description */}
      <p className="mb-6 flex-1 text-sm leading-6 text-gray-400">
        {project.description ||
          "A project developed using modern technologies and problem-solving techniques."}
      </p>

      {/* Stars */}
      <div className="mb-6 flex items-center gap-5 text-xs text-gray-500">
        <span>⭐ {project.stars}</span>
      </div>

      {/* GitHub Button */}
      <div className="flex">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.001 10.001 0 0022 12C22 6.477 17.523 2 12 2z" />
          </svg>

          GitHub
        </a>
      </div>
    </motion.article>
  );

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Projects Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            A selection of my main AI, Machine Learning and Generative AI
            projects.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-purple-500" />
          </div>
        )}

        {/* Featured Projects */}
        {!loading && featuredProjects.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Explore GitHub Projects */}
        {!loading && exploreProjects.length > 0 && (
          <div className="mt-32">
            {/* Explore Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                More Projects
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Explore GitHub Projects
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Explore more projects, experiments, learning repositories and
                AI implementations available on my GitHub.
              </p>
            </motion.div>

            {/* Explore Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exploreProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}