import { SectionTitle } from "@/components/site/section-title";
import { Timeline } from "@/components/site/timeline";

const steps = [
  {
    title: "Create your message",
    description: "Write it yourself or let AI craft the perfect note for the occasion.",
  },
  {
    title: "Choose a future date",
    description: "Pick the exact date and time you want it to arrive — today or years from now.",
  },
  {
    title: "FutureSend delivers automatically",
    description: "Relax. We send it across the right platform at exactly the right moment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="How it works" title="Three steps to never miss a moment" description="Set it once and FutureSend handles the rest — automatically, reliably, on time." />
        <div className="mt-14">
          <Timeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
