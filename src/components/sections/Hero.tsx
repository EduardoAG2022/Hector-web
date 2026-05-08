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
              <a
                className="jv-btn jv-btn-ghost"
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                </svg>
                {tr.hero.cta2}
              </a>
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
