
import { CheckCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="font-sans">
      <section className="relative overflow-hidden py-16 bg-[#F5F7FF]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side content */}
            <div>
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#2463EB] leading-tight">
                Maîtrisez l'anglais et faites décoller votre carrière
                <br />
                <span className="text-[#F87315] block mt-2">
                  Formation Certifiante
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-xl">
                Professionnel, particulier ou en reconversion : ne laissez plus l'anglais freiner votre carrière, vos voyages ou vos projets.
              </p>
              <a
                href="#lead-form"
                className="inline-block px-10 py-4 font-medium text-lg rounded-lg bg-[#F87315] text-white hover:bg-[#e06a13] transition-colors"
              >
                Télécharger la brochure
              </a>
              <div className="flex flex-col items-start gap-5 mt-10">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500" /> 
                  <span className="text-gray-800 font-medium">Financement CPF</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500" /> 
                  <span className="text-gray-800 font-medium">Formation 100% adaptée à vos besoins</span>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill="#FABC05"
                        className="text-[#FABC05]" 
                      />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">4.7/5 sur Google</span>
                </div>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="hidden md:block relative">
              <img 
                src="/lovable-uploads/654f2a3b-05ee-4826-a0ad-da772db1313f.png" 
                alt="Femme suivant une formation d'anglais en ligne" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
