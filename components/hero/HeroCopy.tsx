import React from "react";
import { TextType } from "@/components/ui/TextType";

export function HeroCopy() {
  return (
    <div className="flex flex-col items-start">
      {/* Eyebrow */}
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/80 mb-4 select-none">
        Web Developer &amp; Creator
      </span>

      {/* Main Display Headline */}
      <TextType
        as="h1"
        text={"Hey Folks,\nI'm Jer!"}
        loop={false}
        typingSpeed={68}
        initialDelay={100}
        showCursor
        cursorClassName="text-white/75"
        aria-label="Hey Folks, I'm Jer!"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-white leading-[1.04] mb-6"
      />

      {/* Thin subtle divider */}
      <div className="w-14 h-[1px] bg-white/20 mb-6" aria-hidden="true" />

      {/* Supporting Text */}
      <div className="text-base sm:text-lg text-[#c4c7c8] font-normal leading-relaxed mb-8 max-w-md">
        <TextType
          as="p"
          text="welcome to my Portfolio :)"
          loop={false}
          typingSpeed={48}
          initialDelay={350}
          showCursor
          cursorClassName="text-white/70"
        />
        <p>feel free to check my portfolio below here!</p>
      </div>
    </div>
  );
}
