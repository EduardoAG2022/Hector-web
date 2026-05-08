"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/config/site";
import type { Lang } from "@/config/site";

interface StatCounterProps {
  value: string;
  label: string;
}

function StatCounter({ value, label }: StatCounterProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = value.match(/^(\d+)/);
    if (!numeric) return;
    const target = parseInt(numeric[1], 10);
    const suffix = value.slice(numeric[1].length);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animated.current) {
            animated.current = true;
            const dur = 1200;
            const start = performance.now();
            const tick = (now: number) => {
              const k = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              setDisplay(Math.round(target * eased) + suffix);
              if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="jv-stat">
      <div className="jv-stat-n">{display}</div>
      <div className="jv-stat-l">{label}</div>
    </div>
  );
}

interface StatsProps {
  lang: Lang;
}

export function Stats({ lang }: StatsProps) {
  return (
    <section className="jv-stats">
      <div className="jv-container">
        <div className="jv-stats-grid">
          {stats[lang].map((s, i) => (
            <StatCounter key={i} value={s.n} label={s.l} />
          ))}
        </div>
      </div>
    </section>
  );
}
