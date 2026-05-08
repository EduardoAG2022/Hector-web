"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business, images, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface HeroProps {
  lang: Lang;
  onQuote: () => void;
}

export function Hero({ lang, onQuote }: HeroProps) {
  const tr = t[lang];

  return (
    <section className="jv-hero">
      <div className="jv-container">
        <div className="jv-hero-meta-top">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {lang === "en" ? "Free estimate · 1 business day" : "Estimado gratis · 1 día hábil"}
          </span>
          <span><em>vol. xx</em></span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s-8-4.5-8-11.5A8 8 0 0 1 12 2a8 8 0 0 1 8 8.5C20 17.5 12 22 12 22z" />
            </svg>
            Annapolis · MD · 40 mi
          </span>
        </div>

        <div className="jv-hero-grid">
          <div className="jv-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="jv-hero-eyebrow-row">
                <span>JV</span>
                <span style={{ flex: 1, height: 1, background: "currentColor", opacity: 0.2 }} />
                <span>{tr.hero.eyebrow}</span>
              </div>
            </motion.div>

            <motion.h1
              className="jv-hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              dangerouslySetInnerHTML={{
                __html: lang === "en"
                  ? "Stone, paver, <span style=\"font-style:italic;color:var(--jv-green)\">&amp;</span> <em>landscape</em> that outlast the mortgage."
                  : "Piedra, adoquín <span style=\"font-style:italic;color:var(--jv-green)\">y</span> <em>paisaje</em> que duran más que la hipoteca.",
              }}
            />

            <motion.p
              className="jv-hero-sub"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
            >
              {lang === "en"
                ? "Hand-laid patios, walls, and walkways from a family crew with 20 years in the Chesapeake. Free on-site estimate within 40 miles of Annapolis — usually within 48 hours."
                : "Patios, muros y caminos hechos a mano por una cuadrilla familiar con 20 años en el área de Chesapeake. Estimado en sitio gratis dentro de 40 millas de Annapolis — usualmente en 48 horas."}
            </motion.p>

            <motion.div
              className="jv-hero-ctas"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              <button className="jv-btn jv-btn-primary" onClick={onQuote}>
                {tr.hero.cta1}
                <span className="jv-btn-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>

            <motion.div
              className="jv-hero-index"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="jv-hero-index-item">
                <small>{lang === "en" ? "Year founded" : "Fundada"}</small>
                <strong><em>2004</em></strong>
              </div>
              <div className="jv-hero-index-item">
                <small>{lang === "en" ? "Reviews · ★" : "Reseñas · ★"}</small>
                <strong><em>4.9</em></strong>
              </div>
              <div className="jv-hero-index-item">
                <small>{lang === "en" ? "Projects done" : "Proyectos"}</small>
                <strong><em>850+</em></strong>
              </div>
            </motion.div>
          </div>

          <div className="jv-hero-image-wrap">
            <Image
              src={images.hero}
              alt="JV Patios & Stonework"
              fill
              priority
              style={{ objectFit: "cover", filter: "contrast(1.05) saturate(0.92)" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="jv-hero-stamp-circle">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path
                    id="jv-circ-path"
                    d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text>
                  <textPath href="#jv-circ-path" startOffset="0">
                    ★ {lang === "en"
                      ? "MHIC LICENSED · INSURED · 20+ YEARS · ANNAPOLIS MD"
                      : "LICENCIADOS · ASEGURADOS · 20+ AÑOS · ANNAPOLIS MD"} ·
                  </textPath>
                </text>
              </svg>
              <div className="jv-hero-stamp-inner">
                <div>
                  20+
                  <small>{lang === "en" ? "years" : "años"}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
