/**
 * PaintPro Marketing Site — "Pip" the painter-robot mascot (pure SVG/CSS)
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 *
 * A friendly Disney-style robot in white painter's overalls holding a brush.
 * Built as inline SVG so it inherits brand colors, scales crisply, and needs
 * no image asset. `waving` drives a small brush-wave animation on the launcher.
 */
import React from "react";
import { motion } from "framer-motion";

export default function PainterBot({ size = 60, waving = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* subtle ground shadow */}
      <ellipse cx="50" cy="92" rx="26" ry="5" fill="#023047" opacity="0.18" />

      {/* ── Body: white painter overalls ── */}
      <rect x="30" y="52" width="40" height="34" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      {/* overall bib + straps */}
      <rect x="36" y="50" width="28" height="20" rx="6" fill="#EEF2F6" />
      <rect x="39" y="44" width="4" height="14" rx="2" fill="#E2E8F0" />
      <rect x="57" y="44" width="4" height="14" rx="2" fill="#E2E8F0" />
      {/* bib pocket + brand button */}
      <rect x="44" y="58" width="12" height="9" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <circle cx="50" cy="55" r="2" fill="#219EBC" />
      {/* teal paint smudge on overalls (charming, on-brand) */}
      <path d="M34 74c3 2 6 1 8-1s5-1 6 2" stroke="#219EBC" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />

      {/* ── Left arm ── */}
      <rect x="22" y="56" width="9" height="20" rx="4.5" fill="#8ECAE6" />

      {/* ── Right arm holding a brush (animated when waving) ── */}
      <motion.g
        style={{ transformOrigin: "72px 58px" }}
        animate={waving ? { rotate: [0, -16, 4, -16, 0] } : { rotate: 0 }}
        transition={waving ? { duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" } : {}}
      >
        <rect x="69" y="52" width="9" height="20" rx="4.5" fill="#8ECAE6" />
        {/* brush handle */}
        <rect x="76" y="40" width="4" height="16" rx="2" fill="#B45309" transform="rotate(24 78 48)" />
        {/* brush ferrule */}
        <rect x="80" y="34" width="6" height="5" rx="1" fill="#94A3B8" transform="rotate(24 83 36)" />
        {/* brush bristles with teal paint */}
        <path d="M83 28l6 3-3 5-5-3z" fill="#219EBC" transform="rotate(24 85 31)" />
        {/* paint drip */}
        <circle cx="88" cy="27" r="1.6" fill="#FB8500" />
      </motion.g>

      {/* ── Head ── */}
      <rect x="32" y="20" width="36" height="30" rx="13" fill="#8ECAE6" stroke="#5AAFCB" strokeWidth="1.5" />
      {/* face screen */}
      <rect x="37" y="26" width="26" height="18" rx="8" fill="#023047" />
      {/* eyes */}
      <circle cx="45" cy="35" r="3.2" fill="#8ECAE6" />
      <circle cx="55" cy="35" r="3.2" fill="#8ECAE6" />
      <circle cx="46" cy="34" r="1.1" fill="#FFFFFF" />
      <circle cx="56" cy="34" r="1.1" fill="#FFFFFF" />
      {/* smile */}
      <path d="M45 40q5 3 10 0" stroke="#8ECAE6" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* ── Painter cap ── */}
      <path d="M32 22c2-8 34-8 36 0z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="30" y="21" width="40" height="5" rx="2.5" fill="#219EBC" />
      {/* antenna with paint-drop tip */}
      <rect x="48.5" y="10" width="3" height="8" rx="1.5" fill="#94A3B8" />
      <circle cx="50" cy="9" r="3" fill="#FB8500" />
    </svg>
  );
}
