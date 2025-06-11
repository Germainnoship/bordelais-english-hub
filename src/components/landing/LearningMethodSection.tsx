
import { Check, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

export default function LearningMethodSection() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const scrollToForm = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on the home page, scroll to form
      const form = document.getElementById('lead-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to home page with a hash to scroll to form
      navigate('/#lead-form');
      // Add a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        const form = document.getElementById('lead-form');
        if (form) {
          form.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  const methods = {
    classic: [
      "Cours théoriques sans mise en pratique",
      "Même contenu pour tout le monde",
      "Peur du jugement collectif",
      "Progression lente et peu motivante",
      "Apprentissage sur les règles sans contexte réel",
      "Pas de suivi personnalisé"
    ],
    languesFaciles: [
      "Apprendre à parler, comprendre et se faire comprendre rapidement",
      "Programme personnalisé selon votre niveau et vos objectifs",
      "Cours individuels, bienveillants, sans pression",
      "Résultats visibles dès les premières semaines",
      "Apprentissage grâce à des mises en situation concrètes",
      "Accompagnement individualisé et suivi de la progression"
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Changez de méthode. Changez vos résultats.
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Méthode classique */}
            <div className="bg-white/90 backdrop-blur p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                Méthode classique
              </h3>
              <div className="space-y-4">
                {methods.classic.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                    <span className="text-gray-600">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues Faciles */}
            <div className="bg-white p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-[#0367A6] text-center">
                Méthode Langues Faciles
              </h3>
              <div className="space-y-4">
                {methods.languesFaciles.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                    <span className="text-gray-600">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToForm}
              className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#F3AE02] text-white hover:bg-[#0367A6] hover:text-white transition-colors animate-fade-in text-center"
            >
              Je découvre ma formation idéale
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
