import { BracketsCurly, FlowArrow, GlobeHemisphereWest, Robot } from "@phosphor-icons/react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const cards = [
  { title: "Telegram Bots", text: "Боты, которые принимают заявки, собирают данные, распределяют задачи и взаимодействуют с пользователем.", icon: Robot, tone: "bg-[#1b2617]" },
  { title: "AI Tools", text: "Небольшие AI-инструменты и интерфейсы для автоматизации контента и рабочих процессов.", icon: BracketsCurly, tone: "bg-[#18201b]" },
  { title: "Automation", text: "Автоматизация повторяющихся действий между сервисами, Telegram, веб-приложениями и AI.", icon: FlowArrow, tone: "bg-[#22231c]" },
  { title: "Web Apps", text: "Небольшие прикладные веб-приложения под конкретные задачи.", icon: GlobeHemisphereWest, tone: "bg-[#19211e]" },
];

export function AiSection() {
  return (
    <section id="ai" className="section-space border-y border-white/10 bg-[#101210]">
      <div className="section-wrap"><Reveal><div className="max-w-3xl"><p className="eyebrow">Beyond websites</p><h2 className="display mt-5 text-5xl font-semibold md:text-7xl">AI / Боты / Автоматизация</h2><p className="mt-6 text-base leading-7 text-[var(--muted)]">Не только сайты. Собираю инструменты, которые берут рутину на себя.</p></div></Reveal><Stagger className="mt-14 grid gap-4 md:grid-cols-2"><StaggerItem><AiCard card={cards[0]} large /></StaggerItem><StaggerItem className="md:mt-16"><AiCard card={cards[1]} /></StaggerItem><StaggerItem><AiCard card={cards[2]} /></StaggerItem><StaggerItem className="md:mt-16"><AiCard card={cards[3]} /></StaggerItem></Stagger></div>
    </section>
  );
}

function AiCard({ card, large = false }: { card: (typeof cards)[number]; large?: boolean }) {
  const Icon = card.icon;
  return <article className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 p-6 ${card.tone} ${large ? "min-h-[300px]" : "min-h-[260px]"}`}><div className="absolute -right-10 -top-10 size-44 rounded-full border border-white/10 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-125" /><Icon size={28} weight="light" className="text-[var(--accent)]" /><div className="relative mt-20"><h3 className="text-2xl font-semibold tracking-[-.04em]">{card.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{card.text}</p></div></article>;
}
