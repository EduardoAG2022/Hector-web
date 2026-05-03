import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/common";
import { AnimateIn } from "@/components/common";

interface CTAProps {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTA({
  title = "¿Listo para empezar?",
  description = "Únete a cientos de clientes que ya confían en nosotros.",
  primaryCta = { label: "Comenzar gratis", href: "#contacto" },
  secondaryCta,
}: CTAProps) {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimateIn className="flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          <p className="text-lg opacity-80 max-w-xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton
              href={primaryCta.href}
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              {primaryCta.label}
              <ArrowRight size={16} />
            </LinkButton>
            {secondaryCta && (
              <LinkButton
                href={secondaryCta.href}
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                {secondaryCta.label}
              </LinkButton>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
