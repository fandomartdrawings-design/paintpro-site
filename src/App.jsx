/**
 * PaintPro Marketing Site
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Comparison from "./components/Comparison.jsx";
import WhyPaintPro from "./components/WhyPaintPro.jsx";
import SavingsCalculator from "./components/SavingsCalculator.jsx";
import Pricing from "./components/Pricing.jsx";
import MobilePreview from "./components/MobilePreview.jsx";
import ContactModal from "./components/ContactModal.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import AmbientBackground from "./components/AmbientBackground.jsx";

/* ── Problem → Solution ── */
const OLD_WAY = [
  ["📝", "Handwritten estimates that never quite match the final invoice"],
  ["🤔", "Guessing gallons, then a second trip to the paint store"],
  ["🧢", "Scheduling by group text and a whiteboard"],
  ["🌧️", "Loading the sprayer and driving out, only to find rain"],
  ["💸", "Chasing payment for weeks after the job is finished"],
];
const NEW_WAY = [
  ["📋", "Line-item estimates that become invoices in one tap"],
  ["🧮", "A calculator that knows spread rates and coats"],
  ["🗓️", "Color-coded jobs with crew assignments everyone sees"],
  ["⛅", "Every job checked against its own 7-day forecast"],
  ["💳", "Stripe links customers pay from their phone"],
];

function ProblemSolution() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#0a1322]">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            You didn't start a painting company<br className="hidden md:block" /> to <span className="text-flame">do paperwork</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-7">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-flame mb-5">The old way</div>
              <ul className="space-y-4">
                {OLD_WAY.map(([ic, t]) => (
                  <li key={t} className="flex gap-3 text-[14px] text-slate-500 dark:text-slate-400">
                    <span className="text-lg leading-none mt-0.5 grayscale opacity-70">{ic}</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-brand/40 bg-gradient-to-b from-brand-tint/50 to-white dark:from-brand/10 dark:to-[#0f1a2e] p-7 shadow-[0_18px_50px_rgba(33,158,188,.15)]">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-brand mb-5">The PaintPro way</div>
              <ul className="space-y-4">
                {NEW_WAY.map(([ic, t]) => (
                  <li key={t} className="flex gap-3 text-[14px] font-semibold text-navy dark:text-slate-200">
                    <span className="text-lg leading-none mt-0.5">{ic}</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials (placeholder quotes from beta feedback) ── */
const QUOTES = [
  { q: "The inventory alone pays for it. My van actually has what the job needs now — no more 4 PM store runs.", n: "M. R.", r: "Crew Lead · SW Michigan" },
  { q: "I sent a Stripe link from the driveway and the invoice was paid before I got home. That used to take three weeks.", n: "D. K.", r: "Owner, 6-person crew" },
  { q: "The weather call saved us a full mobilization last spring. It flagged the rain two days out — we swapped to an interior job instead.", n: "J. T.", r: "Field Manager" },
];

function Testimonials() {
  return (
    <section id="story" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">From the field</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white">Crews that switched</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {QUOTES.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-7 shadow-[0_10px_36px_rgba(2,48,71,.07)]">
                <div className="text-brand text-2xl font-black leading-none mb-4">“</div>
                <blockquote className="text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">{t.q}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full grid place-items-center bg-brand text-white font-extrabold text-sm">{t.n[0]}</span>
                  <span>
                    <span className="block text-[13.5px] font-extrabold text-navy dark:text-white">{t.n}</span>
                    <span className="block text-[11.5px] text-slate-400">{t.r}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center text-[11.5px] text-slate-400">Quotes from early-access crew feedback.</Reveal>
      </div>
    </section>
  );
}

/* ── Final CTA banner ── */
function CTABanner({ onContact }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-deep p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(2,48,71,.35)]">
            <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/25 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-mint/15 blur-3xl" />
            <h2 className="relative text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to run tighter jobs<br />and get paid faster?
            </h2>
            <p className="relative mt-4 text-white/60 max-w-xl mx-auto text-[15px]">
              Set up takes an afternoon. Your crew learns it in a coffee break.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={onContact}
                className="rounded-xl bg-brand px-8 py-4 text-[15px] font-bold text-white shadow-[0_12px_36px_rgba(33,158,188,.5)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all">
                Start Free Trial →
              </button>
              <a href="/paintpro/"
                className="rounded-xl border-2 border-white/25 px-8 py-4 text-[15px] font-bold text-white hover:bg-white/10 transition-colors">
                Log In
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [contact, setContact] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("pps-dark", dark ? "1" : "0"); } catch {}
  }, [dark]);

  return (
    <div className="bg-white dark:bg-[#070d1a] text-ink dark:text-slate-200 antialiased">
      <AmbientBackground />
      <Nav dark={dark} onToggleDark={() => setDark(d => !d)} onContact={() => setContact(true)} />
      <main>
        <Hero onContact={() => setContact(true)} />
        <ProblemSolution />
        <Features />
        <Comparison />
        <WhyPaintPro />
        <SavingsCalculator />
        <Pricing onContact={() => setContact(true)} />
        <Testimonials />
        <MobilePreview />
        <CTABanner onContact={() => setContact(true)} />
      </main>
      <Footer />
      <ContactModal open={contact} onClose={() => setContact(false)} />
      <ChatWidget onContact={() => setContact(true)} />
    </div>
  );
}
