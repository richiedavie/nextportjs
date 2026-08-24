"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Other Projects", href: "#other-projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function DesktopNav() {
  const [activeItem, setActiveItem] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      // If at the very top, activate Home
      if (window.scrollY < 200) {
        setActiveItem("Home");
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveItem(item.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] transition-all"
    >
      {navItems.map((item) => {
        const isActive = activeItem === item.label;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
              isActive
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-[#c4c7c8]/80 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
