"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { images, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface SliderProps {
  before: string;
  after: string;
  label: string;
  beforeLabel: string;
  afterLabel: string;
}

function Slider({ before, after, label, beforeLabel, afterLabel }: SliderProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromX(clientX);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setFromX]);

  return (
    <div
      ref={ref}
      className="jv-ba"
      role="slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onMouseDown={(e) => { dragging.current = true; setFromX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; setFromX(e.touches[0].clientX); }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      {/* After image (back) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="jv-ba-img jv-ba-after" src={after} alt="After" draggable="false" />

      {/* Before clip */}
      <div className="jv-ba-clip" style={{ width: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="jv-ba-img"
          src={before}
          alt="Before"
          draggable="false"
          style={{ width: `${10000 / Math.max(1, pos)}%` }}
        />
      </div>

      <div className="jv-ba-tag jv-ba-tag-before">{beforeLabel}</div>
      <div className="jv-ba-tag jv-ba-tag-after">{afterLabel}</div>

      <div className="jv-ba-handle" style={{ left: `${pos}%` }}>
        <div className="jv-ba-handle-line" />
        <div className="jv-ba-handle-knob">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8 6L4 11L8 16M14 6L18 11L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {label && <div className="jv-ba-caption">{label}</div>}
    </div>
  );
}

interface BeforeAfterProps {
  lang: Lang;
}

export function BeforeAfter({ lang }: BeforeAfterProps) {
  const tr = t[lang];

  return (
    <section className="jv-ba-wrap" id="work">
      <div className="jv-container">
        <div className="jv-section-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="jv-eyebrow">{tr.sections.work.eyebrow}</div>
          </motion.div>
          <motion.h2
            className="jv-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: tr.sections.work.title }}
          />
          <motion.p
            className="jv-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tr.sections.work.sub}
          </motion.p>
        </div>

        <div className="jv-ba-list">
          {images.beforeAfter.map((ba, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Slider
                before={ba.before}
                after={ba.after}
                label={lang === "en" ? ba.labelEn : ba.labelEs}
                beforeLabel={lang === "en" ? "Before" : "Antes"}
                afterLabel={lang === "en" ? "After" : "Después"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
