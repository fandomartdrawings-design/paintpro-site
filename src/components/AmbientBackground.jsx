/**
 * PaintPro Marketing Site — site-wide ambient glow background
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 *
 * Extends the existing blurred-blob wash already used in Hero.jsx/CTABanner
 * into one shared, site-wide layer instead of a real particle system —
 * keeps the mobile-friendly performance budget this conversion-focused site
 * needs while still reading as a premium, high-tech ambient glow.
 */
import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

const BLOBS = [
  { color: "var(--color-brand)", size: 560, top: "-8%", left: "6%", opacityLight: 0.12, opacityDark: 0.16, duration: 42 },
  { color: "var(--color-mint)", size: 480, top: "18%", left: "72%", opacityLight: 0.10, opacityDark: 0.14, duration: 52 },
  { color: "var(--color-flame)", size: 420, top: "48%", left: "-6%", opacityLight: 0.08, opacityDark: 0.12, duration: 46 },
  { color: "var(--color-amber)", size: 380, top: "72%", left: "60%", opacityLight: 0.08, opacityDark: 0.13, duration: 58 },
  { color: "var(--color-brand-soft)", size: 460, top: "92%", left: "20%", opacityLight: 0.09, opacityDark: 0.12, duration: 50 },
];

export default function AmbientBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl dark:hidden"
          style={{
            width: b.size, height: b.size, top: b.top, left: b.left,
            background: b.color, opacity: b.opacityLight,
          }}
          animate={reduced ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={reduced ? undefined : { duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {BLOBS.map((b, i) => (
        <motion.div
          key={`dark-${i}`}
          className="absolute rounded-full blur-3xl hidden dark:block"
          style={{
            width: b.size, height: b.size, top: b.top, left: b.left,
            background: b.color, opacity: b.opacityDark,
          }}
          animate={reduced ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={reduced ? undefined : { duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
