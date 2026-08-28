"use client";

import React, { useState } from "react";
import { ProjectDetailModal, ProjectDetail } from "@/components/ui/ProjectDetailModal";
import { InteractiveProjectImage } from "@/components/ui/InteractiveProjectImage";

const otherProjects: ProjectDetail[] = [
  {
    title: "Terahome",
    tag: "Web App",
    category: "Next.js Landing Page",
    date: "September 2025",
    description:
      "This is A landing page project focused on visual clarity, spacing, and structured content presentation for a local internet service provider.",
    additionalInfo:
      "Built using Next.js and modern CSS, this study demonstrates how complex pricing matrixes, feature highlights, and promotional calls-to-action can be streamlined into a cohesive, user-friendly interface using clean grid alignment and high-contrast typography.",
    image: "/images/terahome.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/richiedavie/Terahome",
  },
  {
    title: "Win11Debloat",
    tag: "Script",
    category: "PowerShell Automation Engine",
    date: "August 2025",
    description:
      "Win11Debloat is a modular, PowerShell-driven automation engine designed to streamline, optimize, and privacy-harden Windows 11 installations.",
    additionalInfo:
      "Built for power users, system administrators, and IT technicians, it automates the removal of pre-installed bloatware, disables intrusive background AI/telemetry services, and fine-tunes system performance without compromising core operating system stability.",
    image: "/images/Debloat.png",
    technologies: ["PowerShell", "Batch", "CLI", "Shell Scripting"],
    github: "https://github.com/richiedavie/Win11Debloat-UNFINISHED-",
  },
  {
    title: "Pawshop",
    tag: "Flutter",
    category: "Flutter E-Commerce App",
    date: "May 2025",
    description:
      "Pawshop is a simple e-commerce app built with Flutter, showcasing a modern UI for browsing and purchasing pet products.",
    image: "/images/pawshop.png",
    technologies: ["Flutter", "Dart", "Material Design"],
    github: "https://github.com/richiedavie/Pawshop",
  },
  {
    title: "Clean the Room V.1.12",
    tag: "Scratch",
    category: "Scratch Survival Game",
    date: "November 2024",
    description:
      "Clean the Room V.1.12 is a Scratch survival game where you guide a cat using your cursor. You use a weapon to clear your room of invading insects.",
    additionalInfo:
      "A shark also appears as a hazard that you must avoid. Touching the shark reduces your life by 1 point. If you stay near the shark for too long, the game ends immediately.",
    image: "/images/cleantheroom.png",
    technologies: ["Scratch", "Game Logic", "Sprite Animation"],
    liveUrl: "https://scratch.mit.edu/projects/659283824/",
  },
];

export function OtherProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="other-projects" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Other Projects
            </h2>
          </div>
          <p className="text-sm text-[#c4c7c8]/80 max-w-sm">
            A collection of side projects, experiments, utilities, and experimental interfaces. Click on any project to view details.
          </p>
        </div>

        {/* Grid of Preview Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-[#0e0e0e]/70 backdrop-blur-xl border border-white/[0.09] hover:border-white/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.99] select-none"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#c4c7c8]/60 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#c4c7c8]/80 font-mono text-[11px]">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              {project.image && (
                <InteractiveProjectImage src={project.image} alt={project.title} />
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

      {/* 3D Flip Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
