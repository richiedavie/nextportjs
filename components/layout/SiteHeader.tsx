import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-5 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-[#c4c7c8] transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg px-2 py-1"
        >
          <span>my port</span>
        </Link>

        {/* Center Pill Nav */}
        <DesktopNav />

        {/* Right CTA / Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="images/CV ATS Jeremy Mauretz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Resume
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
