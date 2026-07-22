import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/sections/hero";
import { FeaturesSection } from "@/components/site/sections/features-section";
import { HowItWorks } from "@/components/site/sections/how-it-works";
import { BenefitsSection } from "@/components/site/sections/benefits-section";
import { CTABanner } from "@/components/site/sections/cta-banner";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorks />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
