"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const links = [
  { href: "#projects", label: "Проекты" },
  { href: "#ai", label: "AI & Автоматизация" },
  { href: "#about", label: "Обо мне" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 160], ["18px", "10px"]);
  const radius = useTransform(scrollY, [0, 160], ["18px", "28px"]);
  return (
    <>
      <motion.header style={{ padding, borderRadius: radius }} className="fixed inset-x-4 top-4 z-30 mx-auto flex max-w-[1360px] items-center justify-between border border-white/10 bg-[#111311]/80 px-3 backdrop-blur-xl">
        <a href="#top" className="px-3 py-2 text-xs font-bold tracking-[.1em]">VALERA MASIUTA</a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="rounded-full px-3 py-2 text-xs text-[var(--muted)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/5 hover:text-white">{link.label}</a>)}
        </nav>
        <div className="hidden lg:block"><MagneticButton href="https://t.me/valery_masiuta" variant="ghost">Связаться</MagneticButton></div>
        <button type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen(!open)} className="relative flex size-11 items-center justify-center rounded-full border border-white/10 lg:hidden">
          <AnimatePresence mode="wait" initial={false}>{open ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={20} /></motion.span> : <motion.span key="list" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><List size={20} /></motion.span>}</AnimatePresence>
        </button>
      </motion.header>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-20 flex items-end bg-[#0b0c0b]/96 px-5 pb-10 pt-28 backdrop-blur-2xl lg:hidden">
          <motion.nav initial="hidden" animate="show" className="flex w-full flex-col gap-3" variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}>
            {links.map((link) => <motion.a key={link.href} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 pb-4 text-4xl font-semibold tracking-[-.06em]">{link.label}</motion.a>)}
          </motion.nav>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
