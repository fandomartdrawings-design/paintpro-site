/**
 * ForgeField — footer
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ForgeMark } from "./icons.jsx";

const COLS = [
  ["Products", [
    ["PaintPro", "/paintpro", true],
    ["QuoteFlow — coming soon", "#products"],
    ["CrewTrack — coming soon", "#products"],
    ["RouteIQ — coming soon", "#products"],
    ["InvoicePro — coming soon", "#products"],
  ]],
  ["Solutions", [
    ["Painting", "#solutions"],
    ["Roofing", "#solutions"],
    ["Construction", "#solutions"],
    ["HVAC", "#solutions"],
    ["General Contractors", "#solutions"],
  ]],
  ["Company", [
    ["About", "#about"],
    ["Technology", "#technology"],
    ["Ecosystem", "#products"],
    ["Contact", "#contact"],
  ]],
  ["Legal", [
    ["Privacy Policy", "/privacy", true],
    ["Terms of Service", "/terms", true],
  ]],
];

export default function ForgeFooter() {
  const anchor = (href) => (e) => {
    if (href[0] !== "#") return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer id="contact" className="border-t border-white/[.06] bg-[#0B0F19]/80">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <ForgeMark className="w-8 h-8" />
              <span className="font-extrabold text-lg tracking-tight text-white">Forge<span className="text-cyan-400">Field</span></span>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-400 max-w-xs">
              Precision software for field teams. Built for the contractors, skilled trades,
              and service businesses that keep America moving.
            </p>
            <a href="mailto:hello@forgefield.company" className="mt-4 inline-block text-[13px] font-bold text-cyan-300 hover:text-cyan-200 transition-colors">
              hello@forgefield.company
            </a>
          </div>
          {COLS.map(([title, links]) => (
            <div key={title}>
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-500 mb-4">{title}</div>
              <ul className="space-y-2.5">
                {links.map(([label, href, isRoute]) => (
                  <li key={label}>
                    {isRoute
                      ? <Link to={href} className="text-[13px] font-semibold text-slate-400 hover:text-white transition-colors">{label}</Link>
                      : <a href={href} onClick={anchor(href)} className="text-[13px] font-semibold text-slate-400 hover:text-white transition-colors">{label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-7 border-t border-white/[.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-slate-500">© 2026 ForgeField. All rights reserved.</div>
          <div className="text-[12px] font-semibold text-slate-500">Designed and engineered in Michigan.</div>
        </div>
      </div>
    </footer>
  );
}
