
import HeroSection from "@/components/landing/HeroSection";
import FormationsSection from "@/components/landing/FormationsSection";
import LeadForm from "@/components/landing/LeadForm";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import MethodSection from "@/components/landing/MethodSection";
import CPFSection from "@/components/landing/CPFSection";
import Footer from "@/components/landing/Footer";
import LogosSection from "@/components/landing/LogosSection";
import LearningMethodSection from "@/components/landing/LearningMethodSection";
import StatsBanner from "@/components/landing/StatsBanner";
import TrainersSection from "@/components/landing/TrainersSection";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100 font-sans">
      <HeroSection />
      <LogosSection />
      <section className="bg-white pt-8">
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
      <LearningMethodSection />
      <div className="w-full bg-[#2463EB] text-white py-10 rounded-lg mx-4 my-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto p-6">
            Trouvez la formation adaptée à vos besoins, à vos objectifs et à votre rythme
          </h2>
        </div>
      </div>
      <TestimonialsSection />
      <StatsBanner />
      <MethodSection />
      <TrainersSection />
      <CPFSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default Index;
