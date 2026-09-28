"use client";

import { ArrowDown, ArrowUpRight, Code, Cursor, Sparkle } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const heroImage = "https://sc02.alicdn.com/kf/A1191fa5e7c95471dbd60a44db3cdc6d2y.png";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <div className="section-wrap grid w-full items-center gap-12 pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,.95fr)] lg:gap-16">
        <div className="relative z-[1] max-w-3xl">
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} className="eyebrow mb-7 flex items-center gap-3"><span className="size-1.5 rounded-full bg-[var(--accent)]" />WEB / UI / AI / AUTOMATION</motion.div>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08, ease: [0.16, 1, 0.3, 1] }} className="display max-w-[760px] text-[clamp(3.25rem,7vw,6.7rem)] font-semibold">Создаю цифровые продукты, которые хочется <span className="text-[var(--accent)]">открыть ещё раз.</span></motion.h1>
          <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .22, ease: [0.16, 1, 0.3, 1] }} className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">Сайты, интерфейсы, AI-инструменты и автоматизации от идеи до готового продукта.</motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .32, ease: [0.16, 1, 0.3, 1] }} className="mt-9 flex flex-wrap items-center gap-3"><MagneticButton href="#projects">Смотреть проекты</MagneticButton><MagneticButton href="#contact" variant="ghost">Связаться</MagneticButton></motion.div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)]"><span className="flex items-center gap-2"><Code size={15} className="text-[var(--accent)]" />Web Development</span><span>UI / UX</span><span>AI</span><span>Automation</span></div>
        </div>
        <motion.div initial={reduce ? false : { opacity: 0, scale: .96, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.1, delay: .18, ease: [0.16, 1, 0.3, 1] }} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151715] shadow-[0_30px_120px_rgba(0,0,0,.35)] lg:min-h-[600px]">
          <img src={heroImage} alt="Абстрактная металлическая композиция с lime-панелью" className="absolute inset-0 size-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0b]/70 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md"><Sparkle size={13} className="text-[var(--accent)]" /> portfolio / 2026</div>
          <motion.div animate={reduce ? undefined : { x: [0, 18, 0], y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-7 right-7 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md"><div className="flex items-center gap-2 text-xs text-white/80"><Cursor size={14} className="text-[var(--accent)]" /> открыт к новым задачам</div></motion.div>
          <a href="#projects" aria-label="Перейти к проектам" className="absolute bottom-7 left-7 flex size-12 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--ink)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110"><ArrowDown size={20} weight="bold" /></a>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-2 text-[10px] text-[var(--muted)] lg:flex"><ArrowUpRight size={14} /> digital products, built with intent</div>
    </section>
  );
}
