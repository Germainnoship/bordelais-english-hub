
import { Building2, TrendingUp, Users, Globe, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: <Building2 size={40} className="text-[#F3AE02]" />,
    title: "Opportunités professionnelles",
    description: "Accédez à de nouveaux postes et élargissez vos perspectives de carrière"
  },
  {
    icon: <TrendingUp size={40} className="text-[#F3AE02]" />,
    title: "Augmentation de salaire",
    description: "Négociez de meilleures rémunérations grâce à vos compétences linguistiques"
  },
  {
    icon: <Users size={40} className="text-[#F3AE02]" />,
    title: "Confiance en soi",
    description: "Prenez la parole en réunion et communiquez avec assurance"
  },
  {
    icon: <Globe size={40} className="text-[#F3AE02]" />,
    title: "Ouverture internationale",
    description: "Travaillez avec des équipes internationales et voyagez sans barrière"
  },
  {
    icon: <GraduationCap size={40} className="text-[#F3AE02]" />,
    title: "Certifications reconnues",
    description: "Validez vos compétences avec des certifications officielles (TOEIC, LILATE)"
  },
  {
    icon: <Briefcase size={40} className="text-[#F3AE02]" />,
    title: "Évolution de carrière",
    description: "Prenez les postes à responsabilités qui nécessitent l'anglais"
  }
];

export default function BenefitsSection() {
  const isMobile = useIsMobile();
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 mb-4`}>
          Pourquoi se former en anglais change vraiment la donne ?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez tous les avantages concrets que vous apportera la maîtrise de l'anglais dans votre vie professionnelle et personnelle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div 
            key={benefit.title}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button 
          size="lg"
          onClick={scrollToForm}
          className="cta-button bg-[#F3AE02] hover:bg-[#0367A6] hover:text-white rounded-lg"
        >
          Je découvre ma formation idéale
        </Button>
      </div>
    </div>
  );
}
