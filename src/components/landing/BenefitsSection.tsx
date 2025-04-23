
import { Users, GraduationCap, BookOpen, CheckCheck } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Ouvert à tous",
    text: "Adulte, étudiant, professionnel ou demandeur d’emploi.",
  },
  {
    icon: GraduationCap,
    title: "Formateurs natifs",
    text: "Experts pédagogiques, suivi individualisé, immersion orale.",
  },
  {
    icon: BookOpen,
    title: "Méthode accélérée",
    text: "Parcours adaptés à chaque niveau, progression rapide.",
  },
  {
    icon: CheckCheck,
    title: "Certification reconnue",
    text: "Préparation et passage officiel (TOEIC, LINGUASKILL, LILATE), avec possibilité de financement CPF.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="container max-w-5xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center font-sans">
          Pourquoi choisir notre centre à Bordeaux&nbsp;?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-blue-50 rounded-xl shadow flex flex-col items-center p-8 hover:shadow-lg transition animate-fade-in font-sans"
            >
              <b.icon className="text-violet-600 mb-4" size={38} />
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
