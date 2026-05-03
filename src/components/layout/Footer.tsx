import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  logo?: string;
  description?: string;
  links?: ReadonlyArray<FooterLink>;
  copyright?: string;
}

export function Footer({
  logo = "MiMarca",
  description = "Descripción breve de tu empresa o proyecto.",
  links = [],
  copyright,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <p className="text-xl font-bold text-foreground mb-3">{logo}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {links.length > 0 && (
            <ul className="flex flex-wrap gap-x-8 gap-y-2 content-start">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          {copyright ?? `© ${year} ${logo}. Todos los derechos reservados.`}
        </p>
      </div>
    </footer>
  );
}
