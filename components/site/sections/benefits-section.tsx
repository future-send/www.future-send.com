import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const benefits = ["Birthdays", "Holidays", "Appointments", "Thank-you messages", "Follow-ups", "Business reminders"];

export function BenefitsSection() {
  return (
    <section className="mx-auto container px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg shadow-primary/5">
            <Image src="/images/hero-illustration.png" alt="Illustration of a phone showing a birthday message and calendar reminder with confetti" width={800} height={800} className="h-auto w-full" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-primary bg-foreground px-3 py-1 text-sm font-medium text-primary">Benefits</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Never Forget an Important Moment Again</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">Set your messages ahead of time and show up for the people and moments that matter — automatically.</p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-foreground">
                  <Check className="size-3.5" />
                </span>
                <span className="font-medium text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
