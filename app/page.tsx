import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { OtherProjectsSection } from "@/components/sections/OtherProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ListeningSection } from "@/components/ListeningSection";
import { DiscordProfileCard } from "@/components/DiscordProfileCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { NowPlayingPill } from "@/components/NowPlayingPill";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <OtherProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ListeningSection />
        <DiscordProfileCard />
        <ContactSection />
      </main>
      <NowPlayingPill />
    </>
  );
}
