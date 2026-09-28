"use client";

import { useMemo, useState } from "react";
import { Funnel } from "@phosphor-icons/react";
import { allProjects, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const filters: Array<"Все" | ProjectCategory> = ["Все", "Web", "SaaS", "AI", "UI/UX", "Bots", "Automation"];

export function ProjectsSection() {
  const [filter, setFilter] = useState<"Все" | ProjectCategory>("Все");
  const visibleProjects = useMemo(() => filter === "Все" ? allProjects : allProjects.filter((project) => project.category === filter), [filter]);
  return (
    <section id="projects" className="section-space">
      <div className="section-wrap">
        <Reveal><div className="max-w-2xl"><p className="eyebrow">Selected work</p><h2 className="display mt-5 text-5xl font-semibold md:text-7xl">Избранные проекты</h2><p className="mt-6 text-base leading-7 text-[var(--muted)]">Несколько проектов, которые лучше всего показывают мой подход к дизайну и разработке.</p></div></Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12"><StaggerItem className="lg:col-span-7"><ProjectCard project={allProjects[0]} featured /></StaggerItem><StaggerItem className="lg:col-span-5 lg:mt-24"><ProjectCard project={allProjects[3]} featured /></StaggerItem><StaggerItem className="lg:col-span-5"><ProjectCard project={allProjects[1]} /></StaggerItem><StaggerItem className="lg:col-span-7"><ProjectCard project={allProjects[2]} /></StaggerItem></Stagger>
        <Reveal><div className="mt-32 flex flex-col justify-between gap-7 border-t border-white/10 pt-8 md:flex-row md:items-end"><div><p className="eyebrow">Archive</p><h2 className="display mt-4 text-4xl font-semibold md:text-6xl">Все проекты</h2></div><div className="flex items-center gap-2 text-xs text-[var(--muted)]"><Funnel size={15} /> фильтр по направлению</div></div></Reveal>
        <div className="mt-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-xs transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${filter === item ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)]" : "border-white/10 text-[var(--muted)] hover:border-white/25 hover:text-white"}`}>{item}</button>)}</div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </div>
    </section>
  );
}
