
interface ExperienceItem {
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "My first experience on VSCode [Grade 7th]",
    period: "13 July 2022",
    description:
      "When I first entered 7th grade, I had experience using VScode. Well, it was still very basic for the lessons because I only learned HTML and CSS. Even though it was only those two programming languages, at least they were very useful and important. I had some skills in HTML and CSS even when I was still in 7th grade.",
  },
  {
    role: "Making my first website built in HTML and CSS",
    period: "11 September 2022",
    description:
      "Collaborated on cross-functional teams to build client web applications with Next.js, React, and TypeScript. Optimized core web vitals and interaction performance.",
  },
  {
    role: "Making my first Landing page website",
    period: "5 September 2025",
    description:
      "I created my first landing page website as part of a school project. This project, called TrackinID, was designed to showcase a fleet management system. It involved integrating HTML, CSS, and basic JavaScript to create an interactive and visually appealing site.",
  },
  {
    role: "UI Developer",
    period: "2020 — 2021",
    description:
      "Built polished interfaces for brand and marketing websites. Translated Figma designs into production-ready HTML/CSS/JS.",
  },
  {
    role: "Frontend Developer",
    period: "2019 — 2020",
    description:
      "Shipped core product features across a React-based SaaS platform. Worked closely with designers to improve usability and consistency.",
  },
  {
    role: "Freelance Web Developer",
    period: "2018 — 2019",
    description:
      "Delivered custom websites and landing pages for small businesses. Managed client relationships, timelines, and deployment workflows.",
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
