"use client";

import React, { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

export interface ProjectDetail {
  title: string;
  tag: string;
  category?: string;
  description: string;
  additionalInfo?: string;
  date?: string;
  image?: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

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

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    const timeout = prefersReducedMotion ? 200 : 480;
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setIsVisible(false);
    }, timeout);
  }, [isClosing, prefersReducedMotion, onClose]);

  // Lock body scroll and trigger entrance animation
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => {
        setIsClosing(false);
        setIsVisible(true);
      });
      return () => {
        cancelAnimationFrame(raf);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      const raf = requestAnimationFrame(() => {
        setIsVisible(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [project]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose]);

  if (!project) return null;

  // 3D Flip Transform Styles
  const getTransformStyles = (): React.CSSProperties => {
    if (prefersReducedMotion) {
      return {
        opacity: isVisible && !isClosing ? 1 : 0,
        transform: isVisible && !isClosing ? "scale(1)" : "scale(0.95)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      };
    }

    let transform = "rotateY(0deg) scale(1) translateY(0px)";
    let opacity = 1;

    if (!isVisible) {
      transform = "rotateY(-90deg) scale(0.88) translateY(12px)";
      opacity = 0;
    } else if (isClosing) {
      transform = "rotateY(90deg) scale(0.88) translateY(12px)";
      opacity = 0;
    }

    return {
      transform,
      opacity,
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
    };
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-400 ease-out ${
          isVisible && !isClosing ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* 3D Perspective Wrapper */}
      <div
        style={{ perspective: "1400px" }}
        className="relative w-full max-w-3xl my-auto z-10"
      >
        {/* Flip Container Card */}
        <div
          style={getTransformStyles()}
          className="relative w-full rounded-[28px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col will-change-transform"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/90 text-xs font-mono tracking-wider uppercase">
                {project.category || project.tag}
              </span>
              {project.date && (
                <span className="text-xs font-mono text-[#c4c7c8]/60">
                  {project.date}
                </span>
              )}
            </div>

            {/* Close Button [ × ] */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close project details"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 max-h-[calc(85vh-70px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/15">
            {/* Centerpiece Project Image */}
            {project.image && (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#060606] border border-white/10 mb-6 shadow-inner">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-contain filter contrast-[1.02] brightness-95 transition-all"
                  priority
                />
              </div>
            )}

            {/* Title & Description */}
            <div className="flex flex-col gap-4">
              <div>
                <h2
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
                >
                  {project.title}
                </h2>
                <div className="w-12 h-[1px] bg-white/20 my-3" aria-hidden="true" />
              </div>

              {/* Main Description */}
              <p className="text-sm sm:text-base text-[#c4c7c8] leading-relaxed font-normal whitespace-pre-line">
                {project.description}
              </p>

              {/* Additional Project Information */}
              {project.additionalInfo && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#c4c7c8]/90 leading-relaxed font-normal">
                  <span className="block font-semibold text-white mb-1 uppercase tracking-wider text-[11px] font-mono">
                    Project Overview &amp; Architecture
                  </span>
                  {project.additionalInfo}
                </div>
              )}

              {/* Technologies List */}
              <div className="pt-4 border-t border-white/[0.08] mt-2">
                <span className="block text-xs font-semibold text-[#c4c7c8]/70 uppercase tracking-widest mb-2.5 select-none">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links if available */}
              {(project.github || project.liveUrl) && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08] mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
