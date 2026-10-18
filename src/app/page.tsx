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
    <main className="relative bg-[#090909] min-h-screen max-md:flex max-md:flex-col">
      <Navbar />
      <div className="max-md:order-1"><HeroSection /></div>
      <div className="max-md:order-2"><ProblemsSection /></div>
      <div className="max-md:order-5"><ServicesSection /></div>
      <div className="max-md:order-6"><PricingSection /></div>
      <div className="max-md:order-3"><PortfolioSection /></div>
      <div className="max-md:order-9"><UseCasesSection /></div>
      <div className="max-md:order-4"><TestimonialsSection /></div>
      <div className="max-md:order-7"><ProcessSection /></div>
      <div className="max-md:order-10"><StackSection /></div>
      <div className="max-md:order-8"><AboutSection /></div>
      <div className="max-md:order-11"><FaqSection /></div>
      <div className="max-md:order-12"><ContactForm /></div>
      <div className="max-md:order-[13]"><Footer /></div>
    </main>
  );
}
