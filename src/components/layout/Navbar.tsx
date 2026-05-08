"use client";

import { useState, useEffect } from "react";
import { business, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  onQuote: () => void;
}

export function Navbar({ lang, setLang, onQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tr = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: tr.nav.services },
    { href: "#work", label: tr.nav.work },
    { href: "#area", label: tr.nav.area },
    { href: "#reviews", label: tr.nav.reviews },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <>
      <header className="jv-nav" data-scrolled={scrolled}>
        <div className="jv-container jv-nav-inner">
          <a href="#" className="jv-logo">
            <span className="jv-logo-mark">jv</span>
            <span className="jv-logo-text">
              <span>JV Patios &amp; Stonework</span>
              <small>Annapolis · MD · Est. 2004</small>
            </span>
          </a>

          <nav className="jv-nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="jv-nav-right">
            <div className="jv-lang-pill" role="group" aria-label="Language">
              <button
                type="button"
                data-active={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <span className="jv-lang-sep" aria-hidden="true">·</span>
              <button
                type="button"
                data-active={lang === "es"}
                onClick={() => setLang("es")}
              >
                ES
              </button>
            </div>
            <button className="jv-nav-cta" onClick={onQuote}>
              {tr.nav.quote}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </button>
            <button
              className="jv-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="jv-mobile-menu" data-open={menuOpen}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="jv-mobile-menu-footer">
          <span style={{ color: "var(--jv-on-dark-green)" }}>{business.phone1}</span>
          <span>{business.email}</span>
        </div>
      </div>
    </>
  );
}
