
import { TrendingUp, Award, Briefcase } from "lucide-react";

const formations = [
  {
    title: "Formation Anglais intensive",
    icon: <TrendingUp size={32} className="text-[#F3AE02]" />,
    description:
      "Apprentissage intensif, progrès rapides et suivi personnalisé pour tous niveaux. Parlez anglais en 90 jours.",
  },
  {
    title: "Préparation TOEIC",
    icon: <Award size={32} className="text-[#F3AE02]" />,
    description:
      "Entrainement ciblé, méthodes de réussite, bonnes pratiques, examens blancs et passage de la certification.",
  },
  {
    title: "Formation Anglais professionnel",
    icon: <Briefcase size={32} className="text-[#F3AE02]" />,
    description:
      "Maîtrisez l'anglais en milieu professionnel pour vous créer de nombreuses opportunités.",
  },
];

export default function FormationsSection() {
  return (
    <div className="bg-[#0367A6] py-12 px-4 rounded-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-12 max-w-4xl mx-auto">
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
            <p className="text-gray-700 text-center text-sm">{f.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="#formations"
          className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#F3AE02] text-white hover:bg-[#0367A6] hover:text-white transition-colors hover-scale animate-fade-in"
        >
          Découvrir nos formations
        </a>
      </div>
    </div>
  );
}
