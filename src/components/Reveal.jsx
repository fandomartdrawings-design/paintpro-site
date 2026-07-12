/**
 * PaintPro Marketing Site — scroll-reveal helper
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 */
import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 26, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
