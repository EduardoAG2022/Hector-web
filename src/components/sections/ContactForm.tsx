"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  "Salud y bienestar",
  "Educación y formación",
  "Consultoría y servicios profesionales",
  "Inmobiliaria",
  "E-commerce y retail",
  "Restaurantes y gastronomía",
  "Tecnología y software",
  "Construcción y arquitectura",
  "Moda y belleza",
  "Finanzas y seguros",
  "Marketing y publicidad",
  "Otra industria",
];

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} <span className="text-destructive">*</span>
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  industria: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  industria?: string;
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!data.correo.trim()) {
    errors.correo = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
    errors.correo = "Ingresa un correo válido.";
  }
  if (!data.telefono.trim()) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.telefono)) {
    errors.telefono = "Ingresa un teléfono válido.";
  }
  if (!data.industria) errors.industria = "Selecciona tu industria.";
  return errors;
}

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    telefono: "",
    industria: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error ?? "Error al enviar. Intenta de nuevo.");
        return;
      }

      router.push("/gracias");
    } catch {
      setServerError("No se pudo conectar. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Texto izquierdo */}
          <div className="flex flex-col gap-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Agenda tu llamada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Reserva una llamada para{" "}
              <span className="text-primary">conocer tu proyecto</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En 30 minutos analizamos tu negocio, tu audiencia y tu
              competencia. Sin compromiso. Al final sabrás exactamente qué
              necesitas para captar más clientes.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              {[
                "Diagnóstico gratuito de tu situación actual",
                "Propuesta personalizada para tu industria",
                "Sin tecnicismos — solo resultados concretos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <div className="bg-background rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <Field id="nombre" label="Nombre completo" error={errors.nombre}>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  placeholder="Juan García"
                  value={form.nombre}
                  onChange={handleChange}
                  className={cn(inputClass, errors.nombre && "border-destructive focus:border-destructive")}
                />
              </Field>

              <Field id="correo" label="Correo electrónico" error={errors.correo}>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  placeholder="juan@empresa.com"
                  value={form.correo}
                  onChange={handleChange}
                  className={cn(inputClass, errors.correo && "border-destructive focus:border-destructive")}
                />
              </Field>

              <Field id="telefono" label="Teléfono" error={errors.telefono}>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+34 600 000 000"
                  value={form.telefono}
                  onChange={handleChange}
                  className={cn(inputClass, errors.telefono && "border-destructive focus:border-destructive")}
                />
              </Field>

              <Field id="industria" label="Industria" error={errors.industria}>
                <select
                  id="industria"
                  name="industria"
                  value={form.industria}
                  onChange={handleChange}
                  className={cn(
                    inputClass,
                    "cursor-pointer",
                    !form.industria && "text-muted-foreground",
                    errors.industria && "border-destructive focus:border-destructive"
                  )}
                >
                  <option value="" disabled>
                    Selecciona tu industria
                  </option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind} className="text-foreground">
                      {ind}
                    </option>
                  ))}
                </select>
              </Field>

              {serverError && (
                <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2.5">
                  <AlertCircle size={15} className="text-destructive mt-0.5 shrink-0" />
                  <p className="text-xs text-destructive">{serverError}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 gap-2 mt-1"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Reservar mi llamada gratuita
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Sin spam. Tu información está segura y nunca se comparte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
