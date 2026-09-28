"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  size?: "large" | "medium" | "small";
};

export function ProjectCard({ project, size = "small" }: ProjectCardProps) {
  const hasLink = project.url !== "#";
  const href = hasLink ? project.url : "#contact";
  const actionLabel = hasLink ? "Открыть" : "В разработке";
  const sizeClass = size === "large" ? "min-h-[560px] md:min-h-[600px]" : size === "medium" ? "min-h-[480px] md:min-h-[520px]" : "min-h-[420px] md:min-h-[450px]";

  function openProject() {
    if (hasLink) {
      window.open(project.url, "_blank", "noopener,noreferrer");
      return;
    }
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleCardClick(event: React.MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) return;
    openProject();
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  }

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={hasLink ? "link" : undefined}
      tabIndex={hasLink ? 0 : undefined}
      className={`project-card group relative flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--panel)] transition-colors duration-300 hover:border-white/30 ${sizeClass}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src={project.image} alt={project.alt} loading="lazy" className="size-full object-cover opacity-65 grayscale transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0b] via-[#0b0c0b]/25 to-transparent" />
      </div>

      <div className="relative z-[1] flex min-h-[inherit] flex-1 flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <span className="max-w-[75%] rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[.12em] text-white/75 backdrop-blur-sm">
            {project.category} / {project.subcategory}
          </span>
          <span className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[.12em] ${project.status === "live" ? "bg-[#e7e5dc] text-[#111311]" : "bg-white/10 text-white/70"}`}>
            {project.status === "live" ? "live" : project.status === "demo" ? "demo" : "concept"}
          </span>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/55">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <h3 className="display text-3xl font-semibold md:text-4xl">{project.title}</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">{project.description}</p>
          <div className="relative z-[2] mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <a href={href} target={hasLink ? "_blank" : undefined} rel={hasLink ? "noopener noreferrer" : undefined} className="project-card-action inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[.12]">
              {actionLabel} {hasLink && <ArrowUpRight size={15} weight="bold" />}
            </a>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/55 transition hover:text-white"><GithubLogo size={16} /> GitHub</a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
