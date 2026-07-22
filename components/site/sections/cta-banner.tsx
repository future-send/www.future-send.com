import { CTAButton } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";

export function CTABanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 lg:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">Ready to start scheduling smarter?</h2>
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">Join the people who never miss a birthday, a follow-up, or a moment that matters.</p>
            <CTAButton href="/contact" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Get Started
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
