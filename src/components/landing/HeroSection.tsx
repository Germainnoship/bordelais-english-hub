
import { CheckCircle } from "lucide-react";
import { Book, VideoIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-6 py-24 bg-white font-sans">
      <div className="w-full md:w-1/2 z-10 md:pr-8">
        <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#0367A6] leading-tight font-sans">
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
          className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#0367A6] text-white hover:bg-[#F3AE02] hover:text-[#0367A6] transition-colors hover-scale animate-fade-in"
        >
          Télécharger la brochure
        </a>
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 mt-8">
          <div className="flex items-center text-[#0367A6] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Financement CPF
          </div>
          <div className="flex items-center text-[#0367A6] font-medium gap-2">
            <CheckCircle size={22} className="text-green-600" /> Formation 100% adaptée à vos besoins
          </div>
          <div className="flex items-center text-[#0367A6] font-medium gap-2">
            <VideoIcon size={22} className="text-green-600" /> Formation visio conférence ou en présentiel
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 pl-8">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Online formation" 
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
