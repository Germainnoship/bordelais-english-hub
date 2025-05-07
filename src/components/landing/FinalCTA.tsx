
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Prêt à faire décoller votre carrière ?
        </h2>
        <p className="text-gray-600 mb-8">
          Commencez dès maintenant votre parcours vers la maîtrise de l'anglais.
        </p>
        <Button 
          size="lg"
          onClick={scrollToForm}
          className="cta-button bg-[#F3AE02] hover:bg-[#0367A6] hover:text-white rounded-lg"
        >
          Je commence ma formation
        </Button>
      </div>
    </section>
  );
}
