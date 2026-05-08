// ─────────────────────────────────────────────────────────────
// JV PATIOS & STONEWORK — Site Configuration
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "JV Patios & Stonework LLC",
  short: "JV Patios",
  phone1: "(443) 758-5158",
  phone1Tel: "4437585158",
  phone2: "(410) 570-4127",
  phone2Tel: "4105704127",
  whatsapp: "14437585158",
  email: "jv.patiostonework@gmail.com",
  address: "Annapolis, MD 21403",
  radius: 40,
  yearsExp: 20,
  hours: {
    en: {
      weekday: "Mon–Fri · 7:00 AM – 5:00 PM",
      weekend: "Saturday · 8:00 AM – 3:00 PM",
      sunday: "Sunday · Closed",
    },
    es: {
      weekday: "Lun–Vie · 7:00 AM – 5:00 PM",
      weekend: "Sábado · 8:00 AM – 3:00 PM",
      sunday: "Domingo · Cerrado",
    },
  },
} as const;

export const cities = [
  { name: "Annapolis", x: 50, y: 50, hq: true, dist: 0 },
  { name: "Baltimore", x: 35, y: 22, dist: 28 },
  { name: "Washington D.C.", x: 18, y: 60, dist: 30 },
  { name: "Bowie", x: 30, y: 56, dist: 18 },
  { name: "Severna Park", x: 46, y: 38, dist: 8 },
  { name: "Crofton", x: 36, y: 48, dist: 13 },
  { name: "Easton", x: 76, y: 70, dist: 28 },
  { name: "Glen Burnie", x: 39, y: 30, dist: 16 },
  { name: "Edgewater", x: 49, y: 56, dist: 5 },
  { name: "Kent Island", x: 64, y: 50, dist: 14 },
  { name: "Pasadena", x: 44, y: 30, dist: 14 },
  { name: "Bay Bridge", x: 60, y: 48, dist: 9 },
] as const;

export const services = {
  en: [
    { id: "patios", name: "Patios & Pavers", desc: "Custom paver patios built to last decades. Belgard, Techo-Bloc, natural stone.", price: { min: 12, max: 28, unit: "per sq ft" } },
    { id: "walls", name: "Retaining Walls", desc: "Engineered walls that hold the slope and look like they grew from the earth.", price: { min: 35, max: 65, unit: "per face ft" } },
    { id: "stonework", name: "Stonework", desc: "Hand-laid stone veneer, chimneys, fire pits, columns. Old-world craft.", price: { min: 40, max: 90, unit: "per sq ft" } },
    { id: "landscaping", name: "Landscaping", desc: "Full-service design, planting, sod, mulch, irrigation. Year-round beauty.", price: { min: 4, max: 12, unit: "per sq ft" } },
    { id: "walkways", name: "Walkways & Sidewalks", desc: "Flagstone, paver, or stamped concrete paths from curb to door.", price: { min: 14, max: 32, unit: "per sq ft" } },
    { id: "maintenance", name: "Maintenance", desc: "Mowing, trimming, mulching, seasonal cleanups, snow removal in winter.", price: { min: 60, max: 220, unit: "per visit" } },
  ],
  es: [
    { id: "patios", name: "Patios y Adoquines", desc: "Patios de adoquín hechos a medida que duran décadas. Belgard, Techo-Bloc, piedra natural.", price: { min: 12, max: 28, unit: "por pie²" } },
    { id: "walls", name: "Muros de Contención", desc: "Muros diseñados para sostener la pendiente y verse como si crecieran de la tierra.", price: { min: 35, max: 65, unit: "por pie lineal" } },
    { id: "stonework", name: "Trabajo en Piedra", desc: "Revestimiento de piedra, chimeneas, fogatas, columnas. Oficio del viejo mundo.", price: { min: 40, max: 90, unit: "por pie²" } },
    { id: "landscaping", name: "Paisajismo", desc: "Diseño completo, plantación, césped, mulch, riego. Belleza todo el año.", price: { min: 4, max: 12, unit: "por pie²" } },
    { id: "walkways", name: "Caminos y Aceras", desc: "Caminos de piedra, adoquín o concreto estampado desde la entrada hasta la puerta.", price: { min: 14, max: 32, unit: "por pie²" } },
    { id: "maintenance", name: "Mantenimiento", desc: "Corte, poda, mulch, limpiezas de temporada, remoción de nieve en invierno.", price: { min: 60, max: 220, unit: "por visita" } },
  ],
};

