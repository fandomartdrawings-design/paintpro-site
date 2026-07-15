/**
 * ForgeField — global navigation
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon, { ForgeMark } from "./icons.jsx";

const PRODUCTS = [
  { name: "PaintPro", desc: "Field management for painting contractors", icon: "brush", to: "/paintpro", live: true },
  { name: "QuoteFlow", desc: "Estimating & proposals", icon: "doc" },
  { name: "CrewTrack", desc: "Crew scheduling & time tracking", icon: "clock" },
  { name: "RouteIQ", desc: "Route planning & dispatch", icon: "route" },
  { name: "InvoicePro", desc: "Billing & payments", icon: "card" },
];

const SOLUTIONS = [
  ["brush", "Painting"], ["home", "Roofing"], ["layers", "Construction"], ["wind", "HVAC"],
  ["bolt", "Electrical"], ["leaf", "Landscaping"], ["drop", "Pressure Washing"], ["wrench", "General Contractors"],
];

function Drop({ label, open, setOpen, children, width = "w-[420px]" }) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="inline-flex items-center gap-1 py-5 text-sm font-semibold text-slate-300 hover:text-white transition-colors" aria-expanded={open}>
        {label} <span className={`text-[9px] transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.16 }}
            className={`absolute left-1/2 -translate-x-1/2 top-full ${width} rounded-2xl border border-white/10 bg-[#111827]/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,.55)] p-3`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ForgeNav({ onDemo }) {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const anchor = (href) => (e) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
    setOpen(false); setProdOpen(false); setSolOpen(false);
  };

  const link = "text-sm font-semibold text-slate-300 hover:text-white transition-colors";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/[.06]" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center gap-6">
        <a href="#top" onClick={anchor("#top")} className="flex items-center gap-2.5 mr-auto md:mr-2">
          <ForgeMark className="w-8 h-8" />
          <span className="font-extrabold text-lg tracking-tight text-white">
            Forge<span className="text-cyan-400">Field</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 mr-auto">
          <Drop label="Products" open={prodOpen} setOpen={setProdOpen}>
            <div className="grid gap-1">
              {PRODUCTS.map(p => {
                const inner = (
                  <>
                    <span className="w-9 h-9 shrink-0 rounded-lg grid place-items-center bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      <Icon name={p.icon} className="w-4.5 h-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-[13px] font-bold text-white">
                        {p.name}
                        {p.live
                          ? <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-1.5 py-px">Available</span>
                          : <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 rounded-full px-1.5 py-px">Coming soon</span>}
                      </span>
                      <span className="block text-[11.5px] text-slate-400">{p.desc}</span>
                    </span>
                  </>
                );
                const cls = "flex items-center gap-3 rounded-xl p-2.5 hover:bg-white/[.05] transition-colors";
                return p.to
                  ? <Link key={p.name} to={p.to} className={cls} onClick={() => setProdOpen(false)}>{inner}</Link>
                  : <a key={p.name} href="#products" onClick={anchor("#products")} className={cls}>{inner}</a>;
              })}
              <a href="#products" onClick={anchor("#products")} className="mt-1 px-2.5 py-2 text-[12px] font-bold text-cyan-300 hover:text-cyan-200 transition-colors">
                View the full ecosystem →
              </a>
            </div>
          </Drop>

          <Drop label="Solutions" open={solOpen} setOpen={setSolOpen} width="w-[380px]">
            <div className="grid grid-cols-2 gap-1">
              {SOLUTIONS.map(([ic, l]) => (
                <a key={l} href="#solutions" onClick={anchor("#solutions")}
                  className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 hover:bg-white/[.05] transition-colors">
                  <span className="text-cyan-300"><Icon name={ic} className="w-4 h-4" /></span>
                  <span className="text-[12.5px] font-semibold text-slate-200">{l}</span>
                </a>
              ))}
            </div>
          </Drop>

          <a href="#technology" onClick={anchor("#technology")} className={link}>Technology</a>
          <a href="#about" onClick={anchor("#about")} className={link}>About</a>
          <a href="#contact" onClick={anchor("#contact")} className={link}>Contact</a>
        </div>

        {/* Right cluster */}
        <Link to="/paintpro" className="hidden sm:inline-block text-sm font-bold text-white hover:text-cyan-300 transition-colors">
          Client Login
        </Link>
        <button onClick={onDemo}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-[#06202a] shadow-[0_6px_24px_rgba(34,211,238,.35)] hover:bg-cyan-400 hover:-translate-y-px active:scale-95 transition-all">
          Schedule Demo
        </button>

        <button className="md:hidden w-9 h-9 grid place-items-center text-white text-xl" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#111827] border-t border-white/[.06]">
            <div className="px-5 py-4 flex flex-col gap-1">
              {[["#products", "Products"], ["#solutions", "Solutions"], ["#technology", "Technology"], ["#about", "About"], ["#contact", "Contact"]].map(([h, l]) => (
                <a key={h} href={h} onClick={anchor(h)} className="py-2.5 text-[15px] font-semibold text-slate-200">{l}</a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-white/[.06] mt-2">
                <Link to="/paintpro" className="flex-1 text-center rounded-xl border border-white/15 py-2.5 text-sm font-bold text-white">Client Login</Link>
                <button onClick={() => { setOpen(false); onDemo(); }} className="flex-1 rounded-xl bg-cyan-500 py-2.5 text-sm font-bold text-[#06202a]">Schedule Demo</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
