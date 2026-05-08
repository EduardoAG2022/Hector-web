"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faq, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface FAQProps {
  lang: Lang;
}

export function CTA({ lang }: FAQProps) {
  const tr = t[lang];
  const items = faq[lang];
  const [open, setOpen] = useState(0);

  return (
    <section className="jv-section" style={{ background: "var(--jv-paper-2)" }}>
      <div className="jv-container">
        <div className="jv-section-head" style={{ maxWidth: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="jv-eyebrow">{tr.sections.faq.eyebrow}</div>
          </motion.div>
          <motion.h2
            className="jv-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tr.sections.faq.title}
          </motion.h2>
        </div>

        <div className="jv-faq">
          {items.map((item, i) => (
            <div key={i} className="jv-faq-item" data-open={open === i}>
              <button
                type="button"
                className="jv-faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="jv-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="jv-faq-a-wrap">
                <div className="jv-faq-a">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
