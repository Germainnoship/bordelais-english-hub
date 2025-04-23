
export default function MethodSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-violet-700 font-playfair">
            Une pédagogie axée sur la pratique
          </h2>
          <p className="text-gray-700 mb-3">
            Nos cours misent sur la conversation et des mises en situation réelles, pour gagner en aisance rapidement à l’oral comme à l’écrit.
          </p>
          <ul className="text-gray-600 mb-3 space-y-2">
            <li>— Évaluation de niveau offerte</li>
            <li>— Supports interactifs, ateliers, e-learning</li>
            <li>— Suivi individuel, immersion personnalisée</li>
          </ul>
          <p className="text-sm text-gray-500">
            ... (texte de présentation à compléter)
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="rounded-xl shadow-md w-full max-w-xs" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" alt="Cours d'anglais" />
        </div>
      </div>
    </section>
  );
}
