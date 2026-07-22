import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Phone, Share2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";

export const metadata: Metadata = {
  title: "About the Creator — FutureSend",
  description: "The story behind FutureSend and the student-creator building a smarter way to schedule messages.",
};

const evolution = ["Cross-platform", "AI-powered", "Email support", "Smart templates", "Future innovation"];

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-secondary to-background" />
          <div className="mx-auto max-w-5xl px-5 pb-12 pt-32 sm:px-8 lg:pt-40">
            <Reveal className="flex flex-col items-center gap-8 text-center">
              <div className="relative size-36 overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg sm:size-72">
                <Image src="/images/ethanRamolia.jpg" alt="Profile picture of the creator of FutureSend" fill className="object-cover" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="size-4" />
                About the Creator
              </span>
              <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Ethan Ramolia</h1>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-8 lg:pb-28">
          <Reveal className="flex flex-col gap-6 text-xl leading-relaxed text-muted-foreground">
            <p>I am a motivated and responsible rising senior at Herricks High School with a strong interest in history and innovation.</p>
            <p>Through my experience as a dental assistant, volunteer work in the community, and participation on my school&apos;s tennis and cross-country teams, I have developed leadership, teamwork, and communication skills.</p>
            <p>I enjoy identifying real-world problems and creating practical solutions. FutureSend started as an idea to allow people to schedule important messages in advance.</p>
            <p> Back in 2024, I had what I thought was a simple idea: what if you could write a text today, but have it delivered exactly when it mattered most?</p>
            <p>Apparently, Apple was listening. Shortly after forming _______ Apple introduced Send Later with iOS 18, giving iPhone users the ability to schedule iMessages.</p>
            <p>While it was fun to see such a similar idea become a native feature, it also reinforced something important: the need for thoughtful, time-based communication is real.</p>
            <p>Instead of stopping there, I decided to take the concept much further.</p>
            <p>Rather than simply scheduling a message, I began building a platform centered around meaningful future communication, one that helps people deliver messages, memories, milestones, and moments exactly when they're meant to be received.</p>
            <p>Sometimes the best validation isn't being first, it's realizing the world is moving in the same direction you envisioned. The difference is what you build next.</p>
            <p>And that's exactly what we're doing with FutureSend.</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {evolution.map((item) => (
              <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Contact Info</h2>
              <div className="flex flex-col gap-4">
                <a href="tel:+15164049720" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Phone className="size-5" />
                  </span>
                  516-404-9720
                </a>
                <a href="mailto:ethanramolia@gmail.com" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Mail className="size-5" />
                  </span>
                  ethanramolia@gmail.com
                </a>
              </div>
              <CTAButton href="https://www.linkedin.com/in/ethan-ramolia-795b85419/" variant="secondary" className="w-fit">
                <Share2 className="size-4" />
                Connect on LinkedIn
              </CTAButton>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
