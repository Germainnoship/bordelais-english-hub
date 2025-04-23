
import { CheckCircle } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-[#e2effa] via-[#fafbfb] to-[#e7f5fe] animate-fade-in font-sans">
      <div className="max-w-2xl z-10">
        <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#0367A6] leading-tight font-sans">
          Maîtrisez l’anglais en ligne<br className="hidden md:inline" />
          <span className="inline-block text-transparent bg-gradient-to-r from-[#0367A6] via-[#0367A6] to-[#F3AE02] bg-clip-text">
            Formation certifiante éligible CPF
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans">
          Adulte, étudiant, pro ou demandeur d’emploi&nbsp;: boostez votre carrière grâce à l’anglais !
        </p>
        <a
          href="#lead-form"
          className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#0367A6] text-white hover:bg-[#F3AE02] hover:text-[#0367A6] transition-colors hover-scale animate-fade-in"
        >
          Télécharger la brochure
        </a>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <div className="flex items-center text-[#0367A6] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Prise en charge 100% CPF possible
          </div>
          <div className="flex items-center text-[#0367A6] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Parcours personnalisé
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
    </section>
  );
}
