/**
 * ForgeField — app shell & routes
 * Copyright © 2026 ForgeField. All rights reserved.
 */
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ForgeNav from "./forge/ForgeNav.jsx";
import ForgeHome from "./forge/ForgeHome.jsx";
import ForgeFooter from "./forge/ForgeFooter.jsx";
import LegalPage from "./forge/LegalPage.jsx";
import PaintProPage from "./PaintProPage.jsx";
import ContactModal from "./components/ContactModal.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Home() {
  const [demo, setDemo] = useState(false);
  return (
    <div className="bg-[#0B0F19] min-h-screen antialiased">
      <ForgeNav onDemo={() => setDemo(true)} />
      <main><ForgeHome onDemo={() => setDemo(true)} /></main>
      <ForgeFooter />
      <ContactModal open={demo} onClose={() => setDemo(false)} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintpro" element={<PaintProPage />} />
        <Route path="/privacy" element={<LegalPage doc="privacy" />} />
        <Route path="/terms" element={<LegalPage doc="terms" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
