"use client";

import React, { useRef, useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroVisual() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("");
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate offset percentage from center (-1 to 1)
        const percentX = (e.clientX - centerX) / (rect.width / 2);
        const percentY = (e.clientY - centerY) / (rect.height / 2);

        // Restrain rotation to max ±2.5 degrees
        const rotateY = percentX * 2.5;
        const rotateX = -percentY * 2.5;

        setTransformStyle(
          `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`
        );
      });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-square mx-auto lg:mx-0">
      {/* Ambient soft glow behind the card */}
      <div
        className="absolute inset-0 -z-10 rounded-[32px] bg-white/[0.04] blur-2xl transform scale-95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Outer Glass Shell */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: transformStyle ? "transform 0.15s ease-out" : "transform 0.5s ease-out",
        }}
        className="group relative w-full h-full p-3.5 sm:p-4 rounded-[28px] sm:rounded-[32px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-white/20 card-glow card-glow-hover transition-colors duration-500 will-change-transform flex flex-col"
      >
        {/* Inner container for image and overlays */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0e0e0e]">
          <Image
            src="/images/avatar.webp"
            alt="Jerry — Web Developer & Creator"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out"
          />

          {/* Bottom subtle gradient blend */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Optional subtle atmospheric accent marker */}
          <div
            className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity"
            aria-hidden="true"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
