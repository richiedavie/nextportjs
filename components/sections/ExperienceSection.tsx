
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
    period: "16 June 2025",
    description:
      "I'm diving into cross-platform mobile development by building my very first application using Flutter and Dart. Through this hands-on experiment, I am learning to design responsive UIs, manage application state, and leverage Flutter's widget tree to create a smooth, high-performance user experience.",
  },
  {
    role: "Creating a Product Animation in Blender",
    period: "June 2025",
    description:
      "I created a product-animation project in Blender, experimenting with studio lighting, camera angles, and smooth motion to present a product from multiple perspectives.",
  },
  {
    role: "Building a Full-Stack Downtime Analytics Platform",
    period: "August 2026",
    description:
      "I specialize in building high-performance, scalable web applications using the App Router architecture, Server and Client Components, Server Actions, and optimized API Routes. My mastery spans seamless Server-Side Rendering (SSR) and dynamic client-side hydration, robust cookie-based authentication, type-safe data fetching, custom analytics calculations, and full integration with backend services like Supabase for secure, real-time database management.",
  },
  {
    role: "Full-Stack Web Development (still learning)",
    period: "2026",
    description:
      "Building and experimenting with modern web applications across the full stack, from responsive interfaces with Next.js, React, SvelteKit, and Astro to backend services, APIs, authentication, and database systems using PostgreSQL, Supabase, Laravel, and other technologies. My focus is on building applications that are fast, scalable, and cleanly structured.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
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
