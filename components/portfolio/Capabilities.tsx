import { Browser, Code, Cpu, Layout, Lightning, PuzzlePiece, Robot, SquaresFour } from "@phosphor-icons/react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const capabilities = [
  { title: "Web Development", icon: Code, visual: "<Component />" },
  { title: "UI / UX", icon: Layout, visual: "structure / rhythm / flow" },
  { title: "AI", icon: Cpu, visual: "prompt → product" },
  { title: "Telegram Bots", icon: Robot, visual: "/start  →  ответ" },
  { title: "Automation", icon: Lightning, visual: "trigger  →  action" },
  { title: "Landing Pages", icon: Browser, visual: "idea  /  page  /  launch" },
  { title: "SaaS", icon: SquaresFour, visual: "product systems" },
  { title: "Integrations", icon: PuzzlePiece, visual: "web  +  tools" },
];

export function Capabilities() {
  return <section id="capabilities" className="section-space"><div className="section-wrap"><Reveal><h2 className="display max-w-xl text-5xl font-semibold md:text-7xl">Что я умею</h2></Reveal><Stagger className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => { const Icon = item.icon; return <StaggerItem key={item.title} className="bg-[var(--ink)]"><article className="group min-h-48 p-5 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--panel)]"><div className="flex items-center justify-between"><Icon size={22} weight="light" className="text-[var(--accent)]" /><span className="mono text-[10px] text-white/25">0{capabilities.indexOf(item) + 1}</span></div><div className="mt-16"><h3 className="text-lg font-semibold tracking-[-.03em]">{item.title}</h3><p className="mono mt-2 text-[10px] text-[var(--muted)] transition duration-500 group-hover:text-[var(--accent)]">{item.visual}</p></div></article></StaggerItem>; })}</Stagger></div></section>;
}
