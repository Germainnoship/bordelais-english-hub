
import { TrendingUp, Award, Briefcase, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const formations = [
  {
    title: "Formation Anglais intensive",
    icon: <TrendingUp size={32} className="text-[#F3AE02]" />,
    description:
      "Apprentissage intensif, progrès rapides et suivi personnalisé pour tous niveaux.",
    promise: "Parlez anglais en 90 jours",
  },
  {
    title: "Préparation TOEIC",
    icon: <Award size={32} className="text-[#F3AE02]" />,
    description:
      "Entrainement ciblé, méthodes de réussite, bonnes pratiques, examens blancs et passage de la certification.",
    promise: "Validez votre TOEIC en quelques semaines",
  },
  {
    title: "Formation Anglais professionnel",
    icon: <Briefcase size={32} className="text-[#F3AE02]" />,
    description:
      "Maîtrisez l'anglais en milieu professionnel pour vous créer de nombreuses opportunités.",
    promise: "Boostez votre carrière",
  },
];

export default function FormationsSection() {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-[#0367A6] py-12 px-4 rounded-xl">
      <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-center text-white mb-12 max-w-4xl mx-auto`}>
        Trouvez la formation adaptée à vos besoins, à vos objectifs et à votre rythme
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {formations.map((f, i) => (
          <div
            key={f.title}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-white/20 animate-fade-in hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-2">{f.icon}</div>
            <h4 className="text-lg font-bold mb-2 text-[#0367A6] text-center">{f.title}</h4>
            <p className="text-gray-700 text-center text-sm mb-4">{f.description}</p>
            <div className="w-full mt-auto">
              <a 
                href="#lead-form" 
                className="mx-auto block w-fit px-4 py-2 border border-[#F3AE02]/30 rounded-md bg-[#F3AE02]/10 text-center text-[#0367A6] hover:text-[#F3AE02] font-semibold transition-colors group flex items-center"
              >
                {f.promise} 
                <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="#formations"
          className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#F3AE02] text-white hover:bg-[#0367A6] hover:text-white transition-colors hover-scale animate-fade-in text-center"
        >
          Découvrir nos formations
        </a>
      </div>
    </div>
  );
}
