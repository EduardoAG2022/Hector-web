"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, t } from "@/config/site";
import type { Lang } from "@/config/site";

const whyIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
];

interface WhyUsProps {
  lang: Lang;
}

export function ValueProp({ lang }: WhyUsProps) {
  const tr = t[lang];

  return (
    <section className="jv-section">
      <div className="jv-container">
        <div className="jv-why-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="jv-why-img-stack">
              <Image
                src={images.worker}
                alt="JV crew at work"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <Image
                src={images.stone1}
                alt="Stonework detail"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="jv-why-stamp">
                <div>
                  <em>20+</em>
                  <small>{lang === "en" ? "Years" : "Años"}</small>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="jv-eyebrow">{tr.sections.why.eyebrow}</div>
            </motion.div>
            <motion.h2
              className="jv-h2"
              style={{ whiteSpace: "pre-line" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {tr.sections.why.title}
            </motion.h2>
            <motion.p
              className="jv-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tr.sections.why.sub}
            </motion.p>

            <div className="jv-why-list">
              {tr.why.map((w, i) => (
                <motion.div
                  key={i}
                  className="jv-why-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="jv-why-icon">{whyIcons[i]}</div>
                  <div>
                    <div className="jv-why-t">{w.t}</div>
                    <div className="jv-why-d">{w.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
