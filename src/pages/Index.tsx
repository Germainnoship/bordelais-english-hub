
import HeroSection from "@/components/landing/HeroSection";
import FormationsSection from "@/components/landing/FormationsSection";
import LeadForm from "@/components/landing/LeadForm";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import MethodSection from "@/components/landing/MethodSection";
import CPFSection from "@/components/landing/CPFSection";
import Footer from "@/components/landing/Footer";
import LogosSection from "@/components/landing/LogosSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100 font-sans">
      <HeroSection />
      <LogosSection />
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitsSection />
            <LeadForm />
          </div>
          <div className="mt-16">
            <FormationsSection />
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <MethodSection />
      <CPFSection />
      <Footer />
    </main>
  );
};
export default Index;
