/**
 * PaintPro Marketing Site — savings calculator
 * Compare common per-user SaaS pricing vs PaintPro flat plans.
 */
import React, { useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";

const money = (v) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

export default function SavingsCalculator() {
  const [crewSize, setCrewSize] = useState(6);
  const [standardBase, setStandardBase] = useState(79);
  const [standardPerUser, setStandardPerUser] = useState(29);

  const data = useMemo(() => {
    const standardMonthly = standardBase + standardPerUser * crewSize;
    const crewPlanMonthly = 29;
    const companyPlanMonthly = 59;

    const crewMonthlySavings = Math.max(0, standardMonthly - crewPlanMonthly);
    const companyMonthlySavings = Math.max(0, standardMonthly - companyPlanMonthly);

    const selfHostedOneTime = 1499;
    const selfHostedBreakEvenMonths = companyMonthlySavings > 0
      ? Math.ceil(selfHostedOneTime / companyMonthlySavings)
      : null;

    return {
      standardMonthly,
      crewPlanMonthly,
      companyPlanMonthly,
      crewMonthlySavings,
      companyMonthlySavings,
      crewAnnualSavings: crewMonthlySavings * 12,
      companyAnnualSavings: companyMonthlySavings * 12,
      selfHostedBreakEvenMonths,
    };
  }, [crewSize, standardBase, standardPerUser]);

  return (
    <section id="savings" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[12.5px] font-extrabold uppercase tracking-[0.15em] text-brand mb-3">Savings calculator</div>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-navy dark:text-white leading-tight">
            See what flat pricing saves your <span className="text-brand">crew</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Plug in your current software rates and crew size to compare against PaintPro plans.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#0f1a2e] p-6 shadow-[0_10px_36px_rgba(2,48,71,.08)]">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-400 mb-4">Your current setup</div>

              <label className="block text-[12px] font-bold text-slate-500 dark:text-slate-300 mb-1.5">Crew size</label>
              <input
                type="range"
                min="1"
                max="60"
                value={crewSize}
                onChange={(e) => setCrewSize(parseInt(e.target.value, 10))}
                className="w-full"
              />
              <div className="text-sm font-bold text-navy dark:text-white mb-5">{crewSize} users</div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-slate-500 dark:text-slate-300 mb-1.5">Standard monthly base fee</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={standardBase}
                    onChange={(e) => setStandardBase(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#091424] px-3 py-2.5 text-[14px] text-navy dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-500 dark:text-slate-300 mb-1.5">Standard per-user fee</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={standardPerUser}
                    onChange={(e) => setStandardPerUser(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-[#1a2744] bg-white dark:bg-[#091424] px-3 py-2.5 text-[14px] text-navy dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 dark:bg-[#091424] border border-slate-200 dark:border-[#1a2744] p-3.5">
                <div className="text-[11px] uppercase tracking-wide font-extrabold text-slate-400">Current monthly cost</div>
                <div className="text-2xl font-black text-navy dark:text-white mt-1">{money(data.standardMonthly)}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-b from-brand-tint/60 to-white dark:from-brand/10 dark:to-[#0f1a2e] p-6 shadow-[0_16px_44px_rgba(33,158,188,.16)]">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-brand mb-4">PaintPro comparison</div>

              <div className="space-y-3">
                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] border border-slate-200 dark:border-[#1a2744] p-3.5">
                  <div className="flex items-center justify-between text-sm font-bold text-navy dark:text-white">
                    <span>Crew plan ({money(data.crewPlanMonthly)}/mo)</span>
                    <span className="text-mint">Save {money(data.crewMonthlySavings)}/mo</span>
                  </div>
                  <div className="text-[12px] text-slate-500 dark:text-slate-300 mt-1">Annual savings: {money(data.crewAnnualSavings)}</div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] border border-slate-200 dark:border-[#1a2744] p-3.5">
                  <div className="flex items-center justify-between text-sm font-bold text-navy dark:text-white">
                    <span>Company plan ({money(data.companyPlanMonthly)}/mo)</span>
                    <span className="text-mint">Save {money(data.companyMonthlySavings)}/mo</span>
                  </div>
                  <div className="text-[12px] text-slate-500 dark:text-slate-300 mt-1">Annual savings: {money(data.companyAnnualSavings)}</div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#0f1a2e] border border-slate-200 dark:border-[#1a2744] p-3.5">
                  <div className="text-sm font-bold text-navy dark:text-white">Self-hosted break-even</div>
                  <div className="text-[12px] text-slate-500 dark:text-slate-300 mt-1">
                    {data.selfHostedBreakEvenMonths
                      ? `${data.selfHostedBreakEvenMonths} month(s) versus your standard stack (using Company-plan savings).`
                      : "No monthly savings detected with current inputs. Increase standard rates or crew size to compare break-even."}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11.5px] text-slate-400">
                Estimates only. Enter your actual vendor rates for a realistic comparison.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
