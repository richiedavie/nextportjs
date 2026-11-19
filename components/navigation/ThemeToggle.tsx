"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("theme-light", theme === "light");
  localStorage.setItem("portfolio-theme", theme);
}

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.classList.toggle("theme-light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains("theme-light")
      ? "light"
      : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className="inline-flex h-8 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="theme-icon-sun h-4 w-4"
      >
        <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 1.75v2M10 16.25v2M18.25 10h-2M3.75 10h-2m14.08-5.83-1.42 1.42M5.59 14.41l-1.42 1.42m11.66 0-1.42-1.42M5.59 5.59 4.17 4.17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="theme-icon-moon h-4 w-4"
      >
        <path
          d="M16.7 12.55A7.25 7.25 0 0 1 7.45 3.3a7.25 7.25 0 1 0 9.25 9.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
