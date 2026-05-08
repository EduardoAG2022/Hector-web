"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cities, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface ServiceMapProps {
  lang: Lang;
}

export function ServiceMap({ lang }: ServiceMapProps) {
  const tr = t[lang];
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="jv-section jv-map-wrap" id="area">
      <div className="jv-container">
        <div className="jv-map-grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="jv-eyebrow">{tr.sections.area.eyebrow}</div>
            </motion.div>
            <motion.h2
              className="jv-h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: tr.sections.area.title }}
            />
            <motion.p
              className="jv-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tr.sections.area.sub}
            </motion.p>

            <div className="jv-map-cities-list">
              {cities
                .filter((c) => !("hq" in c))
                .slice(0, 10)
                .map((c) => (
                  <div key={c.name}>
                    <span>{c.name}</span>
                    <span>{"dist" in c ? c.dist : 0}mi</span>
                  </div>
                ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="jv-map">
              <svg
                viewBox="0 0 100 100"
                className="jv-map-svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="jv-rad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--jv-green)" stopOpacity="0.32" />
                    <stop offset="60%" stopColor="var(--jv-green)" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="var(--jv-green)" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="jv-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.15" opacity="0.3" />
                  </pattern>
                </defs>

                <rect width="100" height="100" fill="url(#jv-grid)" />

                {/* Bay water shape */}
                <path
                  d="M 55 0 Q 60 20 58 35 Q 65 45 60 55 Q 70 70 65 90 Q 70 100 60 100 L 100 100 L 100 0 Z"
                  fill="currentColor"
                  opacity="0.06"
                />
                <path
                  d="M 56 5 Q 60 22 59 36 Q 66 46 62 56 Q 71 72 67 92"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  opacity="0.4"
                  strokeDasharray="1,1.5"
                />

                {/* 40-mile radius */}
                <circle cx="50" cy="50" r="40" fill="url(#jv-rad)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--jv-green)" strokeWidth="0.5" strokeDasharray="0.8,1.2" opacity="0.7" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="var(--jv-green)" strokeWidth="0.3" strokeDasharray="0.6,1" opacity="0.45" />

                <g transform="translate(50, 10)">
                  <text textAnchor="middle" fontSize="2.4" fill="var(--jv-green)" fontWeight="700" letterSpacing="0.3">
                    40 MI RADIUS
                  </text>
                </g>

                {cities.map((c, i) => (
                  <g
                    key={c.name}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {"hq" in c && c.hq ? (
                      <>
                        <circle cx={c.x} cy={c.y} r="2.6" fill="var(--jv-green)" />
                        <circle cx={c.x} cy={c.y} r="2.6" fill="none" stroke="var(--jv-green)" strokeWidth="0.4">
                          <animate attributeName="r" values="2.6;5;2.6" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <text x={c.x} y={c.y - 4} textAnchor="middle" fontSize="2.6" fontWeight="800" fill="currentColor">
                          {c.name}
                        </text>
                        <text x={c.x} y={c.y + 5.5} textAnchor="middle" fontSize="1.6" fill="var(--jv-green)" fontWeight="600" letterSpacing="0.2">
                          HQ
                        </text>
                      </>
                    ) : (
                      <>
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={hover === i ? 1.4 : 0.9}
                          fill="currentColor"
                          opacity={hover === i ? 1 : 0.55}
                        />
                        <text
                          x={c.x}
                          y={c.y - 1.8}
                          textAnchor="middle"
                          fontSize={hover === i ? 2.2 : 1.8}
                          fill="currentColor"
                          opacity={hover === i ? 1 : 0.7}
                          fontWeight={hover === i ? 700 : 500}
                        >
                          {c.name}
                        </text>
                        {hover === i && "dist" in c && (
                          <text
                            x={c.x}
                            y={c.y + 3}
                            textAnchor="middle"
                            fontSize="1.5"
                            fill="var(--jv-green)"
                            fontWeight="700"
                          >
                            {c.dist} mi
                          </text>
                        )}
                      </>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
