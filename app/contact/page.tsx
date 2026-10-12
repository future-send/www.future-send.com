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
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
