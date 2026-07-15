/**
 * ForgeField — geometric stroke icon set
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React from "react";

const PATHS = {
  doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5",
  calendar: "M5 6h14v14H5zM5 10h14M9 3v4M15 3v4",
  users: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.5-5 6-5s6 2 6 5M16 6a3 3 0 0 1 0 6M18 15c2 .6 3 2.3 3 5",
  card: "M3 7h18v11H3zM3 11h18M7 15h4",
  chart: "M4 20h16M7 16v-4M12 16V8M17 16v-6",
  shield: "M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6z",
  cloud: "M7 18a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 9a4 4 0 0 1 1 7.9z",
  zap: "M13 3L5 13h5l-1 8 8-10h-5z",
  phone: "M8 3h8v18H8zM11 18h2",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  api: "M8 5L4 12l4 7M16 5l4 7-4 7",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9c2.5-2.5 3.5-5.5 3.5-9s-1-6.5-3.5-9",
  truck: "M2 7h11v9H2zM13 10h5l3 3v3h-8M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  box: "M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l3 2",
  pin: "M12 21c4-4.5 7-8 7-11.5A7 7 0 0 0 5 9.5C5 13 8 16.5 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  brush: "M14 3l7 7-8 8-7-7zM6 11l-2 8 8-2",
  home: "M4 11l8-7 8 7v9h-5v-6h-6v6H4z",
  wind: "M3 9h11a3 3 0 1 0-3-3M3 14h15a3 3 0 1 1-3 3M3 19h7",
  bolt: "M11 3H17l-4 6h5L8 21l2-8H6z",
  leaf: "M5 19C5 9 12 4 20 4c0 10-5 15-13 15h-2zM5 19c2-5 5-8 9-10",
  drop: "M12 3c4 4.5 7 8 7 11.5a7 7 0 0 1-14 0C5 11 8 7.5 12 3z",
  wrench: "M14 7a4 4 0 0 1 5-4l-3 3 2 2 3-3a4 4 0 0 1-5 5L9 17a2 2 0 1 1-3-3z",
  sync: "M20 8A8 8 0 0 0 6 6L4 8M4 8V4M4 8h4M4 16a8 8 0 0 0 14 2l2-2M20 16v4M20 16h-4",
  route: "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h5",
  check: "M5 13l4 4L19 7",
};

export default function Icon({ name, className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

export function ForgeMark({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill="#111827" stroke="url(#fgrad)" strokeWidth="1.5" />
      <path d="M14 28V12h13M14 20h10" stroke="url(#fgrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
