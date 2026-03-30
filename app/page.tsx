import Header from "@/components/layout/header";
import HeroSlider from "@/components/sections/hero-slider";
import ServicesSection from "@/components/sections/services";
import ApproachSection from "@/components/sections/approach";
import HighlightsSection from "@/components/sections/highlights";
import PartnersSection from "@/components/sections/partners";
import QualitySection from "@/components/sections/quality";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <ServicesSection />
      <ApproachSection />
      <HighlightsSection />
      <PartnersSection />
      <QualitySection />
      <ContactSection />
    </main>
  );
}
