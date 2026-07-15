/**
 * ForgeField — homepage
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import Icon from "./icons.jsx";

/* ── Ambient background: dark field, grid, drifting cyan/blue glows ── */
function ForgeBackground() {
  const reduced = usePrefersReducedMotion();
  const blob = (cls, anim) => (
    <motion.div aria-hidden className={`absolute rounded-full blur-3xl ${cls}`}
      animate={reduced ? undefined : anim}
      transition={reduced ? undefined : { duration: 46, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
  );
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0B0F19]">
      <div aria-hidden className="absolute inset-0 opacity-[.35]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.05) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      {blob("w-[560px] h-[560px] -top-40 -left-32 bg-cyan-500/[.09]", { x: [0, 70, 0], y: [0, 40, 0] })}
      {blob("w-[640px] h-[640px] top-[35%] -right-48 bg-blue-600/[.10]", { x: [0, -80, 0], y: [0, 60, 0] })}
      {blob("w-[520px] h-[520px] -bottom-40 left-[20%] bg-cyan-400/[.06]", { x: [0, 60, 0], y: [0, -50, 0] })}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-cyan-500/[.06] to-transparent" />
    </div>
  );
}

/* ── Shared section header ── */
function Head({ eyebrow, title, sub, id }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-cyan-400 mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-white leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{sub}</p>}
    </Reveal>
  );
}

const card = "rounded-2xl border border-white/[.08] bg-[#111827]/70 backdrop-blur-sm";
const cardHover = "hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,.08)] hover:-translate-y-0.5 transition-all duration-300";

