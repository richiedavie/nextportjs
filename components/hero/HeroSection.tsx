import React from "react";
import { HeroCopy } from "./HeroCopy";
import { HeroActions } from "./HeroActions";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-32 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy and CTA Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <HeroCopy />
          <HeroActions />
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
