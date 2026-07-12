/**
 * PaintPro Marketing Site — footer
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";

const COLS = [
  { h: "Product", links: [["Features", "#features"], ["Compare", "#compare"], ["Savings", "#savings"], ["Pricing", "#pricing"], ["Mobile App", "#mobile"]] },
  { h: "Company", links: [["Built by a Painter", "#story"], ["Contact", "#pricing"], ["Log In", "/paintpro/"]] },
  { h: "Trust", links: [["Your data, your server", "#mobile"], ["Encrypted crew network", "#mobile"], ["No per-user fees", "#pricing"]] },
];

export default function Footer() {
  const goToHash = (href) => (e) => {
    if (!href || href[0] !== "#") {
      return;
    }
    e.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="./logo-mark-256.png" alt="PaintPro" className="w-9 h-9 rounded-[10px]" />
            <span className="font-extrabold text-lg">Paint<span className="text-brand-soft">Pro</span></span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/50 max-w-xs">
            Field management software built specifically for painting contractors —
            by someone who still gets paint on his boots.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[10.5px] font-bold text-white/60">🔒 Encrypted peer-to-peer</span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[10.5px] font-bold text-white/60">🎨 Built for painters, by a painter</span>
          </div>
        </div>
        {COLS.map(c => (
          <div key={c.h}>
            <div className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-white/35 mb-4">{c.h}</div>
            <ul className="space-y-2.5">
              {c.links.map(([l, h]) => (
                <li key={l}><a href={h} onClick={goToHash(h)} className="text-[13.5px] font-semibold text-white/65 hover:text-brand-soft transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/40">
          <span>Copyright © 2026 Ryan William Hill. All rights reserved.</span>
          <span>PaintPro™ Field Manager</span>
        </div>
      </div>
    </footer>
  );
}