export const images = {
  hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=80",
  patio2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  stone1: "https://images.unsplash.com/photo-1572756091813-d7d80f9d8c81?w=1200&q=80",
  fire: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=1200&q=80",
  worker: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
  landscape1: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
  beforeAfter: [
    {
      before: "/images/projects/antes1.png",
      after: "/images/projects/despues1.jpeg",
      labelEn: "Project by JV Patios & Stonework",
      labelEs: "Proyecto de JV Patios & Stonework",
    },
    {
      before: "/images/projects/antes2.png",
      after: "/images/projects/despues2.jpeg",
      labelEn: "Project by JV Patios & Stonework",
      labelEs: "Proyecto de JV Patios & Stonework",
    },
  ],
} as const;

export const reviews = [
  { name: "Sarah M.", city: "Annapolis, MD", source: "Google", stars: 5, en: "JV transformed our backyard in 9 days. Quote was honest, crew showed up early every morning, and the patio looks better than the renderings. Already booking them for the front walkway.", es: "JV transformó nuestro patio en 9 días. La cotización fue honesta, llegaron temprano cada mañana y el patio se ve mejor que los renders. Ya los contratamos para la entrada principal." },
  { name: "Robert K.", city: "Severna Park, MD", source: "Yelp", stars: 5, en: "Got three quotes for a retaining wall. JV wasn't the cheapest but their portfolio sold us. Two years in — zero settling, zero cracks. These guys actually know stone.", es: "Pedí tres cotizaciones para un muro. JV no era el más barato pero su portafolio nos convenció. Dos años después — cero hundimiento, cero grietas. Saben de piedra." },
  { name: "Elena R.", city: "Edgewater, MD", source: "Google", stars: 5, en: "They speak Spanish — rare here in MD for this level of quality. Impeccable stonework and fire pit. My family never wants to leave the backyard.", es: "Hablan español, cosa rara aquí en MD para este nivel de calidad. Trabajo impecable en el muro de piedra y la fogata. Mi familia ya no quiere salir del patio." },
  { name: "David T.", city: "Bowie, MD", source: "Google", stars: 5, en: "Veteran discount was a nice touch but the work is what won me over. Hand-cut flagstone walkway. Took the time to do it right.", es: "El descuento militar fue lindo pero el trabajo fue lo que me ganó. Camino de piedra cortada a mano. Se tomaron el tiempo de hacerlo bien." },
];

export const stats = {
  en: [
    { n: "850+", l: "Projects Completed" },
    { n: "98%", l: "Satisfaction Rate" },
    { n: "20+", l: "Years of Experience" },
    { n: "40 mi", l: "Service Radius" },
  ],
  es: [
    { n: "850+", l: "Proyectos Completados" },
    { n: "98%", l: "Tasa de Satisfacción" },
    { n: "20+", l: "Años de Experiencia" },
    { n: "40 mi", l: "Radio de Servicio" },
  ],
};

export const faq = {
  en: [
    { q: "How long does a typical patio take?", a: "Most paver patios under 1,000 sq ft take 5–9 working days, weather permitting. We send a daily progress photo so you always know where we stand." },
    { q: "Are you licensed and insured in Maryland?", a: "Yes. Fully MHIC licensed and carry $2M general liability + workers' comp. Certificate available before any deposit." },
    { q: "Do you give free estimates?", a: "Always. On-site estimates are free within our 40-mile radius and never come with high-pressure sales. We measure, talk options, and email a clean proposal within 48 hours." },
    { q: "Do you offer financing?", a: "Yes, through partner lenders. Most projects qualify for 0% APR for 12 months on approved credit. We'll walk you through it." },
    { q: "What's your warranty?", a: "5 years on hardscape installation, full manufacturer warranty on materials (often 25–lifetime on pavers). We come back for any settling or workmanship issue." },
  ],
  es: [
    { q: "¿Cuánto tarda un patio típico?", a: "La mayoría de patios de adoquín de menos de 1,000 pies² toman 5–9 días hábiles, si el clima ayuda. Enviamos foto de progreso diaria para que siempre sepas cómo va." },
    { q: "¿Están licenciados y asegurados en Maryland?", a: "Sí. Licencia MHIC completa y seguro de responsabilidad de $2M + workers' comp. Certificado disponible antes de cualquier depósito." },
    { q: "¿Dan estimados gratis?", a: "Siempre. Los estimados en sitio son gratis dentro del radio de 40 millas y sin presión de ventas. Medimos, discutimos opciones y enviamos propuesta por email en 48 horas." },
    { q: "¿Ofrecen financiamiento?", a: "Sí, a través de prestamistas asociados. La mayoría de proyectos califican para 0% APR por 12 meses con crédito aprobado. Te guiamos en el proceso." },
    { q: "¿Cuál es la garantía?", a: "5 años en instalación de hardscape, garantía completa del fabricante en materiales (frecuentemente 25 años a vitalicia en adoquines). Volvemos por cualquier hundimiento o tema de mano de obra." },
  ],
};

