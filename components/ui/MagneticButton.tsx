"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function MagneticButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
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

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, rotate }}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[.98] ${variant === "primary" ? "bg-[var(--accent)] text-[var(--ink)] hover:bg-[#d9ff75]" : "border border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"}`}
    >
      <span>{children}</span>
      <span className={`flex size-7 items-center justify-center rounded-full transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 ${variant === "primary" ? "bg-black/10" : "bg-white/10"}`}>
        <ArrowUpRight size={16} weight="bold" />
      </span>
    </motion.a>
  );
}
