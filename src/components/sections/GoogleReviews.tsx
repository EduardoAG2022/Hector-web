"use client";

import { motion } from "framer-motion";
import { reviews, t } from "@/config/site";
import type { Lang } from "@/config/site";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="jv-stars" aria-label={`${n} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

interface ReviewsProps {
  lang: Lang;
}

export function GoogleReviews({ lang }: ReviewsProps) {
  const tr = t[lang];

  return (
    <section className="jv-section" id="reviews">
      <div className="jv-container">
        <div className="jv-section-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="jv-eyebrow">{tr.sections.reviews.eyebrow}</div>
          </motion.div>
          <motion.h2
            className="jv-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: tr.sections.reviews.title }}
          />
        </div>

        <div className="jv-reviews-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="jv-review"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="jv-review-head">
                <Stars n={r.stars} />
                <span className="jv-review-source">{r.source}</span>
              </div>
              <p className="jv-review-text">
                {lang === "en" ? r.en : r.es}
              </p>
              <div className="jv-review-attr">
                <div className="jv-review-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="jv-review-name">{r.name}</div>
                  <div className="jv-review-city">{r.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