export const t = {
  en: {
    nav: { services: "Services", work: "Our Work", area: "Service Area", reviews: "Reviews", contact: "Contact", quote: "Free Quote", call: "Call", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Annapolis · MD · Since 2004",
      cta1: "Get my free quote",
      cta2: "WhatsApp us now",
    },
    sections: {
      services: { eyebrow: "What we build", title: "Six trades. <em>One crew.</em><br/>No subs.", sub: "Every project is run by the same crew that quoted it. No estimator hand-off. No surprises." },
      work: { eyebrow: "Recent work", title: "Drag the slider.<br/><em>See the difference.</em>", sub: "Real Annapolis-area projects. No staging, no filters." },
      why: { eyebrow: "Why JV", title: "There are a lot of contractors.\nFew finish.", sub: "Our crew has been together for over a decade. We don't disappear after the deposit clears." },
      area: { eyebrow: "Service Area", title: "Annapolis &<br/><em>40 miles</em> around.", sub: "Tap a city to see how far we'll travel without a trip charge." },
      calc: { eyebrow: "Instant ballpark", title: "Get a <em>number</em><br/>in 30 seconds.", sub: "A real range built from 850+ completed projects. Final quote always free, on-site, no obligation." },
      reviews: { eyebrow: "What neighbors say", title: "<em>4.9 stars</em> across<br/>200+ reviews." },
      faq: { eyebrow: "Common questions", title: "Answered straight." },
      contact: { eyebrow: "Free quote", title: "Tell us about<br/><em>your project.</em>", sub: "Three quick steps. You'll hear back within one business day." },
    },
    why: [
      { t: "Local hands, not subs", d: "The same five guys who quote your job build it. We've been a crew since 2009." },
      { t: "Honest pricing", d: "Itemized bid. We tell you what would cost less. We tell you what will fail in five years if you cut it." },
      { t: "MHIC licensed & insured", d: "Maryland Home Improvement Commission license. $2M liability + workers' comp." },
      { t: "5-year workmanship warranty", d: "If a paver settles or a wall leans, we come back. No invoice. No drama." },
    ],
    calc: { area: "Project size (sq ft)", service: "Service", surface: "Surface type", est: "Estimated range", note: "*Ballpark only. Final number always comes from an on-site visit. Free. No pressure.", cta: "Lock in this estimate" },
    form: {
      step1: "1 · What are you building?",
      step2: "2 · Where & how big?",
      step3: "3 · How do we reach you?",
      f_name: "Full name", f_email: "Email", f_phone: "Phone", f_address: "Project address (city is fine)", f_size: "Approx. size (sq ft)", f_msg: "Anything we should know? (optional)", f_when: "When do you want to start?",
      when: ["ASAP", "Within 30 days", "Within 90 days", "Just exploring"],
      submit: "Send my quote request",
      success: "Got it. We'll call within 1 business day. Thanks!",
      privacy: "We never sell your info. Used only to quote your project.",
      back: "Back", continue: "Continue",
    },
    sticky: { call: "Call", whatsapp: "WhatsApp", quote: "Free Quote" },
    footer: { tagline: "Built like the old country. Built to outlast the mortgage.", links: "Quick Links", contact: "Contact", hours: "Hours", rights: "© 2026 JV Patios & Stonework LLC. All rights reserved.", crafted: "Maryland Home Improvement Commission Licensed · Fully Insured" },
  },
  es: {
    nav: { services: "Servicios", work: "Trabajos", area: "Área de Servicio", reviews: "Reseñas", contact: "Contacto", quote: "Cotización Gratis", call: "Llamar", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Annapolis · MD · Desde 2004",
      cta1: "Cotización gratis",
      cta2: "Escríbenos por WhatsApp",
    },
    sections: {
      services: { eyebrow: "Qué construimos", title: "Seis oficios. <em>Una cuadrilla.</em><br/>Sin subcontratos.", sub: "Cada proyecto lo dirige la misma cuadrilla que lo cotizó. Sin entregas. Sin sorpresas." },
      work: { eyebrow: "Trabajos recientes", title: "Mueve el deslizador.<br/><em>Mira la diferencia.</em>", sub: "Proyectos reales del área de Annapolis. Sin filtros, sin trucos." },
      why: { eyebrow: "Por qué JV", title: "Hay muchos contratistas.\nPocos terminan.", sub: "Nuestra cuadrilla lleva más de una década junta. No desaparecemos después del depósito." },
      area: { eyebrow: "Área de Servicio", title: "Annapolis y<br/><em>40 millas</em> alrededor.", sub: "Toca una ciudad para ver hasta dónde viajamos sin cargo extra." },
      calc: { eyebrow: "Estimado instantáneo", title: "Tu <em>número</em><br/>en 30 segundos.", sub: "Rango real basado en 850+ proyectos completados. Cotización final siempre gratis, en sitio, sin compromiso." },
      reviews: { eyebrow: "Lo que dicen los vecinos", title: "<em>4.9 estrellas</em> en<br/>200+ reseñas." },
      faq: { eyebrow: "Preguntas comunes", title: "Respuestas directas." },
      contact: { eyebrow: "Cotización gratis", title: "Cuéntanos de<br/><em>tu proyecto.</em>", sub: "Tres pasos rápidos. Te respondemos en un día hábil." },
    },
    why: [
      { t: "Manos locales, no subcontratos", d: "Los mismos cinco hombres que cotizan tu trabajo lo construyen. Somos cuadrilla desde 2009." },
      { t: "Precios honestos", d: "Cotización detallada. Te decimos qué costaría menos. Te decimos qué fallará en cinco años si lo abaratas." },
      { t: "Licencia MHIC y seguro", d: "Licencia de la Comisión de Mejoras del Hogar de Maryland. $2M de responsabilidad + workers' comp." },
      { t: "Garantía de 5 años en mano de obra", d: "Si un adoquín se hunde o un muro se inclina, volvemos. Sin factura. Sin drama." },
    ],
    calc: { area: "Tamaño del proyecto (pie²)", service: "Servicio", surface: "Tipo de superficie", est: "Rango estimado", note: "*Solo aproximado. El número final siempre viene de una visita en sitio. Gratis. Sin presión.", cta: "Asegurar este estimado" },
    form: {
      step1: "1 · ¿Qué vas a construir?",
      step2: "2 · ¿Dónde y qué tamaño?",
      step3: "3 · ¿Cómo te contactamos?",
      f_name: "Nombre completo", f_email: "Email", f_phone: "Teléfono", f_address: "Dirección del proyecto (ciudad está bien)", f_size: "Tamaño aprox. (pie²)", f_msg: "¿Algo que debamos saber? (opcional)", f_when: "¿Cuándo quieres empezar?",
      when: ["Lo antes posible", "En 30 días", "En 90 días", "Solo explorando"],
      submit: "Enviar mi solicitud",
      success: "¡Recibido! Te llamamos en un día hábil. ¡Gracias!",
      privacy: "Nunca vendemos tu info. Solo para cotizar tu proyecto.",
      back: "Atrás", continue: "Continuar",
    },
    sticky: { call: "Llamar", whatsapp: "WhatsApp", quote: "Cotizar" },
    footer: { tagline: "Construido como en el viejo continente. Construido para durar más que la hipoteca.", links: "Enlaces", contact: "Contacto", hours: "Horario", rights: "© 2026 JV Patios & Stonework LLC. Todos los derechos reservados.", crafted: "Licencia MHIC de Maryland · Totalmente Asegurados" },
  },
};

