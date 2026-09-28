"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasLink = project.url !== "#";
  const href = hasLink ? project.url : "#contact";
  const actionLabel = hasLink ? "Открыть проект" : "Обсудить проект";

  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: .45, ease: [0.32, 0.72, 0, 1] }} className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--panel)] ${featured ? "min-h-[520px]" : "min-h-[420px]"}`}>
      <div className="absolute inset-0 overflow-hidden"><img src={project.image} alt={`Превью проекта ${project.title}`} className="size-full object-cover opacity-70 grayscale transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0b] via-[#0b0c0b]/20 to-transparent" /></div>
      <div className="relative z-[2] flex h-full min-h-[inherit] flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between"><span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] text-white/75 backdrop-blur-sm">{project.subcategory}</span><span className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[.16em] ${project.status === "live" ? "bg-[#e7e5dc] text-[#111311]" : "bg-white/10 text-white/65"}`}>{project.status === "live" ? "live" : project.status === "demo" ? "demo" : "concept"}</span></div>
        <div><div className="mb-3 flex flex-wrap gap-2 text-[10px] text-white/55">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><h3 className="display text-3xl font-semibold tracking-[-.06em] md:text-4xl">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-white/65">{project.description}</p><div className="relative z-[3] mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold"><a href={href} target={hasLink ? "_blank" : undefined} rel={hasLink ? "noopener noreferrer" : undefined} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[.12]">{actionLabel} <ArrowUpRight size={16} weight="bold" /></a>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/55 transition hover:text-white"><GithubLogo size={16} /> GitHub</a>}</div></div>
      </div>
    </motion.article>
  );
}
