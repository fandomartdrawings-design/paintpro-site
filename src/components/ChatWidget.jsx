/**
 * PaintPro Marketing Site — "Pip" chat widget (FAQ + trial handoff)
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 *
 * Option-C style: a friendly, scripted chat experience (no live agent, no AI).
 * Tappable FAQ questions reveal benefit-focused answers, and the whole thing
 * routes into the existing trial form (onContact) — same funnel, warmer door.
 */
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PainterBot from "./PainterBot.jsx";
import { GREETING, FAQS, CTA_PROMPT } from "../data/chatFaqs.js";

export default function ChatWidget({ onContact }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: GREETING }]);
  const [asked, setAsked] = useState(0);
  const [seenLauncher, setSeenLauncher] = useState(false);
  const scrollRef = useRef(null);

  // Gentle one-time attention nudge a few seconds after load.
  useEffect(() => {
    const t = setTimeout(() => setSeenLauncher(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const askQuestion = (faq) => {
    setMessages((prev) => [...prev, { from: "user", text: faq.q }, { from: "bot", text: faq.a }]);
    const next = asked + 1;
    setAsked(next);
    // After a couple questions, nudge toward the trial.
    if (next === 2) {
      setTimeout(() => setMessages((prev) => [...prev, { from: "bot", text: CTA_PROMPT, cta: true }]), 500);
    }
  };

  const startTrial = () => {
    setOpen(false);
    onContact?.();
  };

  return (
    <>
      {/* ── Launcher bubble ── */}
      <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2">
        <AnimatePresence>
          {!open && seenLauncher && (
            <motion.button
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mr-1 rounded-2xl rounded-br-sm bg-white dark:bg-[#0f1a2e] border border-slate-200 dark:border-[#1a2744] shadow-lg px-3.5 py-2 text-[12.5px] font-semibold text-navy dark:text-white max-w-[180px] text-left"
            >
              Questions about PaintPro? Ask me! 🎨
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={() => setOpen(true)}
              aria-label="Open PaintPro chat"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-dark grid place-items-center shadow-[0_10px_30px_rgba(33,158,188,.5)] relative"
            >
              <PainterBot size={54} waving />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-flame border-2 border-white dark:border-[#070d1a]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="fixed bottom-5 right-5 z-[95] w-[calc(100vw-2.5rem)] max-w-[380px] h-[70vh] max-h-[560px] rounded-3xl bg-white dark:bg-[#0b1424] border border-slate-200 dark:border-[#1a2744] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-br from-brand to-brand-dark text-white">
              <div className="w-11 h-11 rounded-full bg-white/15 grid place-items-center shrink-0">
                <PainterBot size={38} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-black text-[15px] leading-tight">Pip</div>
                <div className="text-[11.5px] text-white/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint" /> PaintPro Helper
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="w-8 h-8 rounded-full grid place-items-center bg-white/15 hover:bg-white/25 transition-colors">✕</button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3.5 py-4 space-y-2.5 bg-slate-50 dark:bg-[#0b1424]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  {m.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-brand/15 grid place-items-center shrink-0 mr-2 self-end">
                      <PainterBot size={22} />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.from === "user"
                      ? "bg-brand text-white rounded-br-sm"
                      : "bg-white dark:bg-[#131f36] text-navy dark:text-slate-200 rounded-bl-sm border border-slate-100 dark:border-transparent shadow-sm"
                  }`}>
                    {m.text}
                    {m.cta && (
                      <button onClick={startTrial} className="mt-2.5 w-full rounded-xl bg-flame py-2 text-[12.5px] font-bold text-white hover:brightness-110 active:scale-[0.98] transition-all">
                        Start my free trial →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* quick-question chips */}
            <div className="border-t border-slate-200 dark:border-[#1a2744] p-3 bg-white dark:bg-[#0b1424]">
              <div className="text-[10.5px] font-extrabold uppercase tracking-wide text-slate-400 mb-2 px-1">Popular questions</div>
              <div className="flex flex-wrap gap-1.5 max-h-[92px] overflow-y-auto">
                {FAQS.map((f) => (
                  <button key={f.q} onClick={() => askQuestion(f)}
                    className="rounded-full border border-slate-200 dark:border-[#1a2744] bg-slate-50 dark:bg-[#091424] px-3 py-1.5 text-[12px] font-semibold text-navy dark:text-slate-300 hover:border-brand hover:text-brand transition-colors">
                    {f.q}
                  </button>
                ))}
                <button onClick={startTrial}
                  className="rounded-full bg-brand px-3 py-1.5 text-[12px] font-bold text-white hover:brightness-110 transition-all">
                  Start free trial →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
