import { Check, X } from "lucide-react";

export default function LearningMethodSection() {
  const methods = {
    classic: [
      "Cours théoriques sans mise en pratique",
      "Même contenu pour tout le monde",
      "Peur du jugement collectif",
      "Progression lente et peu motivante",
      "Apprentissage sur les règles sans contexte réel",
      "Pas de suivi personnalisé"
    ],
    languesFaciles: [
      "Apprendre à parler, comprendre et se faire comprendre rapidement",
      "Programme personnalisé selon votre niveau et vos objectifs",
      "Cours individuels, bienveillants, sans pression",
      "Résultats visibles dès les premières semaines",
      "Apprentissage grâce à des mises en situation concrètes",
      "Accompagnement individualisé et suivi de la progression"
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0367A6] mb-12">
          Changez de méthode. Changez vos résultats.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Méthode classique */}
          <div className="bg-white/80 backdrop-blur p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
              Méthode classique
            </h3>
            <div className="space-y-4">
              {methods.classic.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                  <span className="text-gray-600">{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Langues Faciles */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-[#0367A6] text-center">
              Langues Faciles
            </h3>
            <div className="space-y-4">
              {methods.languesFaciles.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 font-semibold rounded-xl shadow-md bg-[#F3AE02] text-white hover:bg-[#0367A6] hover:text-white transition-colors animate-fade-in"
          >
            Découvrir la méthode Langues Faciles
          </a>
        </div>
      </div>
    </section>
  );
}
