/**
 * PaintPro Marketing Site — deeper-dive "why PaintPro" section
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import Reveal from "./Reveal.jsx";

const PILLARS = [
  {
    icon: "📈",
    title: "Priced to reward growth, not punish it",
    body: "Every plan is flat — add painters to your crew without adding a single line item to your bill. On per-seat platforms, a growing crew quietly becomes your most expensive software. Here, it never does.",
  },
  {
    icon: "🖌️",
    title: "Built from real jobsite experience",
    body: "PaintPro was shaped by the day-to-day realities of running painting crews — gallons that have to be right the first time, weather that decides whether today is a spray day, and an inventory that speaks the trade instead of a generic parts list.",
  },
  {
    icon: "🔒",
    title: "Your data stays yours",
    body: "Self-host on your own server and your data never leaves your control. No cloud lock-in, no hostage negotiations if you ever leave — export what's yours, whenever you want, on your terms.",
  },
  {
    icon: "🚀",
    title: "Actively evolving — and honest about it",
    body: "PaintPro is in early access with real painting crews today. The core — estimates, scheduling, time tracking, payments — is live and in daily use, and newer capabilities keep rolling out. We'll always tell you which is which.",
  },
];

const STEPS = [
  { n: "1", title: "Bring your list over", text: "Import your customers and active jobs. Nothing gets left behind on the old system." },
  { n: "2", title: "Set up in an afternoon", text: "Add your crew, your rates, and your inventory. Guided setup means you're not doing it alone." },
  { n: "3", title: "Run your first job", text: "Schedule it, clock in, send the invoice. By week one, PaintPro is just how you work now." },
];

export default function WhyPaintPro() {
  return (
    <section id="why-paintpro" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a1322]">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Why PaintPro</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Built to be the <span className="text-brand">better option</span> — not just a different one
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Plenty of software can schedule a job. Here's what actually makes switching worth it.
          </p>
        </Reveal>

        {/* Value band */}
        <Reveal className="mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-tint/60 to-white dark:from-brand/10 dark:to-[#0f1a2e] p-8 md:p-10">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black font-mono text-brand">$0</div>
                <div className="mt-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-300">extra per painter you add — ever</div>
              </div>
              <div className="sm:border-x border-slate-200 dark:border-[#1a2744]">
                <div className="text-3xl md:text-4xl font-black font-mono text-brand">1 week</div>
                <div className="mt-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-300">from signup to running real jobs</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black font-mono text-brand">100%</div>
                <div className="mt-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-300">of your data stays yours to export</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-7 shadow-[0_10px_36px_rgba(2,48,71,.06)]">
                <div className="w-11 h-11 rounded-xl grid place-items-center text-[22px] mb-4 bg-brand-tint/70 dark:bg-brand/15">{p.icon}</div>
                <h3 className="font-extrabold text-[16px] text-navy dark:text-white leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Migration timeline */}
        <Reveal className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-navy dark:text-white">
              Switching is the easy part
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-[15px]">Most crews are up and running the same week they start.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-7">
                  <div className="w-9 h-9 rounded-full grid place-items-center bg-brand text-white font-black text-[15px] mb-4">{s.n}</div>
                  <h4 className="font-extrabold text-[15px] text-navy dark:text-white">{s.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
