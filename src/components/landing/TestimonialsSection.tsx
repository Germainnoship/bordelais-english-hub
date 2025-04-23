
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    content:
      "Excellents formateurs, ambiance conviviale et résultats rapides ! J’ai validé mon TOEIC du premier coup.",
  },
  {
    name: "Julien D.",
    content:
      "Méthode très adaptée à mes besoins, suivi personnalisé et équipe au top. CPF pris en charge facilement.",
  },
  {
    name: "Sophie B.",
    content:
      "J’ai repris confiance à l’oral. Les ateliers de conversation sont un vrai plus !",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-violet-100 via-blue-50 to-white">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 font-playfair">
          Ils nous ont fait confiance
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow animate-fade-in flex flex-col items-center">
              <MessageSquare className="text-blue-400 mb-3" size={32} />
              <p className="italic text-gray-700 mb-4">"{t.content}"</p>
              <span className="font-semibold text-blue-700">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
