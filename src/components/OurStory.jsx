/**
 * PaintPro Marketing Site — "Our Story" founder narrative section
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import Reveal from "./Reveal.jsx";

// Punchy standalone lines get pulled out as accented statements; the rest flows
// as readable paragraphs. Kept as data so the layout stays consistent.
const PARAGRAPHS = [
  "Mine didn't begin with investors, a business degree, or a family business waiting to be handed down. It began the same way many painting companies do — with hard work, a willingness to learn, and the belief that if I kept showing up every day, something bigger could be built.",
  "After high school, I joined the Navy Reserves, where I worked in supplies and logistics. That experience taught me the value of preparation, organization, and having reliable systems. At the time, I never imagined those lessons would later shape the company I'm building today.",
  "Painting came naturally through my stepfather, who spent most of his life in the trade. Working alongside him — and later with other painting companies — I learned far more than how to prep walls or cut a clean line. I learned the pride that comes with craftsmanship and the relationships you build with customers.",
];

const PARAGRAPHS_TWO = [
  "One day I was painting walls. The next, I was writing estimates, scheduling jobs, tracking inventory, ordering materials, answering customers, managing crews, building a website, creating advertisements, posting on social media, balancing expenses, and somehow trying to remember everything else that came with owning a company.",
];

const PARAGRAPHS_THREE = [
  "The tools available to small painting businesses weren't built around the way painters actually work.",
  "My information was scattered across notebooks, spreadsheets, calendars, apps, text messages, and sticky notes. Every solution seemed to solve one problem while creating another.",
];

const PARAGRAPHS_FOUR = [
  "Every feature inside PaintPro comes from real experiences in the field. It's built around the everyday challenges painters face — creating estimates, organizing jobs, tracking materials, managing crews, planning around the weather, keeping project information together, and staying organized without juggling five different apps.",
];

const PARAGRAPHS_FIVE = [
  "Our mission isn't to replace hard work. It's to make the business side of painting a little easier, so you can spend more time growing your company and less time searching for information.",
  "Whether you're just starting out or managing multiple crews, we believe you deserve tools that work as hard as you do.",
  "PaintPro exists because I know what it's like to chase a dream with limited resources, long days, and a determination to build something better.",
];

function Para({ children }) {
  return <p className="text-[15px] md:text-[16px] leading-[1.75] text-slate-600 dark:text-slate-300">{children}</p>;
}

// A short, emphasized standalone line.
function Beat({ children }) {
  return (
    <p className="text-[17px] md:text-[19px] font-bold leading-snug text-navy dark:text-white">{children}</p>
  );
}

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 md:py-28 bg-white dark:bg-[#070d1a]">
      <div className="mx-auto max-w-3xl px-5">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Our Story</div>
          <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-navy dark:text-white leading-tight">
            Built for Painters.<br className="hidden sm:block" /> <span className="text-brand">By a Painter.</span>
          </h2>
          <p className="mt-5 text-[16px] text-slate-500 dark:text-slate-400">Every successful business has a story.</p>
        </Reveal>

        {/* Body */}
        <div className="space-y-6">
          {PARAGRAPHS.map((p, i) => <Reveal key={i} delay={0.03 * i}><Para>{p}</Para></Reveal>)}

          <Reveal><Beat>Eventually, I decided to build something of my own.</Beat></Reveal>

          <Reveal><Para>Like many contractors, I quickly discovered that painting wasn't the hardest part.</Para></Reveal>

          {/* Pull-quote 1 */}
          <Reveal>
            <div className="my-4 border-l-4 border-brand pl-6 py-1">
              <p className="text-2xl md:text-3xl font-black text-navy dark:text-white">Running the business was.</p>
            </div>
          </Reveal>

          {PARAGRAPHS_TWO.map((p, i) => <Reveal key={i}><Para>{p}</Para></Reveal>)}

          <Reveal>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-slate-50 dark:bg-[#0f1a2e] p-5 text-center">
                <div className="text-[15px] font-bold text-navy dark:text-white">I made plenty of mistakes.</div>
              </div>
              <div className="rounded-2xl border border-brand/30 bg-brand-tint/50 dark:bg-brand/10 p-5 text-center">
                <div className="text-[15px] font-bold text-navy dark:text-white">I also had plenty of wins.</div>
              </div>
            </div>
          </Reveal>

          <Reveal><Para>Every success taught me something. Every setback taught me even more.</Para></Reveal>
          <Reveal><Beat>Over time, I noticed a common problem.</Beat></Reveal>

          {PARAGRAPHS_THREE.map((p, i) => <Reveal key={i}><Para>{p}</Para></Reveal>)}

          {/* Pull-quote 2 */}
          <Reveal>
            <div className="my-4 border-l-4 border-brand pl-6 py-1">
              <p className="text-xl md:text-2xl font-black text-navy dark:text-white italic">"There has to be a better way."</p>
            </div>
          </Reveal>

          <Reveal><Para>So I started building one. Not because I wanted to start a software company. Because I wanted a better way to run my own painting company.</Para></Reveal>

          {PARAGRAPHS_FOUR.map((p, i) => <Reveal key={i}><Para>{p}</Para></Reveal>)}

          <Reveal>
            <Beat>PaintPro wasn't created by people trying to imagine what painters need. It was created by someone who has lived it.</Beat>
          </Reveal>

          {PARAGRAPHS_FIVE.map((p, i) => <Reveal key={i} delay={0.03 * i}><Para>{p}</Para></Reveal>)}

          <Reveal>
            <p className="text-[16px] md:text-[17px] font-semibold leading-[1.75] text-navy dark:text-white">
              I'm still on that journey. And I'm excited that PaintPro can be part of yours.
            </p>
          </Reveal>
        </div>

        {/* Signature slogan card */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-deep p-10 md:p-12 text-center shadow-[0_30px_80px_rgba(2,48,71,.35)]">
            <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/25 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-mint/15 blur-3xl" />
            <p className="relative text-2xl md:text-4xl font-black text-white leading-tight">
              "Built for Painters. By a Painter."
            </p>
            <p className="relative mt-4 text-white/70 text-[15px]">It's more than our slogan. It's who we are.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
