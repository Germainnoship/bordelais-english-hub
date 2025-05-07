
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    content:
      "Excellents formateurs, ambiance conviviale et résultats rapides ! J'ai validé mon TOEIC du premier coup.",
  },
  {
    name: "Julien D.",
    content:
      "Méthode très adaptée à mes besoins, suivi personnalisé et équipe au top. CPF pris en charge facilement.",
  },
  {
    name: "Sophie B.",
    content:
      "J'ai repris confiance à l'oral. Les ateliers de conversation sont un vrai plus !",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-violet-100 via-blue-50 to-white font-sans">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0367A6] mb-12 flex items-center justify-center gap-2">
          <span role="img" aria-label="groupe" className="text-2xl">👥</span>
          +6 400 personnes formées depuis 2019
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow animate-fade-in flex flex-col items-center">
              <MessageSquare className="text-blue-400 mb-3" size={32} />
              <div className="mb-2">
                <span className="text-yellow-400 text-lg" aria-label="5 étoiles">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-gray-700 mb-4 text-center">"{t.content}"</p>
              <span className="font-semibold text-blue-700">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
