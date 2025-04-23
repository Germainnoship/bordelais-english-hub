
import { CheckCircle } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-blue-200 via-violet-200 to-purple-100 animate-fade-in">
      <div className="max-w-2xl z-10">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight">
          Maîtrisez l’anglais à Bordeaux <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">
            Formation certifiante éligible CPF
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Adulte, étudiant, pro ou demandeur d’emploi&nbsp;: boostez votre carrière grâce à l’anglais!
        </p>
        <a
          href="#lead-form"
          className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-blue-700 text-white hover:bg-blue-800 transition hover-scale animate-fade-in"
        >
          Télécharger la brochure
        </a>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <div className="flex items-center text-blue-700 font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Prise en charge 100% CPF possible
          </div>
          <div className="flex items-center text-blue-700 font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Parcours personnalisé
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80')] bg-cover"></div>
    </section>
  );
}
