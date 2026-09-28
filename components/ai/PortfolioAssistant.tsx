"use client";

import { ArrowUpRight, PaperPlaneTilt, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { getAssistantReply } from "@/lib/assistant";
import { Project } from "@/data/projects";

const quickPrompts = ["Покажи сайты", "Покажи AI-проекты", "Покажи SaaS", "Покажи ботов", "Что ты умеешь?"];
const examplePrompts = ["Мне нужен лендинг", "Нужен сайт для SaaS", "Нужен Telegram-бот", "Нужна автоматизация"];

type Message = { role: "assistant" | "user"; text: string; projects?: Project[] };

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Расскажу о проектах и помогу подобрать подходящий кейс." },
  ]);

  function ask(value: string) {
    if (!value.trim()) return;
    const reply = getAssistantReply(value);
    setMessages((current) => [
      ...current,
      { role: "user", text: value },
      { role: "assistant", text: reply.text, projects: reply.projects },
    ]);
    setInput("");
  }

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-[#d8d7d1] bg-[#f1f0ea] px-4 py-3 text-sm font-semibold text-[#111311] shadow-[0_12px_40px_rgba(0,0,0,.22)]"
      >
        <span aria-hidden="true">✦</span> AI-помощник
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-20 z-30 mx-auto max-w-md overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#151715]/95 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-2xl md:inset-x-auto md:right-5"
          >
            <div className="flex items-start justify-between border-b border-white/10 p-5">
              <div>
                <p className="text-lg font-semibold">AI-помощник портфолио</p>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">Локальный помощник без внешнего API.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Закрыть помощника" className="text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[52vh] space-y-4 overflow-y-auto p-5">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === "user" ? "ml-8" : "mr-5"}>
                  <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-white/10 text-white" : "bg-[#20251d] text-white/80"}`}>
                    {message.text}
                  </div>
                  {message.projects && message.projects.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {message.projects.map((project) => {
                        const hasLink = project.url !== "#";
                        return (
                          <a
                            key={project.id}
                            href={hasLink ? project.url : "#contact"}
                            target={hasLink ? "_blank" : undefined}
                            rel={hasLink ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.03] px-3 py-2 text-xs hover:border-[var(--accent)]/60"
                          >
                            <span>{project.title}</span>
                            <ArrowUpRight size={14} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => ask(prompt)} className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/70 transition hover:border-[var(--accent)]/60 hover:text-white">
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {examplePrompts.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => ask(prompt)} className="text-left text-[11px] text-[var(--muted)] transition hover:text-white">
                    {prompt}
                  </button>
                ))}
              </div>
              <form onSubmit={(event) => { event.preventDefault(); ask(input); }} className="flex items-center gap-2">
                <input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Запрос помощнику" placeholder="Напишите запрос" className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--accent)]/60" />
                <button type="submit" aria-label="Отправить запрос" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--ink)] transition hover:bg-[#d9ff75]"><PaperPlaneTilt size={17} weight="bold" /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
