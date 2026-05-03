// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL CLIENTE
// Edita este archivo para personalizar cada proyecto nuevo.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identidad ──────────────────────────────────────────────
  name: "MiMarca",
  tagline: "Sistemas de captación de clientes",
  description:
    "Diseñamos sistemas digitales que atraen, califican y convierten visitantes en clientes listos para comprar.",
  url: "https://mimarca.com",

  // ── Contacto ───────────────────────────────────────────────
  email: "hola@mimarca.com",
  phone: "+34 600 000 000",

  // ── Navegación ─────────────────────────────────────────────
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Propuesta", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ],
  navCta: {
    label: "Reservar llamada",
    href: "#contacto",
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    badge: "Sistemas de captación — no solo webs",
    title: "Tu próximo cliente ya te está",
    highlight: "buscando.",
    description:
      "Diseñamos sistemas digitales que atraen, califican y convierten visitantes en clientes listos para comprar. Sin depender de publicidad constante.",
    primaryCta: { label: "Reservar llamada gratuita", href: "#contacto" },
    secondaryCta: { label: "Ver cómo funciona", href: "#nosotros" },
  },

  // ── CTA final ──────────────────────────────────────────────
  cta: {
    title: "¿Tu negocio merece más clientes?",
    description:
      "Agenda una llamada gratuita. En 30 minutos sabrás exactamente qué necesitas.",
    primaryCta: { label: "Reservar llamada gratis", href: "#contacto" },
  },

  // ── Footer ─────────────────────────────────────────────────
  footerDescription:
    "Sistemas de captación de clientes para negocios que quieren crecer de forma predecible.",
  footerLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Propuesta", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Privacidad", href: "#" },
  ],

  // ── Redes sociales (opcional) ──────────────────────────────
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
  },

  // ── SEO / Open Graph ───────────────────────────────────────
  og: {
    title: "MiMarca — Sistemas de captación de clientes",
    description:
      "No construimos webs. Construimos sistemas que llenan tu agenda con clientes calificados.",
    image: "/images/og/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
