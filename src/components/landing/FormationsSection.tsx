
import { Book, ListOrdered } from "lucide-react";

const formations = [
  {
    title: "Formation Anglais intensive",
    icon: <Book size={32} className="text-[#2463EB]" />,
    description:
      "Apprentissage intensif, progrès rapides et suivi personnalisé pour tous niveaux. Parlez anglais en 90 jours.",
  },
  {
    title: "Préparation TOEIC",
    icon: <ListOrdered size={32} className="text-[#F3AE02]" />,
    description:
      "Entrainement ciblé, méthodes de réussite, bonnes pratiques, examens blancs et passage de la certification.",
  },
  {
    title: "Formation Linguaskill",
    icon: <Book size={32} className="text-[#2463EB]" />,
    description:
      "Préparation complète à Linguaskill, adaptée aux besoins académiques et professionnels.",
  },
  {
    title: "Formation Anglais professionnel",
    icon: <Book size={32} className="text-[#F3AE02]" />,
    description:
      "Maîtrisez l'anglais en milieu professionnel pour vous créer de nombreuses opportunités.",
  },
];

export default function FormationsSection() {
  return (
    <div className="bg-[#2463EB] py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12 max-w-4xl mx-auto">
        Trouvez la formation adaptée à vos besoins, à vos objectifs et à votre rythme
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {formations.map((f, i) => (
          <div
            key={f.title}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-white/20 animate-fade-in hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-2">{f.icon}</div>
            <h4 className="text-lg font-bold mb-2 text-[#2463EB] text-center">{f.title}</h4>
            <p className="text-gray-700 text-center text-sm">{f.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="#formations"
          className="inline-block px-8 py-4 font-semibold rounded-lg shadow-md bg-[#2463EB] text-white hover:bg-white hover:text-[#0367A6] transition-colors hover-scale animate-fade-in"
        >
          Découvrir nos formations
        </a>
      </div>
    </div>
  );
}
