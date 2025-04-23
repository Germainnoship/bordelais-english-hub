
import { CheckCircle } from "lucide-react";

// On s'assure d'utiliser la police "Inter" dans le titre et sous-titre grâce à Tailwind.
export default function HeroSection() {
  return (
    <section className="relative w-full py-14 bg-white font-sans">
      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Texte à gauche */}
        <div className="flex-1 text-left">
          <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#0367A6] leading-tight font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            Maîtrisez l’anglais et faites décoller votre carrière<br />
            <span className="inline-block text-[#F3AE02]">
              Formation Certifiante
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professionnel, particulier ou en reconversion : ne laissez plus l’anglais freiner votre carrière, vos voyages ou vos projets.
          </p>
          <a
            href="#lead-form"
            className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#0367A6] text-white hover:bg-[#F3AE02] hover:text-[#0367A6] transition-colors animate-fade-in"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Boostez votre anglais
          </a>
          <div className="flex flex-col md:flex-row gap-3 mt-8">
            <div className="flex items-center text-[#0367A6] font-medium gap-2 text-base">
              <CheckCircle size={22} className="text-green-600" /> Financement CPF
            </div>
            <div className="flex items-center text-[#0367A6] font-medium gap-2 text-base">
              <CheckCircle size={22} className="text-green-600" /> Formation 100% adaptée à vos besoins
            </div>
          </div>
        </div>
        {/* Image à droite */}
        <div className="flex-1 flex items-center justify-center min-w-[320px]">
          <img
            src="/lovable-uploads/a13d200d-f14c-4002-98dc-818795b5ff11.png"
            alt="Femme qui étudie l’anglais en ligne"
            className="rounded-xl shadow-lg max-h-[380px] w-full object-cover border border-[#0367A6]/20"
            style={{ background: "#f6fbfe" }}
          />
        </div>
      </div>
    </section>
  );
}

