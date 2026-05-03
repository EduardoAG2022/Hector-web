import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AnimateIn } from "@/components/common";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  muted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", muted && "bg-muted/30", className)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {(title || subtitle) && (
          <AnimateIn className="text-center mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimateIn>
        )}
        {children}
      </div>
    </section>
  );
}
