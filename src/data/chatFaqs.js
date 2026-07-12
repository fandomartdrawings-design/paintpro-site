/**
 * PaintPro Marketing Site — chat widget FAQ script
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 *
 * Benefit-focused, customer-facing answers only. Deliberately high-level —
 * describes WHAT PaintPro does for a painting business, never HOW it's built.
 */

export const GREETING =
  "Hi there! I'm Pip, PaintPro's helper. 🎨 I can tell you how PaintPro keeps your painting business organized — pick a question below, or ask to start a free trial anytime.";

export const FAQS = [
  {
    q: "What is PaintPro?",
    a: "PaintPro is an all-in-one app built specifically for painting businesses. Instead of juggling spreadsheets, sticky notes, and three different apps, you run your whole operation — customers, jobs, crews, and inventory — from one place that actually speaks the trade.",
  },
  {
    q: "Can it track my customers?",
    a: "Absolutely — that's the heart of it. Every customer, every job, every quote and note lives in one organized place, so you always know who's next, what you promised them, and where each job stands. No more digging through texts to remember a detail.",
  },
  {
    q: "Does it handle inventory & paint?",
    a: "Yes! PaintPro helps you keep tabs on your paint and supplies so you order what a job actually needs instead of guessing — less running back to the store mid-job, and less money sitting on a shelf as leftover cans.",
  },
  {
    q: "What about my crews?",
    a: "PaintPro helps you keep your crews coordinated — who's on which job, hours worked, and what's scheduled next — so your team always knows where to be and you always know what's getting done.",
  },
  {
    q: "Scheduling & weather?",
    a: "You can plan your jobs on a clear schedule, and PaintPro keeps the weather in mind — a real help when a rainy day means an outdoor spray job needs to move. Fewer surprises, fewer wasted trips.",
  },
  {
    q: "Getting paid?",
    a: "PaintPro helps you send professional estimates and invoices and get paid faster — so the money side of the job is as buttoned-up as the paint job itself.",
  },
  {
    q: "How much does it cost?",
    a: "Simple, flat pricing — and you can add painters to your crew without your bill going up per person. Check the Pricing section on this page for current plans, and remember the trial is free with no credit card.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is stored securely and it stays yours — never sold, never shared, and always exportable on your terms. You're never locked in.",
  },
];

// Closing nudge shown after a few questions, or when the user asks about trying it.
export const CTA_PROMPT =
  "Want to see it with your own jobs? Starting a free trial takes about a minute — no credit card, and we'll help you get set up.";
