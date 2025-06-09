
import { Users, GraduationCap, BookOpen, CheckCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: Users,
    title: "Ouvert à tous",
    subtitle: "Un accompagnement ajusté à votre profil, vos objectifs et votre rythme pour des résultats concrets.",
  },
  {
    icon: GraduationCap,
    title: "Formateurs natifs",
    subtitle: "Formateur natif dédié, suivi individualisé, immersion orale dès le premier cours + Accès à notre plateforme e-learning pour progresser à votre rythme, en toute autonomie.",
  },
  {
    icon: BookOpen,
    title: "En ligne ou en Présentiel",
    subtitle: "Formez-vous en ligne ou en présentiel : nos formations s'adaptent à votre rythme et à votre situation.",
  },
  {
    icon: CheckCheck,
    title: "Certification reconnue",
    text: "Préparation et passage officiel (TOEIC, LINGUASKILL, LILATE), avec possibilité de financement CPF.",
  },
];

export default function BenefitsSection() {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 gap-6">
      {benefits.map((b) => (
        <div
          key={b.title}
          className="bg-blue-50 rounded-xl shadow flex flex-col items-center p-6 hover:shadow-lg transition animate-fade-in"
        >
          <div className={`${isMobile ? 'flex justify-center w-full' : ''}`}>
            <b.icon className="text-violet-600 mb-4" size={38} />
          </div>
          <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
          {b.text && <p className="text-gray-600 text-sm text-center">{b.text}</p>}
          {b.subtitle && (
            <p className="text-gray-600 text-sm text-center mt-2">{b.subtitle}</p>
          )}
        </div>
      ))}
    </div>
  );
}
