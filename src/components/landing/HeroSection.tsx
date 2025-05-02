
import { CheckCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[45vh] flex items-center justify-between px-6 py-12 bg-white font-sans">
      {/* Left side content */}
      <div className="z-10 max-w-xl">
        <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#2463EB] leading-tight font-sans text-left">
          Maîtrisez l'anglais et faites décoller votre carrière<br className="hidden md:inline" />
          <span className="inline-block text-[#F87315]">
            Formation Certifiante
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans text-left">
          Professionnel, particulier ou en reconversion : ne laissez plus l'anglais freiner votre carrière, vos voyages ou vos projets.
        </p>
        <a
          href="#lead-form"
          className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#F87315] text-white hover:bg-[#2463EB] hover:text-white transition-colors hover-scale animate-fade-in text-left"
        >
          Télécharger la brochure
        </a>
        <div className="flex flex-col items-start gap-4 mt-8">
          <div className="flex items-center text-gray-800 font-medium gap-2">
            <CheckCircle size={22} className="text-green-500" /> 
            <span className="text-gray-900">Financement CPF</span>
          </div>
          <div className="flex items-center text-gray-800 font-medium gap-2">
            <CheckCircle size={22} className="text-green-500" /> 
            <span className="text-gray-900">Formation 100% adaptée à vos besoins</span>
          </div>
        </div>
        
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
      </div>
      
      {/* Right side image */}
      <div className="hidden md:block w-1/2 h-full absolute right-0 top-0 bottom-0">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/959cb640-5c82-4c63-9512-bfe699d31f8d.png')] bg-cover bg-center opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/95"></div>
      </div>
      
      {/* Background image for mobile only */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[url('public/lovable-uploads/959cb640-5c82-4c63-9512-bfe699d31f8d.png')] bg-cover bg-center md:hidden"></div>
    </section>
  );
}
