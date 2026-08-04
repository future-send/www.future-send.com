import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("group flex h-full flex-col gap-4 rounded-2xl border border-border bg-primary/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5", className)}>
      <span
        className="flex size-16 items-center justify-center rounded-xl bg-foreground text-primary transition-colors group-hover:bg-primary/70  group-hover:text-foreground 
      group-hover:border-3 group-hover:border-foreground">
        <Icon className="size-12  rounded-xl" />
      </span>
      <h3 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
