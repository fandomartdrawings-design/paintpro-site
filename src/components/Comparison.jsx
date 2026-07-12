/**
 * PaintPro Marketing Site — honest competitor comparison
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import Reveal from "./Reveal.jsx";

const Y = <span className="text-mint font-black">✓</span>;
const N = <span className="text-slate-300 dark:text-slate-600 font-bold">—</span>;
const P = <span className="text-amber font-bold" title="Partial / add-on">◐</span>;

const ROWS = [
  ["Painting-specific inventory (fan-deck catalog)", Y, N, N, N, N],
  ["Paint calculator tied to estimates", Y, N, N, N, P],
  ["Per-job weather calls (Good / Risk / No-Go)", Y, N, N, N, N],
  ["Property boundary drawing on satellite", Y, N, P, P, N],
  ["Estimates → invoices → Stripe payments", Y, Y, Y, Y, Y],
  ["Crew time clock with fair lunch rules", Y, Y, Y, Y, Y],
  ["Flat pricing — unlimited users", Y, N, N, N, P],
  ["Self-hosted option — you own the data", Y, N, N, N, N],
  ["Built by a working painter", Y, N, N, N, N],
];

const COLS = [
  { name: "PaintPro", price: "from $29/mo flat", hot: true },
  { name: "Jobber", price: "from ~$39/mo + per-user" },
  { name: "Housecall Pro", price: "from ~$59/mo" },
  { name: "ServiceTitan", price: "~$300+/mo" },
  { name: "Contractor Foreman", price: "from ~$49/mo" },
];

export default function Comparison() {
  return (
    <section id="compare" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a1322]">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Honest comparison</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Generic tools are fine.<br />Specialized tools <span className="text-brand">win jobs</span>.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            The big platforms are good software — for everyone, which means for no one in particular.
            Here's where a painting-first tool pulls ahead.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] shadow-[0_10px_40px_rgba(2,48,71,.08)]">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b-2 border-slate-100 dark:border-[#1a2744]">
                  <th className="p-4 text-[12px] font-extrabold uppercase tracking-wide text-slate-400 w-[280px]">Feature</th>
                  {COLS.map(c => (
                    <th key={c.name} className={`p-4 text-center ${c.hot ? "bg-brand-tint/50 dark:bg-brand/10" : ""}`}>
                      <div className={`text-[14px] font-black ${c.hot ? "text-brand" : "text-navy dark:text-white"}`}>{c.name}</div>
                      <div className="text-[10.5px] font-semibold text-slate-400 mt-0.5">{c.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, ...cells], i) => (
                  <tr key={i} className="border-b border-slate-50 dark:border-[#131f36] last:border-0">
                    <td className="p-4 text-[13px] font-semibold text-slate-700 dark:text-slate-300">{label}</td>
                    {cells.map((c, j) => (
                      <td key={j} className={`p-4 text-center text-[15px] ${j === 0 ? "bg-brand-tint/50 dark:bg-brand/10" : ""}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11.5px] text-slate-400 text-center">
            ◐ = partial or paid add-on. Competitor capabilities and pricing summarized from public pricing pages, 2026 — always verify current plans.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
