
import HeroSection from "@/components/landing/HeroSection";
import FormationsSection from "@/components/landing/FormationsSection";
import LeadForm from "@/components/landing/LeadForm";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import MethodSection from "@/components/landing/MethodSection";
import CPFSection from "@/components/landing/CPFSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100 font-sans">
      <HeroSection />
      <FormationsSection />
      <LeadForm />
      <BenefitsSection />
      <TestimonialsSection />
      <MethodSection />
      <CPFSection />
      <Footer />
    </main>
  );
};
export default Index;
