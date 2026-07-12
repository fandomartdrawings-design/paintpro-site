/**
 * PaintPro Marketing Site — hero
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Live count-up timer for the mockup's "on the clock" card
function Timer() {
  const [s, setS] = useState(9047); // 2:30:47
  useEffect(() => { const t = setInterval(() => setS(v => v + 1), 1000); return () => clearInterval(t); }, []);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return <span className="font-mono tabular-nums">{h}:{String(m).padStart(2, "0")}:{String(sec).padStart(2, "0")}</span>;
}

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ onContact }) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* soft background washes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-brand/12 blur-3xl" />
        <div className="absolute top-64 -left-48 w-[480px] h-[480px] rounded-full bg-mint/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-tint/60 dark:bg-brand/10 px-4 py-1.5 text-[12.5px] font-bold text-brand-dark dark:text-brand-soft mb-6">
            🎨 Built for painters, by a painter
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="text-[42px] leading-[1.05] md:text-6xl font-black tracking-tight text-navy dark:text-white">
            Paint more.<br />
            <span className="text-brand">Paperwork less.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 text-[17px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-lg">
            PaintPro is the all-in-one field app for painting companies — estimates that become
            invoices, a painting-specific inventory, crew time clocks, Stripe payments, and
            weather-smart scheduling. One app your crew will actually use.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
            <button onClick={onContact}
              className="rounded-xl bg-brand px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(33,158,188,.4)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all">
              Start Free Trial →
            </button>
            <a href="#features"
              className="rounded-xl border-2 border-slate-200 dark:border-[#1a2744] bg-white/70 dark:bg-[#0f1a2e] px-6 py-3.5 text-[15px] font-bold text-navy dark:text-white hover:border-brand hover:text-brand transition-colors">
              See It In Action
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-500 dark:text-slate-400">
            <span>✓ Flat pricing — no per-user fees</span>
            <span>✓ Unlimited crew</span>
            <span>✓ Your data on your server</span>
          </motion.div>
        </div>

        {/* App mockup */}
        <motion.div initial={{ opacity: 0, y: 40, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative select-none">
          <div className="rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] shadow-[0_30px_80px_rgba(2,48,71,.25)] overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gradient-to-r from-navy to-navy-deep">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F04438]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber" />
              <span className="w-2.5 h-2.5 rounded-full bg-mint" />
              <span className="ml-3 text-[11px] font-semibold text-white/50 font-mono">paintpro — field manager</span>
            </div>
            <div className="flex">
              {/* sidebar */}
              <div className="hidden sm:flex w-36 flex-col gap-1 bg-gradient-to-b from-navy to-navy-deep p-3">
                {["▣ Dashboard", "🖌️ Jobs", "📋 Estimates", "📦 Inventory", "⏱ Time Clock", "⛅ Weather"].map((x, i) => (
                  <div key={x} className={`rounded-lg px-2.5 py-2 text-[11px] font-semibold ${i === 0 ? "bg-white/15 text-white" : "text-white/45"}`}>{x}</div>
                ))}
              </div>
              {/* content */}
              <div className="flex-1 p-4 space-y-3 bg-[#F4F9FC] dark:bg-[#091424]">
                <div className="grid grid-cols-3 gap-2.5">
                  {[["Jobs This Week", "7", "text-brand"], ["Collected", "$12.4k", "text-mint"], ["On Duty", "3", "text-flame"]].map(([l, v, c]) => (
                    <div key={l} className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3 shadow-sm">
                      <div className={`text-lg font-black font-mono ${c}`}>{v}</div>
                      <div className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wide">{l}</div>
                    </div>
                  ))}
                </div>
                {/* on the clock */}
                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3.5 shadow-sm border-l-4 border-mint flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[9.5px] font-extrabold uppercase tracking-wider text-mint">
                      <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-1.5 h-1.5 rounded-full bg-mint" />
                      On the clock · Mike R.
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Hendricks — Exterior Repaint</div>
                  </div>
                  <div className="text-xl font-black text-mint"><Timer /></div>
                </div>
                {/* jobs rows */}
                {[["Willow St — Interior", "In Progress", "bg-amber/15 text-amber", "#219EBC"], ["Lakeview Deck & Fence", "Scheduled", "bg-brand/10 text-brand", "#FB8500"]].map(([t, s, chip, bar]) => (
                  <div key={t} className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3 shadow-sm flex items-center gap-3">
                    <span className="w-1 h-8 rounded" style={{ background: bar }} />
                    <div className="flex-1">
                      <div className="text-[12px] font-bold text-navy dark:text-white">{t}</div>
                      <div className="text-[10px] text-slate-400">2 crew · Good to Paint ☀️</div>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[9.5px] font-bold ${chip}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* floating chips */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -left-4 top-16 rounded-xl bg-white dark:bg-[#0f1a2e] shadow-xl border border-slate-100 dark:border-[#1a2744] px-3.5 py-2.5 text-[11.5px] font-bold text-navy dark:text-white">
            🧮 14 gal Duration · 2 coats
          </motion.div>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-3 bottom-10 rounded-xl bg-white dark:bg-[#0f1a2e] shadow-xl border border-slate-100 dark:border-[#1a2744] px-3.5 py-2.5 text-[11.5px] font-bold text-navy dark:text-white">
            💳 Invoice paid — <span className="text-mint">$3,850</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
