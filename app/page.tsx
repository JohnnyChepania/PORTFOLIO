"use client";

import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { AiSection } from "@/components/portfolio/AiSection";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { AboutProcess } from "@/components/portfolio/AboutProcess";
import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { PortfolioAssistant } from "@/components/ai/PortfolioAssistant";

export default function Home() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <ProjectsSection />
      <AiSection />
      <Capabilities />
      <AboutProcess />
      <ContactFooter />
      <PortfolioAssistant />
    </main>
  );
}
