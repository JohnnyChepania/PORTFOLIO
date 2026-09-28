import { BracketsCurly, FlowArrow, GlobeHemisphereWest, Robot } from "@phosphor-icons/react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { futureProjects, projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

const cards = [
  { title: "Telegram Bots", text: "Боты, которые принимают заявки, собирают данные, распределяют задачи и взаимодействуют с пользователем.", icon: Robot, tone: "bg-[#1b2617]" },
  { title: "AI Tools", text: "Небольшие AI-инструменты и интерфейсы для автоматизации контента и рабочих процессов.", icon: BracketsCurly, tone: "bg-[#18201b]" },
  { title: "Automation", text: "Автоматизация повторяющихся действий между сервисами, Telegram, веб-приложениями и AI.", icon: FlowArrow, tone: "bg-[#22231c]" },
  { title: "Web Apps", text: "Небольшие прикладные веб-приложения под конкретные задачи.", icon: GlobeHemisphereWest, tone: "bg-[#19211e]" },
];

const automationProjects = [
  projects.find((project) => project.id === "clientradar"),
  futureProjects.find((project) => project.id === "goal-planner"),
  futureProjects.find((project) => project.id === "parser-bot"),
  futureProjects.find((project) => project.id === "ai-bot"),
].filter((project): project is Project => Boolean(project)).map((project) => project.id === "ai-bot" ? { ...project, title: "AI TOOLS", subcategory: "AI / Web App" } : project);

export function AiSection() {
  return (
    <section id="ai" className="section-space border-y border-white/10 bg-[#101210]">
      <div className="section-wrap">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Дополнительные проекты</p>
            <h2 className="display mt-5 text-5xl font-semibold uppercase md:text-7xl">Боты / AI / Автоматизация</h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">Проекты, которые автоматизируют задачи и сокращают рутину.</p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {automationProjects.map((project, index) => (
            <StaggerItem key={project.id} className={index % 3 === 1 ? "lg:col-span-5 lg:mt-16" : "lg:col-span-7"}>
              <ProjectCard project={project} size={index === 0 ? "medium" : "small"} />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-20 grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => <StaggerItem key={card.title} className={index % 2 ? "md:mt-12" : ""}><AiCard card={card} large={index === 0} /></StaggerItem>)}
        </Stagger>
      </div>
    </section>
  );
}

function AiCard({ card, large = false }: { card: (typeof cards)[number]; large?: boolean }) {
  const Icon = card.icon;
  return <article className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 p-6 ${card.tone} ${large ? "min-h-[300px]" : "min-h-[260px]"}`}><div className="ai-decor-circle pointer-events-none absolute -right-10 -top-10 size-44 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" /><Icon size={28} weight="light" className="text-[var(--accent)]" /><div className="relative mt-20"><h3 className="text-2xl font-semibold tracking-[-.04em]">{card.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{card.text}</p></div></article>;
}
