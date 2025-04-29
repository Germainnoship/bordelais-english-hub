
import { BriefcaseIcon, TrendingUpIcon, AwardIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function MethodSection() {
  const advantages = [
    {
      icon: BriefcaseIcon,
      title: "Boostez votre carrière",
      content: "Accédez à des postes à plus hautes responsabilités, travaillez à l'international et valorisez votre profil sur un marché de plus en plus exigeant.",
      color: "text-blue-600"
    },
    {
      icon: TrendingUpIcon,
      title: "Ouvrez de nouvelles portes",
      content: "Changez de secteur, réussissez vos entretiens bilingues et facilitez votre reconversion professionnelle grâce à un anglais opérationnel.",
      color: "text-green-600"
    },
    {
      icon: AwardIcon,
      title: "Gagnez en liberté",
      content: "Soyez autonome lors de vos voyages, accédez à des contenus anglophones et enrichissez votre quotidien avec une compétence essentielle.",
      color: "text-violet-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pourquoi se former en anglais change vraiment la donne ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Que vous soyez professionnel, en reconversion ou particulier, maîtriser l'anglais 
            ouvre des portes aujourd'hui inaccessibles. Découvrez ce que cela peut concrètement 
            vous apporter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow 
                        border border-gray-100 flex flex-col"
            >
              <div className={`${advantage.color} mb-4`}>
                <advantage.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {advantage.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="cta-button bg-[#2463EB] hover:bg-orange-500"
          >
            Je découvre ma formation idéale
          </Button>
        </div>
      </div>
    </section>
  );
}
