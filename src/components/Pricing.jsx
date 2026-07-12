/**
 * PaintPro Marketing Site — pricing
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import Reveal from "./Reveal.jsx";

const TIERS = [
  {
    name: "Crew", price: "$29", per: "/mo flat", tag: "For solo painters & small crews",
    features: [
      "Unlimited users — no per-seat fees",
      "Jobs, customers & color-coded scheduling",
      "Estimates → invoices with room quick-picks",
      "Crew time clock + weekly timesheets (CSV)",
      "Paint calculator",
      "Mobile field app (Android)",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Company", price: "$59", per: "/mo flat", tag: "For growing painting companies", hot: true,
    features: [
      "Everything in Crew, plus:",
      "Stripe payment links + cash/check tracking",
      "Painting-specific inventory (shop vs. van)",
      "Per-job weather alerts & paint risk calls",
      "Property boundary mapping on satellite",
      "Automated appointment, review, and payment-due reminders",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Self-Hosted", price: "$1,499", per: " one-time", tag: "Own it outright",
    features: [
      "Everything in Company — forever",
      "Runs on your own server and your own MySQL database",
      "Private, encrypted crew network (ZeroTier)",
      "No monthly fees — your data stays fully portable, always",
      "Guided setup and data migration included",
      "A full year of software updates included",
    ],
    cta: "Talk to Us",
  },
];

export default function Pricing({ onContact }) {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Pricing</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Flat pricing. <span className="text-brand">Unlimited crew.</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Per-user pricing punishes you for growing. Every PaintPro plan covers your whole
            company — add painters, not line items on your bill.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div className={`relative h-full flex flex-col rounded-2xl p-7 border transition-all hover:-translate-y-1
                ${t.hot
                  ? "border-brand bg-gradient-to-b from-brand-tint/60 to-white dark:from-brand/15 dark:to-[#0f1a2e] shadow-[0_24px_60px_rgba(33,158,188,.22)]"
                  : "border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] shadow-[0_10px_36px_rgba(2,48,71,.08)]"}`}>
                {t.hot && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-extrabold text-white shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}
                <div className="text-[13px] font-extrabold uppercase tracking-wide text-brand">{t.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[44px] leading-none font-black text-navy dark:text-white font-mono">{t.price}</span>
                  <span className="text-[13px] font-bold text-slate-400">{t.per}</span>
                </div>
                <div className="mt-1.5 text-[13px] text-slate-500 dark:text-slate-400">{t.tag}</div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.features.map(f => (
                    <li key={f} className="flex gap-2.5 text-[13.5px] text-slate-600 dark:text-slate-300">
                      <span className="text-mint font-black mt-px">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={onContact}
                  className={`mt-7 w-full rounded-xl py-3 text-[14px] font-bold transition-all active:scale-95
                    ${t.hot
                      ? "bg-brand text-white shadow-[0_10px_26px_rgba(33,158,188,.4)] hover:brightness-110"
                      : "border-2 border-slate-200 dark:border-[#1a2744] text-navy dark:text-white hover:border-brand hover:text-brand"}`}>
                  {t.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-[13px] text-slate-500 dark:text-slate-400">
          🔒 14-day free trial on monthly plans · No credit card to start · Cancel anytime
        </Reveal>
      </div>
    </section>
  );
}
