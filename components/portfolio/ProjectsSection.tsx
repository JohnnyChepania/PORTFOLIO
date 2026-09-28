"use client";

import { useMemo, useState } from "react";
import { Funnel } from "@phosphor-icons/react";
import { projects, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const filters: Array<{ value: "Все" | ProjectCategory; label: string }> = [
  { value: "Все", label: "ВСЕ" },
  { value: "Web", label: "САЙТЫ" },
  { value: "SaaS", label: "SAAS" },
  { value: "AI", label: "AI" },
  { value: "UI/UX", label: "UI/UX" },
  { value: "Bots", label: "БОТЫ" },
  { value: "Automation", label: "АВТОМАТИЗАЦИЯ" },
];

const cardLayouts = ["lg:col-span-7", "lg:col-span-5 lg:mt-20", "lg:col-span-5", "lg:col-span-7", "lg:col-span-5 lg:mt-16", "lg:col-span-7"];
const cardSizes = ["large", "medium", "medium", "large", "small", "medium"] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<"Все" | ProjectCategory>("Все");
  const visibleProjects = useMemo(() => filter === "Все" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-space pt-32 md:pt-36">
      <div className="section-wrap">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">ПОРТФОЛИО / 2026</p>
            <h1 id="projects-heading" className="display mt-5 text-5xl font-semibold uppercase sm:text-6xl md:text-8xl">Мои проекты</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">Сайты, интерфейсы, SaaS, AI-инструменты, Telegram-боты и автоматизация.</p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
          <Funnel size={16} className="mr-2 text-[var(--accent)]" />
          {filters.map((item) => (
            <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)} className={`rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[.08em] transition duration-300 ${filter === item.value ? "border-[#f1f0ea] bg-[#f1f0ea] text-[#111311]" : "border-white/10 text-[var(--muted)] hover:border-white/30 hover:text-white"}`}>
              {item.label}
            </button>
          ))}
        </div>

        <Stagger key={filter} aria-live="polite" className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {visibleProjects.map((project, index) => (
            <StaggerItem key={project.id} className={cardLayouts[index % cardLayouts.length]}>
              <ProjectCard project={project} size={cardSizes[index % cardSizes.length]} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
