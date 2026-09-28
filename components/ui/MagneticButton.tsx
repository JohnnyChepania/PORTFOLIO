"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function MagneticButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "dark" }) {
  const external = /^https?:\/\//.test(href);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });
  const rotate = useTransform(springX, [-20, 20], [-2, 2]);

  function onMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function reset() { x.set(0); y.set(0); }

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, rotate }}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[.98] ${variant === "primary" ? "cta-primary hover:-translate-y-0.5" : variant === "dark" ? "border-[#111311] bg-[#111311] text-[#f1f0ea] hover:-translate-y-0.5 hover:bg-[#242824]" : "border-[var(--line-strong)] text-[var(--text)] hover:-translate-y-0.5 hover:border-white/50"}`}
    >
      <span>{children}</span>
      <span className={`flex size-7 items-center justify-center rounded-full transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 ${variant === "primary" ? "bg-black/10" : "bg-white/10"}`}>
        <ArrowUpRight size={16} weight="bold" />
      </span>
    </motion.a>
  );
}
