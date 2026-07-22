"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CTAButton } from "@/components/site/cta-button";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-secondary to-background" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid container items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-60">
        <div className="flex flex-col items-start gap-7">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            AI-powered message scheduling
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }} className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            The Smarter Way to Schedule Your Messages.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease }} className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            FutureSend lets you schedule messages across Apple, Android, WhatsApp, and Email while using AI to personalize every message.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18, ease }} className="flex flex-col gap-3 sm:flex-row">
            <div>
              <CTAButton href="#" variant="secondary" size="lg">
                Available August 31 <ArrowRight className="size-4" />
              </CTAButton>
            </div>

            <div className="md:flex items-center gap-4">
              <Link href="/">
                <img src="/images/iphone.svg" alt="Download on the App Store" className="h-12" />
              </Link>

              <Link href="/">
                <img src="/images/android.svg" alt="Get it on Google Play" className="h-12" />
              </Link>
            </div>
          </motion.div>
          {/* <div>
            <CTAButton href="#how-it-works" variant="secondary" size="lg">
              Learn More <ArrowRight className="size-4" />
            </CTAButton>
          </div> */}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }} className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image src="/images/phone.jpg" alt="Illustration of a smartphone scheduling personalized messages across messaging apps, email, and a calendar with an AI sparkle" width={900} height={900} priority className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
