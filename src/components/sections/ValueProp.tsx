import { AnimateIn } from "@/components/common";
import { TrendingUp, Target, Users, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    before: "Una web bonita",
    after: "Un sistema que atrae clientes ideales",
  },
  {
    icon: TrendingUp,
    before: "Páginas estáticas",
    after: "Embudos de conversión activos 24/7",
  },
  {
    icon: Users,
    before: "Visitas sin rumbo",
    after: "Prospectos calificados que agendan contigo",
  },
  {
    icon: BarChart3,
    before: "Diseño sin métricas",
    after: "Resultados medibles desde el día uno",
  },
];

export function ValueProp() {
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <AnimateIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nuestra propuesta de valor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            No construimos webs.{" "}
            <span className="text-primary">
              Construimos sistemas de captación de clientes.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto que entregamos está diseñado con un único objetivo:
            convertir visitantes desconocidos en clientes que confían en ti y
            quieren trabajar contigo.
          </p>
        </AnimateIn>

        {/* Comparativa antes / después */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={item.before} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground line-through">
                      {item.before}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {item.after}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Declaración central */}
        <AnimateIn>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed max-w-3xl mx-auto">
              &ldquo;Tu web no existe para verse bien. Existe para{" "}
              <span className="text-primary">generar conversaciones</span>,{" "}
              <span className="text-primary">calificar prospectos</span> y{" "}
              <span className="text-primary">llenar tu agenda</span> con
              clientes que ya quieren lo que ofreces.&rdquo;
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
