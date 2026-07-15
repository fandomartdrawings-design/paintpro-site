/**
 * ForgeField — legal pages
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ForgeMark } from "./icons.jsx";

const DOCS = {
  privacy: {
    title: "Privacy Policy",
    updated: "July 2026",
    sections: [
      ["Information we collect", "When you request a demo or trial, we collect the contact details you provide: name, email address, company name, phone number, and crew size. Application usage data stays within your ForgeField product account."],
      ["How we use it", "Contact information is used to respond to your inquiry, provision your account, and communicate about the products you use. We do not sell, rent, or share your information with third parties for marketing."],
      ["Where your data lives", "ForgeField products are designed for data ownership. Business data entered into a ForgeField application belongs to you and can be exported on request. Self-hosted deployments keep your data entirely on infrastructure you control."],
      ["Payments", "Card payments are processed by Stripe. ForgeField never stores card numbers; payment details are handled entirely within Stripe's PCI-compliant systems."],
      ["Email", "Transactional and reply email is delivered via Resend. Message content is used solely to deliver the communication you initiated."],
      ["Retention & deletion", "We retain lead and account information while it is needed to serve you. Email hello@forgefield.company to request a copy of your data or its deletion."],
      ["Contact", "Questions about this policy: hello@forgefield.company."],
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "July 2026",
    sections: [
      ["Agreement", "By accessing a ForgeField website or application, you agree to these terms. If you are using ForgeField on behalf of a business, you represent that you are authorized to bind that business."],
      ["Service", "ForgeField provides field-service software applications, including PaintPro. Features may be added, changed, or retired as products evolve; material changes to paid functionality will be communicated in advance."],
      ["Accounts", "You are responsible for safeguarding your login credentials and for all activity under your account. Notify us immediately of any unauthorized use."],
      ["Your data", "You retain all rights to the business data you enter. You grant ForgeField only the license needed to operate the service on your behalf. You may export your data at any time."],
      ["Acceptable use", "You agree not to misuse the services: no unauthorized access attempts, no interference with other customers, no use of the platform for unlawful activity."],
      ["Billing", "Paid plans are billed as described at purchase. Fees are non-refundable except where required by law or expressly stated otherwise."],
      ["Disclaimer", "Services are provided \"as is.\" To the maximum extent permitted by law, ForgeField disclaims implied warranties and limits its liability to the amounts paid for the service in the twelve months preceding a claim."],
      ["Contact", "Questions about these terms: hello@forgefield.company."],
    ],
  },
};

export default function LegalPage({ doc }) {
  const { title, updated, sections } = DOCS[doc];
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/" className="inline-flex items-center gap-2.5 mb-10">
          <ForgeMark className="w-8 h-8" />
          <span className="font-extrabold text-lg tracking-tight text-white">Forge<span className="text-cyan-400">Field</span></span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">{title}</h1>
        <div className="mt-2 text-[12.5px] font-semibold text-slate-500">Last updated: {updated}</div>
        <div className="mt-10 space-y-8">
          {sections.map(([h, body]) => (
            <section key={h}>
              <h2 className="text-[16px] font-extrabold text-white mb-2">{h}</h2>
              <p className="text-[14px] leading-relaxed text-slate-400">{body}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 pt-7 border-t border-white/[.06] flex items-center justify-between">
          <Link to="/" className="text-[13px] font-bold text-cyan-300 hover:text-cyan-200 transition-colors">← Back to ForgeField</Link>
          <div className="text-[12px] text-slate-500">© 2026 ForgeField</div>
        </div>
      </div>
    </div>
  );
}
