/**
 * PaintPro Marketing Site — navigation
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURE_LINKS = [
  { href: "#features", icon: "📦", label: "Painting Inventory", sub: "The full fan deck — Purdy to poles" },
  { href: "#features", icon: "🧮", label: "Paint Calculator", sub: "Gallons right the first time" },
  { href: "#features", icon: "🖌️", label: "Jobs & Crews", sub: "Schedule, photos, visits" },
  { href: "#features", icon: "🗺️", label: "Property Mapping", sub: "Draw boundaries on satellite" },
  { href: "#features", icon: "💳", label: "Payments", sub: "Stripe links + cash/check" },
  { href: "#features", icon: "⛅", label: "Weather Alerts", sub: "Know before you spray" },
];

export default function Nav({ dark, onToggleDark, onContact }) {
  const [open, setOpen] = useState(false);        // mobile menu
  const [drop, setDrop] = useState(false);        // features dropdown
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const link = "text-sm font-semibold text-navy/80 hover:text-brand dark:text-slate-300 dark:hover:text-brand-soft transition-colors";

  const goToHash = (href, closeMenu = false) => (e) => {
    if (!href || href[0] !== "#") {
      if (closeMenu) setOpen(false);
      return;
    }

    e.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
    if (closeMenu) setOpen(false);
    setDrop(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-white/85 dark:bg-[#070d1a]/85 backdrop-blur-md shadow-[0_2px_20px_rgba(2,48,71,.08)]" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center gap-6">
        <a href="#top" onClick={goToHash("#top")} className="flex items-center gap-2.5 mr-auto md:mr-2">
          <img src="./logo-mark-256.png" alt="PaintPro" className="w-9 h-9 rounded-[10px]" />
          <span className="font-extrabold text-lg tracking-tight text-navy dark:text-white">
            Paint<span className="text-brand">Pro</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 mr-auto">
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className={`${link} inline-flex items-center gap-1 py-5`} aria-expanded={drop}>
              Features <span className={`text-[10px] transition-transform ${drop ? "rotate-180" : ""}`}>▼</span>
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[420px] rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] shadow-[0_20px_50px_rgba(2,48,71,.18)] p-3 grid grid-cols-2 gap-1"
                >
                  {FEATURE_LINKS.map(f => (
                      <a key={f.label} href={f.href} onClick={goToHash(f.href)}
                       className="flex items-start gap-3 rounded-xl p-3 hover:bg-brand-tint/60 dark:hover:bg-[#162035] transition-colors">
                      <span className="text-xl leading-none mt-0.5">{f.icon}</span>
                      <span>
                        <span className="block text-[13px] font-bold text-navy dark:text-white">{f.label}</span>
                        <span className="block text-[11.5px] text-slate-500 dark:text-slate-400">{f.sub}</span>
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#compare" onClick={goToHash("#compare")} className={link}>Compare</a>
          <a href="#why-paintpro" onClick={goToHash("#why-paintpro")} className={link}>Why PaintPro</a>
          <a href="#our-story" onClick={goToHash("#our-story")} className={link}>Our Story</a>
          <a href="#savings" onClick={goToHash("#savings")} className={link}>Savings</a>
          <a href="#pricing" onClick={goToHash("#pricing")} className={link}>Pricing</a>
          <a href="#mobile" onClick={goToHash("#mobile")} className={link}>Mobile App</a>
        </div>

        {/* Right cluster */}
        <button onClick={onToggleDark} aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-full grid place-items-center border border-slate-200 dark:border-[#1a2744] bg-white/70 dark:bg-[#0f1a2e] text-sm hover:scale-105 transition-transform">
          {dark ? "☀️" : "🌙"}
        </button>
        <a href="/paintpro/" className="hidden sm:inline-block text-sm font-bold text-navy dark:text-white hover:text-brand dark:hover:text-brand-soft transition-colors">
          Log In
        </a>
        <button onClick={onContact}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(33,158,188,.35)] hover:brightness-110 hover:-translate-y-px active:scale-95 transition-all">
          Start Free Trial
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden w-9 h-9 grid place-items-center text-navy dark:text-white text-xl" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#0f1a2e] border-t border-slate-100 dark:border-[#1a2744]">
            <div className="px-5 py-4 flex flex-col gap-1">
              {[["#features", "Features"], ["#compare", "Compare"], ["#why-paintpro", "Why PaintPro"], ["#our-story", "Our Story"], ["#savings", "Savings"], ["#pricing", "Pricing"], ["#mobile", "Mobile App"]].map(([h, l]) => (
                <a key={h} href={h} onClick={goToHash(h, true)} className="py-2.5 text-[15px] font-semibold text-navy dark:text-slate-200">{l}</a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-[#1a2744] mt-2">
                <a href="/paintpro/" className="flex-1 text-center rounded-xl border-2 border-slate-200 dark:border-[#1a2744] py-2.5 text-sm font-bold text-navy dark:text-white">Log In</a>
                <button onClick={() => { setOpen(false); onContact(); }} className="flex-1 rounded-xl bg-brand py-2.5 text-sm font-bold text-white">Start Free Trial</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
