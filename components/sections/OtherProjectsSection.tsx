import React from "react";

interface Project {
  title: string;
  tag: string;
  description: string;
  technologies: string[];
}

const otherProjects: Project[] = [
  {
    title: "Realtime Collaboration Canvas",
    tag: "Open Source",
    description:
      "A lightweight collaborative drawing and whiteboard tool with WebSockets and CRDT sync.",
    technologies: ["React", "TypeScript", "WebSockets"],
  },
  {
    title: "CLI Developer Toolkit",
    tag: "Developer Tool",
    description:
      "A fast command-line interface for scaffolding modular Next.js and Tailwind applications.",
    technologies: ["Node.js", "TypeScript", "Commander"],
  },
  {
    title: "Micro-Interaction Experiments",
    tag: "Creative Coding",
    description:
      "A collection of physics-based UI components, cursor trails, and subtle parallax effects.",
    technologies: ["CSS", "HTML5 Canvas", "WebGL"],
  },
];

export function OtherProjectsSection() {
  return (
    <section id="other-projects" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
              Side Projects &amp; Experiments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Other Projects
            </h2>
          </div>
          <p className="text-sm text-[#c4c7c8]/80 max-w-sm">
            Open-source utilities, experimental web canvases, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#c4c7c8]/60 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#c4c7c8]/80 font-mono text-[11px]">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-[#c4c7c8] leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-[#c4c7c8]/60 px-2 py-0.5 rounded bg-white/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
