
import { CheckCircle, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="font-sans">
      <section className="relative overflow-hidden min-h-[45vh] flex items-center justify-between py-8 bg-white">
        {/* Background image using a gradient instead of the unavailable image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 bg-cover bg-center bg-no-repeat opacity-100"></div>
        
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side content */}
            <div className={isMobile ? "text-center" : ""}>
              <h1 className={`font-bold text-3xl md:text-4xl mb-4 text-[#0367A6] leading-tight font-sans ${isMobile ? "mx-auto" : ""}`}>
                Maîtrisez l'anglais et faites décoller votre carrière
                <span className="inline-block text-[#F3AE02]">
                  Formation Certifiante
                </span>
              </h1>
              <p className={`text-lg md:text-xl text-black mb-6 font-sans ${isMobile ? "mx-auto" : ""}`}>
                Professionnel, particulier ou en reconversion : ne laissez plus l'anglais freiner votre carrière, vos voyages ou vos projets.
              </p>
              <div className={isMobile ? "flex justify-center" : ""}>
                <button
                  onClick={scrollToForm}
                  className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#F3AE02] text-white hover:bg-[#0367A6] hover:text-white transition-colors hover-scale animate-fade-in"
                >
                  Télécharger la brochure
                </button>
              </div>
              <div className={`flex flex-col ${isMobile ? "items-center" : "items-start"} gap-3 mt-6`}>
                <div className="flex items-center text-gray-800 font-medium gap-2">
                  <CheckCircle size={22} className="text-green-500" /> 
                  <span className="text-gray-900">Financement CPF</span>
                </div>
                <div className="flex items-center text-gray-800 font-medium gap-2">
                  <CheckCircle size={22} className="text-green-500" /> 
                  <span className="text-gray-900">Formation 100% adaptée à vos besoins</span>
                </div>
              </div>
              
              <div className={`mt-6 ${isMobile ? "flex justify-center" : ""}`}>
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-6 py-3 rounded-xl shadow">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < 4 ? "#FABC05" : "#FABC05"}
                        className={i < 4 ? "text-[#FABC05]" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">4.7/5 sur Google</span>
                </div>
              </div>
            </div>
            
            {/* Image section - width adjusted to match form width */}
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/d322419d-1352-435c-8c86-6fcef3afafd4.png" 
                alt="Personne suivant une formation d'anglais en ligne" 
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
