import type { Metadata } from "next";
import { Phone, Share2 } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact — FutureSend",
  description: "Have questions about FutureSend or want to collaborate? Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-secondary to-background" />
          <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 text-center sm:px-8 lg:pt-40">
            <Reveal className="flex flex-col items-center gap-5">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-7xl">Let&apos;s Connect</h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">Have questions about FutureSend or want to collaborate? Send a message and we&apos;ll be in touch.</p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-lg shadow-primary/5 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="tel:+15164049720" className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary">
              <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-primary">
                <Phone className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="font-medium">516-404-9720</span>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ethan-ramolia-795b85419/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary">
              <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-primary">
                <Share2 className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-muted-foreground">LinkedIn</span>
                <span className="font-medium">Connect with me</span>
              </span>
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
