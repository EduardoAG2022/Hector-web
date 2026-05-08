"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { business, services, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface ContactFormProps {
  lang: Lang;
}

interface FormData {
  service: string;
  when: string;
  address: string;
  size: string;
  message: string;
  name: string;
  phone: string;
  email: string;
}

export function ContactForm({ lang }: ContactFormProps) {
  const tr = t[lang];
  const svcList = services[lang];
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormData>({
    service: "", when: tr.form.when[0], address: "", size: "", message: "", name: "", phone: "", email: "",
  });

  const set = (k: keyof FormData, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const canNext =
    step === 0 ? !!data.service : step === 1 ? !!data.address : true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // show success regardless — don't block the user
    } finally {
      setLoading(false);
      setDone(true);
    }
  };

  return (
    <section className="jv-quote jv-section" id="contact">
      <div className="jv-container">
        <div className="jv-quote-grid">
          {/* Left side */}
          <div className="jv-quote-side">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="jv-eyebrow">{tr.sections.contact.eyebrow}</div>
              </motion.div>
              <motion.h2
                className="jv-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                dangerouslySetInnerHTML={{ __html: tr.sections.contact.title }}
              />
              <motion.p
                className="jv-sub"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {tr.sections.contact.sub}
              </motion.p>
            </div>

            <div className="jv-quote-contact">
              <div className="jv-quote-contact-item">
                <div className="jv-quote-contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="jv-quote-contact-item-text">
                  <small>{lang === "en" ? "Call" : "Llama"}</small>
                  <strong>{business.phone1}</strong>
                  <strong style={{ fontSize: 16, opacity: 0.7 }}>{business.phone2}</strong>
                </div>
              </div>
              <div className="jv-quote-contact-item">
                <div className="jv-quote-contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="jv-quote-contact-item-text">
                  <small>Email</small>
                  <strong style={{ fontSize: 18 }}>{business.email}</strong>
                </div>
              </div>
              <div className="jv-quote-contact-item">
                <div className="jv-quote-contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="jv-quote-contact-item-text">
                  <small>{lang === "en" ? "Hours" : "Horario"}</small>
                  <strong style={{ fontSize: 16 }}>
                    {business.hours[lang].weekday}
                    <br />
                    {business.hours[lang].weekend}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {done ? (
              <div className="jv-form-success">
                <div style={{ color: "var(--jv-green)" }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M14 24L21 31L34 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>{tr.form.success}</h3>
                <p>{data.name} · {data.phone}</p>
              </div>
            ) : (
              <form className="jv-form" onSubmit={handleSubmit}>
                <div className="jv-form-progress">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="jv-form-progress-step"
                      data-state={i < step ? "done" : i === step ? "active" : "next"}
                    />
                  ))}
                </div>

                {step === 0 && (
                  <div className="jv-form-step">
                    <h3 className="jv-form-step-title">{tr.form.step1}</h3>
                    <div className="jv-form-services">
                      {svcList.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          className="jv-form-service-card"
                          data-active={data.service === s.id}
                          onClick={() => { set("service", s.id); setTimeout(() => setStep(1), 200); }}
                        >
                          <span className="jv-form-service-name">{s.name}</span>
                          <span className="jv-form-service-price">
                            {lang === "en" ? "from" : "desde"} ${s.price.min}
                            <small>/{s.price.unit.split(" ").pop()}</small>
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="jv-form-row">
                      <label>{tr.form.f_when}</label>
                      <div className="jv-form-when">
                        {tr.form.when.map((w) => (
                          <button
                            key={w}
                            type="button"
                            data-active={data.when === w}
                            onClick={() => set("when", w)}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="jv-form-step">
                    <h3 className="jv-form-step-title">{tr.form.step2}</h3>
                    <label className="jv-form-field">
                      <span>{tr.form.f_address}</span>
                      <input
                        type="text"
                        value={data.address}
                        onChange={(e) => set("address", e.target.value)}
                        placeholder="Annapolis, MD"
                        required
                      />
                    </label>
                    <label className="jv-form-field">
                      <span>{tr.form.f_size}</span>
                      <input
                        type="text"
                        value={data.size}
                        onChange={(e) => set("size", e.target.value)}
                        placeholder="~ 600 sq ft"
                      />
                    </label>
                    <label className="jv-form-field">
                      <span>{tr.form.f_msg}</span>
                      <textarea
                        value={data.message}
                        onChange={(e) => set("message", e.target.value)}
                        rows={3}
                        placeholder={lang === "en" ? "Patio shape, materials in mind, deadlines..." : "Forma del patio, materiales, fechas..."}
                      />
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="jv-form-step">
                    <h3 className="jv-form-step-title">{tr.form.step3}</h3>
                    <label className="jv-form-field">
                      <span>{tr.form.f_name}</span>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => set("name", e.target.value)}
                        required
                      />
                    </label>
                    <label className="jv-form-field">
                      <span>{tr.form.f_phone}</span>
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="(443) 555-0100"
                        required
                      />
                    </label>
                    <label className="jv-form-field">
                      <span>{tr.form.f_email}</span>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@email.com"
                      />
                    </label>
                    <p className="jv-form-privacy">🔒 {tr.form.privacy}</p>
                  </div>
                )}

                <div className="jv-form-actions">
                  {step > 0 && (
                    <button
                      type="button"
                      className="jv-form-back"
                      onClick={() => setStep(step - 1)}
                    >
                      ← {tr.form.back}
                    </button>
                  )}
                  {step < 2 ? (
                    <button
                      type="button"
                      className="jv-form-next"
                      disabled={!canNext}
                      onClick={() => setStep(step + 1)}
                    >
                      {tr.form.continue} →
                    </button>
                  ) : (
                    <button type="submit" className="jv-form-submit" disabled={loading}>
                      {loading ? (lang === "en" ? "Sending…" : "Enviando…") : tr.form.submit}
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
