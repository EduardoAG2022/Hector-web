"use client";

import { useState, useRef } from "react";
import type { Lang } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  Marquee,
  Stats,
  Features,
  BeforeAfter,
  ValueProp,
  Calculator,
  ServiceMap,
  GoogleReviews,
  CTA,
  ContactForm,
  StickyMobileCTA,
} from "@/components/sections";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar lang={lang} setLang={setLang} onQuote={scrollToContact} />

      <main>
        <Hero lang={lang} onQuote={scrollToContact} />
        <Marquee />
        <Stats lang={lang} />
        <Features lang={lang} onQuote={scrollToContact} />
        <BeforeAfter lang={lang} />
        <ValueProp lang={lang} />
        <Calculator lang={lang} onQuote={scrollToContact} />
        <ServiceMap lang={lang} />
        <GoogleReviews lang={lang} />
        <CTA lang={lang} />
        <div ref={contactRef}>
          <ContactForm lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <StickyMobileCTA lang={lang} onQuote={scrollToContact} />
    </>
  );
}
