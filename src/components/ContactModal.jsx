/**
 * PaintPro Marketing Site — trial/contact modal → api/leads.php → MySQL
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IN = "w-full rounded-xl border-2 border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#091424] px-4 py-3 text-[14px] text-navy dark:text-white placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 transition-all";
const LB = "block text-[11px] font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", crew_size: "", message: "", website: "" });
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setState("sending");
    try {
      // Relative path → same Apache host the site is served from, so it works
      // on localhost AND over ZeroTier with no hardcoded IPs.
      const r = await fetch("api/leads.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || d.error) throw new Error(d.error || "failed");
      setState("done");
    } catch {
      setState("error");
    }
  };

  const close = () => { onClose(); setTimeout(() => setState("idle"), 250); };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy-deep/75 backdrop-blur-sm grid place-items-center p-4" onClick={close}>
          <motion.div initial={{ scale: 0.94, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} onClick={e => e.stopPropagation()}
            className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0f1a2e] shadow-2xl">
            <div className="flex items-center justify-between px-7 pt-6">
              <h3 className="text-xl font-black text-navy dark:text-white">
                {state === "done" ? "You're on the list 🎉" : "Start your free trial"}
              </h3>
              <button onClick={close} aria-label="Close" className="w-8 h-8 rounded-full grid place-items-center bg-slate-100 dark:bg-[#1a2744] text-slate-500 dark:text-slate-300">✕</button>
            </div>

            {state === "done" ? (
              <div className="px-7 pb-8 pt-4">
                <p className="text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                  Thanks, <b>{form.name.split(" ")[0]}</b>! We got your info and we'll reach out
                  shortly to get your company set up. Keep the brushes wet. 🖌️
                </p>
                <button onClick={close} className="mt-6 w-full rounded-xl bg-brand py-3 text-[14px] font-bold text-white">Done</button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-7 pb-7 pt-4 space-y-4">
                <p className="text-[13px] text-slate-500 dark:text-slate-400 -mt-1">
                  Tell us a little about your company — no credit card, no spam.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LB}>Your Name *</label>
                    <input className={IN} value={form.name} onChange={set("name")} placeholder="Jane Painter" required />
                  </div>
                  <div>
                    <label className={LB}>Company</label>
                    <input className={IN} value={form.company} onChange={set("company")} placeholder="Fresh Coat LLC" />
                  </div>
                </div>
                <div>
                  <label className={LB}>Email *</label>
                  <input type="email" className={IN} value={form.email} onChange={set("email")} placeholder="you@company.com" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LB}>Phone</label>
                    <input className={IN} value={form.phone} onChange={set("phone")} placeholder="(269) 555-0100" />
                  </div>
                  <div>
                    <label className={LB}>Crew Size</label>
                    <select className={IN} value={form.crew_size} onChange={set("crew_size")}>
                      <option value="">Select…</option>
                      <option>Just me</option>
                      <option>2–5</option>
                      <option>6–15</option>
                      <option>16+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={LB}>Anything we should know?</label>
                  <textarea rows={3} className={`${IN} resize-y`} value={form.message} onChange={set("message")} placeholder="Currently using Jobber, spreadsheets, a whiteboard…" />
                </div>
                {/* honeypot — bots fill it, humans never see it */}
                <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} className="absolute -left-[9999px]" aria-hidden="true" />
                {state === "error" && (
                  <div className="rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 px-4 py-2.5 text-[12.5px] font-semibold text-red-600">
                    ⚠️ Couldn't send — check your connection and try again.
                  </div>
                )}
                <button type="submit" disabled={state === "sending"}
                  className="w-full rounded-xl bg-brand py-3.5 text-[14.5px] font-bold text-white shadow-[0_10px_26px_rgba(33,158,188,.4)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60">
                  {state === "sending" ? "Sending…" : "Request My Free Trial →"}
                </button>
                <p className="text-center text-[11px] text-slate-400">🔒 Stored securely on our own servers — never sold, never shared.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
