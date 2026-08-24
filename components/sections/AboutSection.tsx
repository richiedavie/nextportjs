import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        <div className="group relative w-full max-w-md sm:max-w-lg lg:max-w-[480px] shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] card-glow">
            <Image
              src="/images/avatar.webp"
              alt="Portrait of Jerry"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 512px, 480px"
              className="object-cover object-center grayscale contrast-[1.05] brightness-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About me</h2>
          <div className="mt-6 flex flex-col gap-5 max-w-xl text-base sm:text-lg text-[#c4c7c8] leading-relaxed">
            <p>
              I&apos;m a web developer and creator focused on creating responsive, accessible, and high-performance digital experiences. My work sits at the intersection of clean system architecture and nuanced frontend details.
            </p>
            <p>
              Whether architecting scalable Next.js applications or refining typography and interaction systems, I value clarity, precision, and minimalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
