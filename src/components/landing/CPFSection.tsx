
import { Check } from "lucide-react";
export default function CPFSection() {
  return (
    <section className="py-10 px-4">
      <div className="container max-w-3xl mx-auto bg-blue-50 rounded-xl shadow flex flex-col md:flex-row items-center gap-6 p-8 border border-blue-200 animate-fade-in">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-blue-800">
            Formation 100 % prise en charge CPF
          </h3>
          <ul className="space-y-2 text-sm text-blue-900 mb-1">
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Accompagnement administratif complet</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Démarches CPF simplifiées</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Possibilité de démarrer vite</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=320&q=80" alt="CPF anglais Bordeaux" className="w-32 h-32 rounded-full shadow object-cover" />
        </div>
      </div>
    </section>
  );
}
