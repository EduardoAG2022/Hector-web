import { siteConfig } from "@/config/site";
import { Navbar, Footer } from "@/components/layout";
import { Hero, Features, ValueProp, ContactForm, GoogleReviews, CTA } from "@/components/sections";
import { Zap, Shield, BarChart3, Globe, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rápido y eficiente",
    description:
      "Optimizado para ofrecer el mejor rendimiento y una experiencia de usuario fluida desde el primer momento.",
  },
  {
    icon: Shield,
    title: "Seguro y confiable",
    description:
      "Tu información está protegida con los más altos estándares de seguridad del mercado.",
  },
  {
    icon: BarChart3,
    title: "Analíticas en tiempo real",
    description:
      "Toma decisiones informadas con datos actualizados y reportes detallados a tu alcance.",
  },
  {
    icon: Globe,
    title: "Alcance global",
    description:
      "Llega a clientes en cualquier parte del mundo con nuestra infraestructura distribuida.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Un equipo dedicado disponible en todo momento para resolver tus dudas y problemas.",
  },
  {
    icon: Rocket,
    title: "Listo para escalar",
    description:
      "Crece sin límites. Nuestra plataforma se adapta a las necesidades de tu negocio.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar
        logo={siteConfig.name}
        links={siteConfig.navLinks}
        ctaLabel={siteConfig.navCta.label}
        ctaHref={siteConfig.navCta.href}
      />

      <main className="flex-1">
        <Hero {...siteConfig.hero} />

        <ValueProp />

        <Features
          title="Todo lo que incluye tu sistema"
          subtitle="Cada entrega está diseñada para funcionar como un equipo de ventas que trabaja las 24 horas."
          features={features}
        />

        <ContactForm />

        <GoogleReviews />

        <CTA {...siteConfig.cta} />
      </main>

      <Footer
        logo={siteConfig.name}
        description={siteConfig.footerDescription}
        links={siteConfig.footerLinks}
      />
    </>
  );
}
