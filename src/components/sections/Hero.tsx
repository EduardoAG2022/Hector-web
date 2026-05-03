"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/common";

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  badge,
  title,
  highlight,
  description,
  primaryCta = { label: "Empezar ahora", href: "#contacto" },
  secondaryCta,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              {badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          {title}{" "}
          {highlight && (
            <span className="text-primary">{highlight}</span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <LinkButton href={primaryCta.href} size="lg" className="gap-2">
            {primaryCta.label}
            <ArrowRight size={16} />
          </LinkButton>

          {secondaryCta && (
            <LinkButton href={secondaryCta.href} size="lg" variant="outline">
              {secondaryCta.label}
            </LinkButton>
          )}
        </motion.div>
      </div>
    </section>
  );
}
