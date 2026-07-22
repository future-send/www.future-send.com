import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, align = "center", className }: SectionTitleProps) {
  return (
    <Reveal className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow ? <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-primary">{eyebrow}</span> : null}
      <h2 className=" text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-7xl">{title}</h2>
      {description ? <p className={cn("max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground")}>{description}</p> : null}
    </Reveal>
  );
}
