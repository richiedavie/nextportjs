import React from "react";
import Image from "next/image";

interface ExampleProject {
  title: string;
  tag: string;
  description: string;
  image?: string;
  technologies: string[];
}

const exampleProjects: ExampleProject[] = [
  {
    title: "Terahome Fiber Internet",
    tag: "Web App",
    description:
      "High-speed fiber internet provider portal with real-time speed checker, plan selector, and subscriber dashboard.",
    image: "/images/terahome.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "System Debloater & Optimizer",
    tag: "Utility Tool",
    description:
      "Automated system utility to remove bloatware, disable telemetry, and optimize system background resource consumption.",
    image: "/images/Debloat.png",
    technologies: ["PowerShell", "Batch", "CLI"],
  },
  {
    title: "PawShop Pet Care & Store",
    tag: "E-Commerce",
    description:
      "Modern pet supplies store and veterinary clinic appointment scheduling interface with cart management.",
    image: "/images/pawshop.png",
    technologies: ["React", "CSS Modules", "JavaScript"],
  },
  {
    title: "Clean The Room Minigame",
    tag: "Game Dev",
    description:
      "An interactive arcade minigame focused on obstacle avoidance, score multipliers, and fast-paced controls.",
    image: "/images/cleantheroom.png",
    technologies: ["Scratch", "Game Logic", "Canvas"],
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
            A collection of side projects, experiments, utilities, and experimental interfaces.
          </p>
        </div>

        {/* Grid of Example Project Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {exampleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-[#0e0e0e]/70 backdrop-blur-xl border border-white/[0.09] hover:border-white/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#c4c7c8]/60 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#c4c7c8]/80 font-mono text-[11px]">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              {project.image && (
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08] group-hover:border-white/20 transition-colors mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-contain filter contrast-[1.02] brightness-95 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              )}

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
