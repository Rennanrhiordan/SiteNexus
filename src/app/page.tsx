import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechDifferentialSection } from "@/components/sections/TechDifferentialSection";
import { AIConciergeSection } from "@/components/sections/AIConciergeSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechDifferentialSection />
      <AIConciergeSection />
      <CTASection />
      <Footer />
    </main>
  );
}
