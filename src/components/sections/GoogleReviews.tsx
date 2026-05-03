import { AnimateIn } from "@/components/common";
import { Star } from "lucide-react";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "María González",
    avatar: "MG",
    rating: 5,
    date: "hace 2 semanas",
    text: "Increíble trabajo. En menos de un mes ya teníamos leads llegando solos. No es solo una web bonita, es una máquina de captar clientes. Totalmente recomendado.",
  },
  {
    name: "Carlos Mendoza",
    avatar: "CM",
    rating: 5,
    date: "hace 1 mes",
    text: "Llevaba años con una web que no convertía nada. Desde que trabajamos con ellos, nuestra agenda de consultas se llenó en las primeras dos semanas. Resultados reales.",
  },
  {
    name: "Andrea Ruiz",
    avatar: "AR",
    rating: 5,
    date: "hace 2 meses",
    text: "Profesionales de verdad. Entendieron mi negocio desde el primer día y diseñaron algo que habla exactamente a mis clientes ideales. El formulario de contacto no para de sonar.",
  },
  {
    name: "Roberto Sánchez",
    avatar: "RS",
    rating: 5,
    date: "hace 3 meses",
    text: "La inversión se recuperó en el primer mes. Antes dependía 100% de referidos, ahora tengo clientes nuevos entrando cada semana de forma automática.",
  },
  {
    name: "Laura Jiménez",
    avatar: "LJ",
    rating: 5,
    date: "hace 3 meses",
    text: "Más que diseñadores, son estrategas. Me ayudaron a entender quién es mi cliente ideal y construyeron toda la web alrededor de eso. Los resultados son notables.",
  },
  {
    name: "Diego Morales",
    avatar: "DM",
    rating: 5,
    date: "hace 4 meses",
    text: "Rápidos, profesionales y con mucho criterio. Cada decisión de diseño tiene una razón detrás. No solo hacen webs, construyen sistemas que trabajan por ti.",
  },
];

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-cyan-500",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#FBBC04] text-[#FBBC04]" : "text-muted-foreground"}
        />
      ))}
    </div>
  );
}

// Logo de Google en SVG para mantener colores oficiales
function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function GoogleReviews() {
  const totalReviews = reviews.length;
  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
  ).toFixed(1);

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <AnimateIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <GoogleLogo />
            <span className="text-sm font-medium text-muted-foreground">
              Google Reviews
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-foreground">
              {avgRating}
            </span>
            <StarRating rating={5} />
            <span className="text-sm text-muted-foreground">
              Basado en {totalReviews} reseñas verificadas
            </span>
          </div>
        </AnimateIn>

        {/* Grid de reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <AnimateIn key={review.name} delay={i * 0.08}>
              <div className="bg-background rounded-xl border border-border p-5 flex flex-col gap-4 hover:shadow-md transition-shadow h-full">
                {/* Header de la reseña */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                    >
                      {review.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground leading-tight">
                        {review.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>

                {/* Estrellas */}
                <StarRating rating={review.rating} />

                {/* Texto */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
