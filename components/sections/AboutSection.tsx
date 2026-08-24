import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Building with purpose and attention to craft.
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-[#c4c7c8] leading-relaxed">
          <p>
            I&apos;m a web developer and creator focused on creating responsive, accessible, and high-performance digital experiences. My work sits at the intersection of clean system architecture and nuanced frontend details.
          </p>
          <p>
            Whether architecting scalable Next.js applications or refining typography and interaction systems, I value clarity, precision, and minimalism.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 mt-4 border-t border-white/[0.08]">
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-white mb-1">
                4+
              </span>
              <span className="text-xs text-[#c4c7c8]/70 uppercase tracking-wider">
                Years Experience
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-white mb-1">
                25+
              </span>
              <span className="text-xs text-[#c4c7c8]/70 uppercase tracking-wider">
                Projects Completed
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-white mb-1">
                100%
              </span>
              <span className="text-xs text-[#c4c7c8]/70 uppercase tracking-wider">
                Commitment to Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
