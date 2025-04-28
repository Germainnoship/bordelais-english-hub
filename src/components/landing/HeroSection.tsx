
import { CheckCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-white font-sans">
      <div className="max-w-2xl z-10">
        <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#2463EB] leading-tight font-playfair">
          Maîtrisez l'anglais et faites décoller votre carrière<br className="hidden md:inline" />
          <span className="inline-block text-[#F3AE02]">
            Formation Certifiante
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans">
          Professionnel, particulier ou en reconversion : ne laissez plus l'anglais freiner votre carrière, vos voyages ou vos projets.
        </p>
        <a
          href="#lead-form"
          className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#2463EB] text-white hover:bg-[#F3AE02] hover:text-[#2463EB] transition-colors hover-scale animate-fade-in"
        >
          Télécharger la brochure
        </a>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <div className="flex items-center text-[#2463EB] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Financement CPF
          </div>
          <div className="flex items-center text-[#2463EB] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Formation 100% adaptée à vos besoins
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[url('/lovable-uploads/dc7cb1a9-86e0-4ff7-9e31-940c117f29d6.png')] bg-cover bg-center"></div>
      <div className="mt-8">
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
    </section>
  );
}
