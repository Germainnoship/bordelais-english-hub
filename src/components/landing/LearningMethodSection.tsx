
import { Award, BookOpen, Users, Star } from "lucide-react";

export default function LearningMethodSection() {
  const methods = [
    {
      icon: <Users className="text-[#0367A6] w-12 h-12" />,
      title: "Approche sur mesure",
      description: "Formation adaptée à votre niveau et vos objectifs"
    },
    {
      icon: <BookOpen className="text-[#0367A6] w-12 h-12" />,
      title: "Méthode décomplexée",
      description: "Conversations naturelles et mises en situation réelles"
    },
    {
      icon: <Award className="text-[#0367A6] w-12 h-12" />,
      title: "Résultats prouvés",
      description: "Progression rapide et mesurable dès les premiers cours"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0367A6] mb-12">
          Notre méthode a déjà transformé l'apprentissage de +6400 personnes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {method.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-[#0367A6]">
                {method.title}
              </h3>
              <p className="text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
            <Star className="text-[#F3AE02] w-8 h-8" />
            <span className="text-xl font-semibold text-[#0367A6]">
              97% de nos apprenants recommandent notre méthode
            </span>
          </div>

          <a
            href="#formations"
            className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#F3AE02] text-[#0367A6] hover:bg-[#0367A6] hover:text-white transition-colors hover-scale animate-fade-in"
          >
            Découvrir notre méthode
          </a>
        </div>
      </div>
    </section>
  );
}
