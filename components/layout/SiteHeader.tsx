import React from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/navigation/StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "About", ariaLabel: "Learn about me", link: "#about" },
  { label: "Portfolio", ariaLabel: "View main portfolio projects", link: "#portfolio" },
  { label: "Other Projects", ariaLabel: "View other projects", link: "#other-projects" },
  { label: "Experience", ariaLabel: "View work experience", link: "#experience" },
  { label: "Skills", ariaLabel: "View skills and stack", link: "#skills" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/richiedavie" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/jeremy-mauretz-603871401/" },
  { label: "Instagram", link: "https://www.instagram.com/jerryarchlinux/" },
  { label: "Email", link: "mailto:jusjeremy64@gmail.com" },
];

export function SiteHeader() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen={true}
      colors={["#141414", "#222222", "#0a0a0a"]}
      accentColor="#ffffff"
      logoText="my port"
      isFixed={true}
    >
      <a
        href="images/CV ATS Jeremy Mauretz.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        Resume
      </a>
    </StaggeredMenu>
  );
}

