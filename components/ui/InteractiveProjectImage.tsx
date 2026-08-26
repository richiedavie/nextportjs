"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface InteractiveProjectImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function InteractiveProjectImage({
  src,
  alt,
  priority = false,
}: InteractiveProjectImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");
  const [imageTransform, setImageTransform] = useState("translateX(0px) translateY(0px) scale(1)");
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate center relative to dimensions
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation (-5deg to 5deg max)
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      // Calculate subtle parallax for the image itself
      const moveX = ((x - centerX) / centerX) * -4;
      const moveY = ((y - centerY) / centerY) * -4;

      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
        setImageTransform(`translateX(${moveX}px) translateY(${moveY}px) scale(1.05)`);
      });
    },
    [reducedMotion]
  );

  const handleMouseEnter = () => {
    if (reducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    setIsHovered(false);
    requestAnimationFrame(() => {
      setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
      setImageTransform("translateX(0px) translateY(0px) scale(1)");
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] group-hover:border-white/20 transition-colors mb-6 overflow-visible z-10"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: transform,
          transitionDuration: isHovered ? "50ms" : "500ms", // Fast when moving, slow when resetting
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-contain filter contrast-[1.02] brightness-95 group-hover:brightness-100 transition-all duration-300 ease-out"
          style={{
            transform: imageTransform,
            transitionDuration: isHovered ? "50ms" : "500ms",
          }}
        />

        {/* Subtle radial highlight following cursor (Optional) */}
        {isHovered && !reducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 200px at 50% 50%, rgba(255,255,255,0.1), transparent)`,
              // For simplicity, we just keep a subtle static glow or update it dynamically
            }}
          />
        )}
      </div>
    </div>
  );
}
