/**
 * PaintPro Marketing Site — deeper-dive "why PaintPro" section
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import Reveal from "./Reveal.jsx";

const PILLARS = [
  {
    icon: "📈",
    title: "Built for return on investment",
    body: "Every plan is priced flat, not per seat — add painters to your crew without adding line items to your software bill. Companies moving off per-user platforms typically see the difference in the first billing cycle, not the first year.",
  },
  {
    icon: "🔄",
    title: "A switch that takes days, not months",
    body: "Bring your customer list and active jobs over, and you're scheduling in PaintPro the same week. There's no long onboarding contract and no lock-in — your data stays exportable, on your terms, for as long as you use it.",
  },
  {
    icon: "🖌️",
    title: "Built from real jobsite experience",
    body: "PaintPro's feature set was shaped by the day-to-day realities of running painting crews — matching paint to the job, weather calls that actually affect a spray day, and inventory that speaks the trade's language instead of a generic parts list.",
  },
  {
    icon: "🚀",
    title: "Actively evolving, always honest about it",
    body: "PaintPro is in early access with real painting crews today. Core workflows — estimates, scheduling, time tracking, payments — are live and in daily use. Newer capabilities continue to roll out as the product matures, and we'll always tell you which is which.",
  },
];

export default function WhyPaintPro() {
  return (
    <section id="why-paintpro" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a1322]">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Why PaintPro</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Built to be the <span className="text-brand">better option</span> — not just a different one
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Plenty of software can schedule a job. Here's what actually makes switching worth it.
          </p>
        </Reveal>

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
      </div>
    </section>
  );
}
