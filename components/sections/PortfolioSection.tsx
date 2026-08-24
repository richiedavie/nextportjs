import React from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  link?: string;
}

const portfolioProjects: Project[] = [
  {
    title: "Next.js Portfolio Remaster",
    category: "Web Application / Design Engineering",
    description:
      "A modern, editorial dark portfolio built with Next.js App Router, Tailwind CSS, and subtle glassmorphic UI.",
    year: "2026",
  },
  {
    title: "Minimal Design System",
    category: "UI / Component Library",
    description:
      "Clean monochromatic component foundation designed for high-performance developer tools and interfaces.",
    year: "2025",
  },
  {
    title: "Interactive Web Experiences",
    category: "Full Stack Development",
    description:
      "Explorations in micro-interactions, responsive layouts, and performance-focused React architectures.",
    year: "2025",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Portfolio
            </h2>
          </div>
          <p className="text-sm text-[#c4c7c8]/80 max-w-sm">
            A curation of primary digital products, client projects, and core application builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#c4c7c8]/60 mb-6">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-[#c4c7c8] leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#c4c7c8]/80 group-hover:text-white">
                <span>View Project</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
