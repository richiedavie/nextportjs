import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer / Creator",
    company: "Freelance & Independent",
    period: "2024 — Present",
    description:
      "Designing and architecting high-performance web products, interactive user interfaces, and modular design systems for modern digital platforms.",
  },
  {
    role: "Web Developer",
    company: "Digital Studio",
    period: "2022 — 2024",
    description:
      "Collaborated on cross-functional teams to build client web applications with Next.js, React, and TypeScript. Optimized core web vitals and interaction performance.",
  },
  {
    role: "Junior Frontend Engineer",
    company: "Tech Agency",
    period: "2021 — 2022",
    description:
      "Developed responsive user interfaces, implemented component libraries, and integrated RESTful APIs.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience &amp; Journey
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.08]">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
                <p className="text-sm text-[#c4c7c8]/80">{exp.company}</p>
                <span className="inline-block mt-2 text-xs font-mono text-[#c4c7c8]/50">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm sm:text-base text-[#c4c7c8] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
