import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "lg";

interface CTAButtonProps extends ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
}

const base = "inline-flex items-center justify-center gap-2 rounded-md font-heading uppercase  font-bold whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/40 active:translate-y-px [&_svg]:size-[1.1em]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-foreground shadow-sm shadow-primary/20 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25",
  secondary: "border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/30",
  ghost: "text-foreground hover:text-primary",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function CTAButton({ variant = "primary", size = "default", className, ...props }: CTAButtonProps) {
  return <Link className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
