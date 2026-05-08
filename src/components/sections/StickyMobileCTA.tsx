"use client";

import { useState, useEffect } from "react";
import { business } from "@/config/site";
import type { Lang } from "@/config/site";

interface StickyMobileCTAProps {
  lang: Lang;
  onQuote: () => void;
}

export function StickyMobileCTA({ lang, onQuote }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="jv-sticky-bar" data-visible={visible}>
      <a href={`tel:${business.phone1.replace(/\D/g, "")}`} className="jv-sticky-btn jv-sticky-call">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        {lang === "en" ? "Call" : "Llamar"}
      </a>

      <button type="button" className="jv-sticky-btn jv-sticky-quote" onClick={onQuote}>
        {lang === "en" ? "Free Quote" : "Cotización"}
      </button>
    </div>
  );
}
