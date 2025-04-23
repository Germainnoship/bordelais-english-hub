
import { Book, ListOrdered } from "lucide-react";

const formations = [
  {
    title: "Formation Anglais intensive",
    icon: <Book size={32} className="text-[#0367A6]" />,
    description:
      "Apprentissage intensif, progrès rapides et suivi personnalisé pour tous niveaux.",
  },
  {
    title: "Préparation TOEIC",
    icon: <ListOrdered size={32} className="text-[#F3AE02]" />,
    description:
      "Entrainement ciblé, astuces, examens blancs et passage de la certification.",
  },
  {
    title: "Formation Linguaskill",
    icon: <Book size={32} className="text-[#0367A6]" />,
    description:
      "Préparation complète à Linguaskill, adaptée aux besoins académiques et professionnels.",
  },
  {
    title: "Formation Anglais professionnel",
    icon: <Book size={32} className="text-[#F3AE02]" />,
    description:
      "Développez vos compétences pour le monde du travail : vocabulaire métier et communication.",
  },
];

export default function FormationsSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {formations.map((f, i) => (
          <div
            key={f.title}
            className="bg-[#eaf5fa] rounded-xl shadow p-6 flex flex-col items-center border border-[#0367A6]/20 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-2">{f.icon}</div>
            <h4 className="text-lg font-bold mb-2 text-[#0367A6] text-center">{f.title}</h4>
            <p className="text-gray-700 text-center text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
