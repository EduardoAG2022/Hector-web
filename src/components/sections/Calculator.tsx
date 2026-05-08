"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface CalculatorProps {
  lang: Lang;
  onQuote: () => void;
}

export function Calculator({ lang, onQuote }: CalculatorProps) {
  const tr = t[lang];
  const svcList = services[lang];
  const [serviceId, setServiceId] = useState("patios");
  const [size, setSize] = useState(400);
  const [tier, setTier] = useState<"value" | "standard" | "premium">("standard");

  const svc = svcList.find((s) => s.id === serviceId) ?? svcList[0];
  const tierMul = { value: 0.85, standard: 1.0, premium: 1.35 }[tier];
  const isPerVisit = svc.price.unit.includes("visit") || svc.price.unit.includes("visita");
  const min = Math.round((size * svc.price.min * tierMul) / 50) * 50;
  const max = Math.round((size * svc.price.max * tierMul) / 50) * 50;
  const fmt = (n: number) => "$" + n.toLocaleString();

  const tierLabel =
    lang === "en"
      ? { value: "Value", standard: "Standard", premium: "Premium" }
      : { value: "Económico", standard: "Estándar", premium: "Premium" };

  return (
    <section className="jv-section" style={{ background: "var(--jv-paper)" }}>
      <div className="jv-container">
        <div className="jv-calc-grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="jv-eyebrow">{tr.sections.calc.eyebrow}</div>
            </motion.div>
            <motion.h2
              className="jv-h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: tr.sections.calc.title }}
            />
            <motion.p
              className="jv-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tr.sections.calc.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                className="jv-btn jv-btn-primary"
                style={{ marginTop: 36 }}
                onClick={onQuote}
              >
                {tr.calc.cta}
                <span className="jv-btn-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="jv-calc">
              {/* Service selector */}
              <div className="jv-calc-row">
                <div className="jv-calc-label">{tr.calc.service}</div>
                <div className="jv-calc-services">
                  {svcList.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className="jv-calc-chip"
                      data-active={s.id === serviceId}
                      onClick={() => setServiceId(s.id)}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size slider */}
              {!isPerVisit && (
                <div className="jv-calc-row">
                  <div className="jv-calc-row-head">
                    <label className="jv-calc-label" htmlFor="jv-size">
                      {tr.calc.area}
                    </label>
                    <span className="jv-calc-size">
                      {size.toLocaleString()}
                      <span>sq ft</span>
                    </span>
                  </div>
                  <input
                    id="jv-size"
                    type="range"
                    min="50"
                    max="2500"
                    step="25"
                    value={size}
                    onChange={(e) => setSize(+e.target.value)}
                    className="jv-calc-slider"
                  />
                  <div className="jv-calc-ticks">
                    <span>50</span>
                    <span>1,000</span>
                    <span>2,500</span>
                  </div>
                </div>
              )}

              {/* Tier selector */}
              <div className="jv-calc-row">
                <div className="jv-calc-label">{tr.calc.surface}</div>
                <div className="jv-calc-tier">
                  {(["value", "standard", "premium"] as const).map((k) => (
                    <button
                      key={k}
                      type="button"
                      data-active={tier === k}
                      onClick={() => setTier(k)}
                    >
                      {tierLabel[k]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="jv-calc-est">
                <div className="jv-calc-est-label">{tr.calc.est}</div>
                <div className="jv-calc-est-value">
                  {fmt(min)}
                  <span>—</span>
                  {fmt(max)}
                </div>
                <div className="jv-calc-est-note">{tr.calc.note}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
