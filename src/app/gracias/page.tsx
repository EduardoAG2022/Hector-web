import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Calendar, ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/common";

export const metadata: Metadata = {
  title: "¡Solicitud recibida!",
  description: "Gracias por contactarnos. Te contactaremos pronto.",
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-lg w-full text-center flex flex-col items-center gap-6">
        {/* Icono de confirmación */}
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 size={40} className="text-primary" />
        </div>

        {/* Mensaje principal */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¡Solicitud recibida!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gracias por dar el primer paso. Estamos revisando tu información y{" "}
            <span className="text-foreground font-medium">
              nos pondremos en contacto contigo en las próximas 24 horas
            </span>{" "}
            para realizar el diseño de tu sistema de captación.
          </p>
        </div>

        {/* Qué esperar */}
        <div className="w-full bg-muted/40 border border-border rounded-xl p-6 text-left flex flex-col gap-4">
          <p className="text-sm font-semibold text-foreground">¿Qué sigue?</p>
          <ul className="flex flex-col gap-3">
            {[
              {
                icon: Calendar,
                text: "Recibirás un correo con la confirmación y un enlace para agendar tu llamada.",
              },
              {
                icon: CheckCircle2,
                text: "En la llamada analizaremos tu negocio y te presentaremos una propuesta personalizada.",
              },
              {
                icon: CheckCircle2,
                text: "Si todo encaja, arrancamos el diseño de tu sistema. Sin burocracia.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <LinkButton href="/" variant="outline" className="gap-2 flex-1 justify-center">
            <ArrowLeft size={16} />
            Volver al inicio
          </LinkButton>
          <LinkButton href="#" className="flex-1 justify-center">
            Ver nuestros casos de éxito
          </LinkButton>
        </div>

        <p className="text-xs text-muted-foreground">
          ¿Tienes alguna duda?{" "}
          <Link
            href="mailto:hola@mimarca.com"
            className="text-primary hover:underline"
          >
            hola@mimarca.com
          </Link>
        </p>
      </div>
    </main>
  );
}
