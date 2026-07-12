/**
 * PaintPro Marketing Site — feature cards + detail modals
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    icon: "📦", accent: "#219EBC", title: "Painting-Specific Inventory",
    blurb: "Not a generic parts list — a real painter's catalog. Purdy brushes, roller covers, tape, poles, drop cloths, sandpaper — tracked shop vs. van.",
    details: [
      "Complete pre-loaded catalog: brushes by series and size, covers by nap, tape, masking, sheeting, safety gear",
      "Shop quantity vs. van quantity — know what's on the truck before you leave",
      "Par levels with low-stock warnings so you never show up short",
      "Cost tracking per item with total inventory value reports",
    ],
  },
  {
    icon: "🧮", accent: "#FB8500", title: "Paint Calculator",
    blurb: "Square footage, coats, spread rate, waste factor — gallons right the first time, tied to your actual jobs.",
    details: [
      "Per-surface math: walls, ceilings, trim, doors — each with its own spread rate",
      "Two-coat and primer logic built in",
      "Pulls square footage from your estimates so numbers stay consistent",
      "Waste factor built in — order what the job needs, not a guess",
    ],
  },
  {
    icon: "🖌️", accent: "#12B76A", title: "Jobs, Visits & Photos",
    blurb: "Schedule jobs, assign crews by color, track visits, and attach before/after photos from the phone camera.",
    details: [
      "Color-coded jobs with crew chips — see who's where at a glance",
      "Before / progress / after photos straight from the field",
      "Visit tracking with pause and resume",
      "One tap to call the customer or get directions",
    ],
  },
  {
    icon: "🗺️", accent: "#7B61FF", title: "Property Boundary Mapping",
    blurb: "Mark the exact work area on satellite imagery, so every crew member knows which fence, which wall, which side — before they arrive.",
    details: [
      "Satellite view with on-screen boundary drawing",
      "Boundaries saved to the job and visible to the crew in the field",
      "Job addresses geocoded automatically from the customer record",
    ],
  },
  {
    icon: "📋", accent: "#023047", title: "Estimates → Invoices → Paid",
    blurb: "Line-item estimates with room quick-picks that flow to invoice and payment without retyping a thing.",
    details: [
      "Room and surface quick-picks: bedroom, kitchen, trim, deck, cabinets…",
      "Square-footage totals per estimate",
      "One click: approved → invoiced → paid, with the money tracked",
    ],
  },
  {
    icon: "💳", accent: "#10B981", title: "Payments — Stripe + Cash/Check",
    blurb: "Send a card-payment link by text, or log the check that got handed over on the porch. Both tracked.",
    details: [
      "Stripe payment links your customer opens on their phone",
      "Manual cash/check recording with notes",
      "Collected vs. pending at a glance, month by month",
    ],
  },
  {
    icon: "⛅", accent: "#8ECAE6", title: "Weather-Smart Scheduling",
    blurb: "Every scheduled job is checked against a 7-day forecast for its own address — know before you load the sprayer, not after.",
    details: [
      "Forecasts pulled per job address, not just your city",
      "Clear Good to Paint / At Risk / Do Not Paint calls for each job",
      "Wind and rain alerts flagged directly on the job card",
    ],
  },
  {
    icon: "⏱", accent: "#FFB703", title: "Crew Time Clock",
    blurb: "One tap to clock in on the right job — live hours tracked automatically, down to the minute, for every crew member.",
    details: [
      "Real-time hours per crew member, per job, visible the moment they clock in",
      "Fair, transparent lunch-break handling built into every timesheet",
      "Weekly paid-hours summary with one-click CSV export for payroll",
    ],
  },
];

export default function Features() {
  const [sel, setSel] = useState(null);

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Everything in one place</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Tools that speak <span className="text-brand">painter</span>, not “contractor software”
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Generic apps make you fight their categories. PaintPro starts from how a painting company actually runs.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <button onClick={() => setSel(f)}
                className="group w-full h-full text-left rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-5 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(2,48,71,.14)] transition-all"
                style={{ borderTopWidth: 3, borderTopColor: f.accent }}>
                <div className="w-11 h-11 rounded-xl grid place-items-center text-[22px] mb-4" style={{ background: `${f.accent}1a` }}>{f.icon}</div>
                <div className="font-extrabold text-[15px] text-navy dark:text-white leading-snug">{f.title}</div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">{f.blurb}</p>
                <div className="mt-3 text-[12px] font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-navy-deep/75 backdrop-blur-sm grid place-items-center p-4" onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.94, y: 14 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 14 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0f1a2e] p-7 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl grid place-items-center text-2xl" style={{ background: `${sel.accent}1a` }}>{sel.icon}</div>
                <button onClick={() => setSel(null)} aria-label="Close"
                  className="w-8 h-8 rounded-full grid place-items-center bg-slate-100 dark:bg-[#1a2744] text-slate-500 dark:text-slate-300">✕</button>
              </div>
              <h3 className="text-xl font-black text-navy dark:text-white">{sel.title}</h3>
              <p className="mt-2 text-[14px] text-slate-600 dark:text-slate-300">{sel.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {sel.details.map(d => (
                  <li key={d} className="flex gap-2.5 text-[13.5px] text-slate-600 dark:text-slate-300">
                    <span className="mt-0.5 font-black" style={{ color: sel.accent }}>✓</span>{d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