/* ── Hero ── */
function Hero({ onDemo }) {
  const reduced = usePrefersReducedMotion();
  const anchor = (e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); };
  const METRICS = [
    ["Estimates sent this week", "34", "+12%"],
    ["Jobs on schedule", "9 of 9", "100%"],
    ["Invoices collected", "$18,240", "+22%"],
  ];
  const BARS = [38, 55, 44, 70, 62, 86, 78];
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[.07] px-3.5 py-1.5 text-[12px] font-bold text-cyan-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              A software studio for the trades
            </div>
            <h1 className="text-[44px] md:text-[64px] font-black tracking-tight text-white leading-[1.04]">
              Precision software<br />for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">field teams.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-slate-400">
              Modern software built specifically for contractors, skilled trades, and service businesses
              that keep America moving. Estimate faster, schedule tighter, and get paid sooner.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" onClick={anchor}
                className="rounded-xl bg-cyan-500 px-7 py-3.5 text-[15px] font-bold text-[#06202a] shadow-[0_10px_36px_rgba(34,211,238,.4)] hover:bg-cyan-400 hover:-translate-y-0.5 active:scale-95 transition-all">
                Explore Products →
              </a>
              <button onClick={onDemo}
                className="rounded-xl border border-white/15 px-7 py-3.5 text-[15px] font-bold text-white hover:bg-white/[.06] hover:border-white/25 transition-all">
                Schedule Demo
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[12.5px] font-semibold text-slate-500">
              <span className="flex items-center gap-1.5"><Icon name="check" className="w-3.5 h-3.5 text-cyan-400" /> Built with working crews</span>
              <span className="flex items-center gap-1.5"><Icon name="check" className="w-3.5 h-3.5 text-cyan-400" /> Web + mobile</span>
              <span className="flex items-center gap-1.5"><Icon name="check" className="w-3.5 h-3.5 text-cyan-400" /> Your data, your server</span>
            </div>
          </Reveal>
        </div>

        {/* Dashboard-inspired glass panel */}
        <Reveal delay={0.15}>
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={reduced ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className={`${card} relative p-6 shadow-[0_30px_80px_rgba(0,0,0,.5)]`}
          >
            <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20 -z-10 blur-sm" />
            <div className="flex items-center justify-between mb-5">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Field Operations</div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
              </div>
            </div>
            <div className="space-y-3">
              {METRICS.map(([l, v, d]) => (
                <div key={l} className="flex items-center justify-between rounded-xl border border-white/[.06] bg-white/[.03] px-4 py-3">
                  <span className="text-[12.5px] font-semibold text-slate-400">{l}</span>
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[15px] font-bold text-white">{v}</span>
                    <span className="text-[11px] font-bold text-cyan-300">{d}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="text-[11px] font-bold text-slate-500 mb-2">Revenue · last 7 days</div>
              <div className="flex items-end gap-1.5 h-16">
                {BARS.map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500/30 to-cyan-400"
                    initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }} />
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Outcomes ── */
const OUTCOMES = [
  ["doc", "Less paperwork", "Estimates, invoices, and job records live in one system — written once, reused everywhere."],
  ["zap", "Faster estimating", "Line-item estimates built in minutes and converted to invoices in one step."],
  ["calendar", "Effortless scheduling", "Color-coded jobs and crew assignments the whole team sees in real time."],
  ["card", "Get paid sooner", "Payment links customers settle from their phone — the day the job wraps."],
  ["chart", "Full job visibility", "Track every job from first walkthrough to final payment without chasing updates."],
  ["users", "Professional operations", "Clean estimates, clear schedules, and prompt invoices — the way established companies run."],
];

function Outcomes() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Head eyebrow="Why it matters" title={<>More time in the field.<br />Less time behind a desk.</>}
          sub="ForgeField products are measured by one thing: the outcomes they produce for the businesses running them." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTCOMES.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className={`${card} ${cardHover} h-full p-7`}>
                <span className="w-11 h-11 rounded-xl grid place-items-center bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 mb-5">
                  <Icon name={ic} />
                </span>
                <h3 className="text-[16px] font-extrabold text-white mb-2">{t}</h3>
                <p className="text-[13.5px] leading-relaxed text-slate-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Products ── */
const UPCOMING = [
  ["doc", "QuoteFlow", "Estimating & proposals", "Build winning estimates in minutes, not evenings."],
  ["clock", "CrewTrack", "Crews & time tracking", "Know where every crew is — and every hour they worked."],
  ["route", "RouteIQ", "Routing & dispatch", "Tighter routes. Less windshield time between jobs."],
  ["box", "MaterialHub", "Materials & inventory", "Track every gallon, fitting, and fastener across vans."],
  ["card", "InvoicePro", "Billing & payments", "Invoices out the same day. Paid without the chase."],
  ["truck", "Fleet", "Vehicles & equipment", "Every truck, trailer, and tool accounted for."],
  ["users", "Employee Portal", "Team management", "Onboarding, documents, and payroll-ready hours."],
  ["pin", "Inventory", "Stock & assets", "What's in the shop, what's on the van, what's running low."],
];

const PP_FEATURES = ["Estimating & invoicing", "Crew scheduling", "CRM & customer records", "Job tracking", "Stripe payments", "Weather-smart planning"];

function Products() {
  return (
    <section id="products" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Head eyebrow="Products" title="An expanding ecosystem of field software"
          sub="Purpose-built applications that share one platform, one login, and one design language." />

        {/* Featured: PaintPro */}
        <Reveal>
          <div className={`${card} relative overflow-hidden p-8 md:p-12 mb-6 border-cyan-400/25 shadow-[0_0_70px_rgba(34,211,238,.07)]`}>
            <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_8px_24px_rgba(34,211,238,.35)]">
                    <Icon name="brush" className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-2xl font-black text-white">PaintPro</h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-2 py-0.5">Flagship · Available now</span>
                    </div>
                    <div className="text-[12.5px] font-semibold text-slate-400">Field service management for painting contractors</div>
                  </div>
                </div>
                <p className="text-[14.5px] leading-relaxed text-slate-400 mb-6 max-w-lg">
                  The complete operating system for a painting company — from the first walkthrough to
                  the final payment. Built with working crews, refined on real jobs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/paintpro"
                    className="rounded-xl bg-cyan-500 px-7 py-3.5 text-[14.5px] font-bold text-[#06202a] shadow-[0_10px_32px_rgba(34,211,238,.38)] hover:bg-cyan-400 hover:-translate-y-0.5 active:scale-95 transition-all">
                    Launch App →
                  </Link>
                  <Link to="/paintpro" className="rounded-xl border border-white/15 px-7 py-3.5 text-[14.5px] font-bold text-white hover:bg-white/[.06] transition-all">
                    Explore PaintPro
                  </Link>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PP_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 rounded-xl border border-white/[.06] bg-white/[.03] px-4 py-3 text-[13px] font-semibold text-slate-200">
                    <Icon name="check" className="w-4 h-4 text-cyan-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Coming soon grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {UPCOMING.map(([ic, name, cat, d], i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className={`${card} ${cardHover} h-full p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl grid place-items-center bg-white/[.05] text-slate-300 border border-white/[.08]">
                    <Icon name={ic} className="w-4.5 h-4.5" />
                  </span>
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">Coming soon</span>
                </div>
                <h3 className="text-[15px] font-extrabold text-white">{name}</h3>
                <div className="text-[11px] font-bold uppercase tracking-wide text-cyan-400/80 mb-2">{cat}</div>
                <p className="text-[12.5px] leading-relaxed text-slate-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Solutions ── */
const INDUSTRIES = [
  ["brush", "Painting", "Interior, exterior, and commercial painting crews", true],
  ["home", "Roofing", "Tear-offs, repairs, and inspection scheduling"],
  ["layers", "Construction", "Multi-phase jobs, subs, and site coordination"],
  ["wind", "HVAC", "Installs, maintenance plans, and service calls"],
  ["bolt", "Electrical", "Service work, rough-ins, and inspection tracking"],
  ["leaf", "Landscaping", "Recurring routes, seasonal contracts, and crews"],
  ["drop", "Pressure Washing", "Route density, quoting, and repeat customers"],
  ["wrench", "General Contractors", "Estimates, change orders, and trade coordination"],
];

function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Head eyebrow="Solutions" title="Built for the industries that build everything else"
          sub="One platform philosophy, applied to the way each trade actually works. Painting is live today — the rest of the field is next." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map(([ic, t, d, live], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className={`${card} ${cardHover} h-full p-6 ${live ? "border-cyan-400/25" : ""}`}>
                <span className={`w-10 h-10 rounded-xl grid place-items-center mb-4 border ${live ? "bg-cyan-400/10 text-cyan-300 border-cyan-400/25" : "bg-white/[.05] text-slate-300 border-white/[.08]"}`}>
                  <Icon name={ic} className="w-4.5 h-4.5" />
                </span>
                <h3 className="flex items-center gap-2 text-[15px] font-extrabold text-white mb-1.5">
                  {t}
                  {live && <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-1.5 py-px">Live</span>}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-slate-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Technology ── */
const TECH = [
  ["cloud", "Cloud infrastructure", "Reliable hosting with the option to run on your own server."],
  ["phone", "Mobile first", "Designed for a phone in one hand and a ladder in the other."],
  ["sync", "Offline ready", "Job sites don't always have signal. The work saves anyway."],
  ["shield", "Security", "Hardened sessions, hashed credentials, and least-privilege APIs."],
  ["zap", "Performance", "Fast loads on mid-range phones and spotty connections."],
  ["layers", "Automation", "Estimates become invoices. Payments reconcile themselves."],
  ["api", "API ready", "A clean service layer built for integrations from day one."],
  ["globe", "Cross platform", "Web, Android, and installable PWA from a single codebase."],
];

function Technology() {
  return (
    <section id="technology" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Head eyebrow="Technology" title="Engineered like software, built like a tool"
          sub="Every ForgeField product shares the same platform: one login, one data layer, one standard of engineering." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECH.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className={`${card} ${cardHover} h-full p-6`}>
                <span className="text-cyan-300 mb-4 block"><Icon name={ic} className="w-6 h-6" /></span>
                <h3 className="text-[14.5px] font-extrabold text-white mb-1.5">{t}</h3>
                <p className="text-[12.5px] leading-relaxed text-slate-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why ForgeField + Mission ── */
function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className={`${card} h-full p-9 md:p-12`}>
            <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-cyan-400 mb-4">Why ForgeField</div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight mb-5">
              Built by people who understand how work actually gets done in the field.
            </h2>
            <p className="text-[14.5px] leading-relaxed text-slate-400">
              Most business software is designed in an office, for an office. ForgeField products start
              from the truck, the job site, and the end of a long day — then work backward to the software.
              Real work. Real businesses. Real software.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={`${card} relative overflow-hidden h-full p-9 md:p-12 border-cyan-400/20`}>
            <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-cyan-400 mb-4">Mission</div>
            <h2 className="relative text-2xl md:text-3xl font-black tracking-tight text-white leading-tight mb-5">
              Modernize the industries that build, repair, maintain, and improve the world around us.
            </h2>
            <p className="relative text-[14.5px] leading-relaxed text-slate-400">
              The trades run on skill, not software. Our job is to make sure the software finally
              keeps up with the skill.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Ecosystem ── */
function Ecosystem() {
  const CHIPS = ["PaintPro", "QuoteFlow", "CrewTrack", "RouteIQ", "MaterialHub", "InvoicePro", "Fleet", "Employee Portal"];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Head eyebrow="Ecosystem" title={<>One company. Many products.<br />One platform.</>}
          sub="PaintPro is the beginning. Every product that follows plugs into the same foundation — shared accounts, shared data, unified experience." />
        <Reveal>
          <div className={`${card} p-8 md:p-12`}>
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {CHIPS.map((c, i) => (
                <span key={c} className={`rounded-full px-4 py-2 text-[12.5px] font-bold border ${i === 0
                  ? "text-[#06202a] bg-cyan-400 border-cyan-300 shadow-[0_6px_24px_rgba(34,211,238,.35)]"
                  : "text-slate-300 bg-white/[.04] border-white/10"}`}>
                  {c}
                </span>
              ))}
            </div>
            <div aria-hidden className="mx-auto w-px h-10 bg-gradient-to-b from-cyan-400/60 to-blue-500/30 mb-6" />
            <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/[.08] via-blue-600/[.08] to-cyan-500/[.08] px-6 py-5 text-center">
              <div className="text-[15px] font-black text-white tracking-tight">ForgeField Platform</div>
              <div className="mt-1 text-[12.5px] font-semibold text-slate-400">One login · Shared data layer · Unified billing · Consistent design</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA({ onDemo }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#111827] p-10 md:p-16 text-center">
            <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
            <h2 className="relative text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              See what precision software<br />does for a field business.
            </h2>
            <p className="relative mt-4 text-slate-400 max-w-xl mx-auto text-[15px]">
              Start with PaintPro today, or talk to us about what's coming next for your trade.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/paintpro"
                className="rounded-xl bg-cyan-500 px-8 py-4 text-[15px] font-bold text-[#06202a] shadow-[0_12px_40px_rgba(34,211,238,.4)] hover:bg-cyan-400 hover:-translate-y-0.5 active:scale-95 transition-all">
                Explore PaintPro →
              </Link>
              <button onClick={onDemo}
                className="rounded-xl border border-white/20 px-8 py-4 text-[15px] font-bold text-white hover:bg-white/[.06] transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ForgeHome({ onDemo }) {
  return (
    <div className="text-slate-200">
      <ForgeBackground />
      <Hero onDemo={onDemo} />
      <Outcomes />
      <Products />
      <Solutions />
      <Technology />
      <About />
      <Ecosystem />
      <CTA onDemo={onDemo} />
    </div>
  );
}
