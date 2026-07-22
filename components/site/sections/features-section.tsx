import { CalendarClock, Globe, Sparkles, Wand2 } from "lucide-react";
import { SectionTitle } from "@/components/site/section-title";
import { FeatureCard } from "@/components/site/feature-card";
import { Reveal } from "@/components/site/reveal";

const features = [
  {
    icon: CalendarClock,
    title: "Schedule Messages",
    description: "Plan messages for any future date and time, down to the minute.",
  },
  {
    icon: Wand2,
    title: "AI Personalization",
    description: "Generate thoughtful, personalized messages in seconds.",
  },
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "Birthdays, holidays, anniversaries, reminders and more.",
  },
  {
    icon: Globe,
    title: "Cross Platform",
    description: "Works across Apple, Android, WhatsApp and Email.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto container px-5 py-20 sm:px-8 lg:py-28">
      <SectionTitle eyebrow="Features" title="Everything you need to send at the perfect moment" description="A complete toolkit for scheduling, personalizing, and delivering messages wherever your people are." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.1} className="h-full">
            <FeatureCard {...feature} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
