import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StackSection from "@/components/sections/StackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactForm from "@/components/sections/ContactForm";
import ProblemsSection from "@/components/sections/ProblemsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <main className="relative bg-[#090909] min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <UseCasesSection />
      <TestimonialsSection />
      <ProcessSection />
      <StackSection />
      <AboutSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
