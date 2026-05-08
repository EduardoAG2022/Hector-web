"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services, images, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface ServicesProps {
  lang: Lang;
  onQuote: () => void;
}

export function Features({ lang, onQuote }: ServicesProps) {
  const tr = t[lang];
  const svcList = services[lang];

  return (
    <section className="jv-section" id="services">
      <div className="jv-container">
        <div className="jv-section-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="jv-eyebrow">{tr.sections.services.eyebrow}</div>
          </motion.div>
          <motion.h2
            className="jv-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: tr.sections.services.title }}
          />
          <motion.p
            className="jv-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tr.sections.services.sub}
          </motion.p>
        </div>

        <div className="jv-svc-list">
          {svcList.map((s, i) => (
            <motion.div
              key={s.id}
              className="jv-svc-row"
              onClick={onQuote}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="jv-svc-num">N° 0{i + 1}</div>
              <div>
                <h3 className="jv-svc-name">{s.name}</h3>
              </div>
              <div className="jv-svc-desc">{s.desc}</div>
              <div className="jv-svc-meta">
                <span className="jv-svc-price-num">${s.price.min}+</span>
                <div className="jv-svc-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="jv-svc-grid-bottom">
          {[
            { src: images.patio2, label: lang === "en" ? "Patio · 2024" : "Patio · 2024" },
            { src: images.stone1, label: lang === "en" ? "Stonework · 2025" : "Trabajo en Piedra · 2025" },
            { src: images.fire, label: lang === "en" ? "Fire pit · 2025" : "Fogata · 2025" },
          ].map((img, i) => (
            <motion.div
              key={i}
              className="jv-svc-img-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
              <span>{img.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
