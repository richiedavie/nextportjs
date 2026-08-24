import React from "react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "State Management"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "REST APIs", "GraphQL", "PostgreSQL", "Database Design", "Serverless"],
  },
  {
    title: "Tooling & Design",
    skills: ["Git & GitHub", "Vercel", "Figma", "Design Systems", "Web Performance", "Accessibility (a11y)"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#c4c7c8]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