export const siteConfig = {
  name: "JV Patios & Stonework",
  tagline: "Stone, paver & landscape that outlast the mortgage.",
  description: "Hand-laid patios, retaining walls, stonework, and landscaping from a family crew with 20 years in the Chesapeake. Free on-site estimate within 40 miles of Annapolis.",
  url: "https://jvpatios.com",
  email: business.email,
  phone: business.phone1,
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Service Area", href: "#area" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Free Quote", href: "#contact" },
  hero: {
    badge: "MHIC Licensed · 20+ Years · Annapolis MD",
    title: "Stone, paver,",
    highlight: "& landscape",
    description: "Hand-laid patios, walls, and walkways from a family crew with 20 years in the Chesapeake. Free on-site estimate within 40 miles of Annapolis — usually within 48 hours.",
    primaryCta: { label: "Get my free quote", href: "#contact" },
    secondaryCta: { label: "WhatsApp us now", href: `https://wa.me/${business.whatsapp}` },
  },
  cta: {
    title: "Ready to transform your outdoor space?",
    description: "Get a free on-site estimate within 40 miles of Annapolis. No pressure, no commitment. Just honest numbers from the crew that'll build it.",
    primaryCta: { label: "Get my free quote", href: "#contact" },
  },
  footerDescription: "Hand-laid patios, walls, and walkways from a family crew with 20 years in the Chesapeake.",
  footerLinks: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Service Area", href: "#area" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  social: { instagram: "", linkedin: "", facebook: "", twitter: "" },
  og: {
    title: "JV Patios & Stonework — Annapolis MD · 20+ Years",
    description: "Hand-laid patios, retaining walls, stonework, and landscaping. MHIC licensed. Free estimate within 40 miles of Annapolis.",
    image: "/images/og/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type Lang = "en" | "es";
