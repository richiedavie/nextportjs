import React from "react";
import { HeroCopy } from "./HeroCopy";
import { HeroActions } from "./HeroActions";
import { HeroVisual } from "./HeroVisual";
import MagicRings from "@/components/ui/MagicRings";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-32 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Background Magic Rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-50">
        <div className="w-full h-full relative">
          <MagicRings
            color="#ffffff"
            colorTwo="#71717a"
            ringCount={6}
            speed={0.7}
            attenuation={11}
            lineThickness={1.8}
            baseRadius={0.32}
            radiusStep={0.1}
            scaleRate={0.08}
            opacity={0.65}
            blur={0}
            noiseAmount={0.04}
            rotation={15}
            ringGap={1.4}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={true}
            mouseInfluence={0.15}
            hoverScale={1.1}
            parallax={0.04}
            clickBurst={true}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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

