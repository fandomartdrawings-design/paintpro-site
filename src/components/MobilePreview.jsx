/**
 * PaintPro Marketing Site — mobile app preview (CSS phone mockup)
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

function Timer() {
  const [s, setS] = useState(13520);
  useEffect(() => { const t = setInterval(() => setS(v => v + 1), 1000); return () => clearInterval(t); }, []);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return <span className="font-mono tabular-nums">{h}:{String(m).padStart(2, "0")}:{String(sec).padStart(2, "0")}</span>;
}

const POINTS = [
  { icon: "📱", title: "A real field app", text: "Native Android app your crew installs once. Big buttons, 16px inputs, bottom tab bar — built for gloved thumbs on ladders, not desks." },
  { icon: "🔒", title: "Private crew network", text: "Devices connect over an encrypted peer-to-peer network (ZeroTier) straight to your server. Your job data never sits in someone else's cloud." },
  { icon: "📷", title: "Photos from the field", text: "Before / progress / after shots straight from the phone camera to the job record." },
  { icon: "🧭", title: "One-tap everything", text: "Call the customer, get directions, clock in, check the weather call — all from the job card." },
];

export default function MobilePreview() {
  return (
    <section id="mobile" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a1322] overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        {/* Phone mockup */}
        <Reveal className="flex justify-center lg:justify-end order-2 lg:order-1">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="relative w-[290px] rounded-[38px] border-[10px] border-navy-deep bg-navy-deep shadow-[0_40px_90px_rgba(2,48,71,.4)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 rounded-b-2xl bg-navy-deep z-10" />
            <div className="rounded-[28px] overflow-hidden bg-[#F4F9FC] dark:bg-[#091424]">
              {/* app header */}
              <div className="bg-gradient-to-r from-navy to-navy-deep px-4 pt-8 pb-3 flex items-center gap-2.5">
                <img src="./logo-mark-256.png" alt="" className="w-7 h-7 rounded-lg" />
                <div>
                  <div className="text-white text-[12.5px] font-extrabold leading-tight">PaintPro</div>
                  <div className="text-white/35 text-[8.5px]">Field Manager</div>
                </div>
              </div>
              <div className="p-3 space-y-2.5">
                {/* live clock card */}
                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3 border-l-4 border-mint shadow-sm">
                  <div className="flex items-center gap-1.5 text-[8.5px] font-extrabold uppercase tracking-wider text-mint">
                    <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-1.5 h-1.5 rounded-full bg-mint" />
                    On the clock
                  </div>
                  <div className="text-[26px] font-black text-navy dark:text-white mt-0.5"><Timer /></div>
                  <div className="text-[10px] text-slate-400">Hendricks — Exterior · in 7:58 AM</div>
                  <div className="mt-2 rounded-lg border-2 border-slate-200 dark:border-[#1a2744] text-center py-1.5 text-[11px] font-bold text-navy dark:text-white">Clock Out</div>
                </div>
                {/* weather */}
                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3 shadow-sm flex items-center gap-2.5">
                  <span className="text-xl">☀️</span>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-navy dark:text-white">Good to Paint</div>
                    <div className="text-[9px] text-slate-400">Willow St — next 7 days clear</div>
                  </div>
                  <span className="rounded-full bg-mint/15 text-mint text-[8.5px] font-extrabold px-2 py-0.5">GO</span>
                </div>
                {/* job */}
                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-bold text-navy dark:text-white">Lakeview Deck & Fence</div>
                    <span className="rounded-full bg-brand/10 text-brand text-[8.5px] font-bold px-2 py-0.5">Scheduled</span>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    {["📞 Call", "🧭 Directions", "📷 Photos"].map(b => (
                      <span key={b} className="flex-1 rounded-lg bg-slate-100 dark:bg-[#162035] text-center py-1.5 text-[9px] font-bold text-slate-600 dark:text-slate-300">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* tab bar */}
              <div className="bg-gradient-to-r from-navy to-navy-deep flex px-2 py-2.5">
                {[["▣", "Home", true], ["🖌️", "Jobs"], ["⏱", "Time"], ["☰", "More"]].map(([ic, lb, on]) => (
                  <div key={lb} className={`flex-1 flex flex-col items-center gap-0.5 rounded-lg py-1 ${on ? "bg-brand/30" : ""}`}>
                    <span className="text-[13px]">{ic}</span>
                    <span className={`text-[7.5px] font-bold ${on ? "text-white" : "text-white/45"}`}>{lb}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Mobile field app</div>
            <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
              The office fits in a <span className="text-brand">paint-splattered pocket</span>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl grid place-items-center text-[20px] bg-brand-tint/70 dark:bg-brand/10">{p.icon}</div>
                  <div>
                    <div className="font-extrabold text-[15px] text-navy dark:text-white">{p.title}</div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
