import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/common";
import { Section } from "./Section";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export function Features({
  title = "¿Por qué elegirnos?",
  subtitle,
  features,
}: FeaturesProps) {
  return (
    <Section id="servicios" title={title} subtitle={subtitle} muted>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <AnimateIn key={feature.title} delay={i * 0.1}>
              <Card className="h-full border border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
          );
        })}
      </div>
    </Section>
  );
}
