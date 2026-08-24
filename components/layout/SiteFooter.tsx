import React from "react";
import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "Github", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050505]/80 backdrop-blur-sm py-8 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#c4c7c8]/60">
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold text-white tracking-tight hover:text-[#c4c7c8] transition-colors"
        >
          my port
        </Link>

        {/* Copyright / Metadata */}
        <div className="uppercase tracking-widest font-mono text-[10px] text-[#c4c7c8]/50">
          &copy; {currentYear} Jerry. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c7c8]/70 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
