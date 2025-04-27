
import { Check } from "lucide-react";

export default function CPFSection() {
  return (
    <section className="py-10 px-4 font-sans">
      <div className="container max-w-3xl mx-auto bg-blue-50 rounded-xl shadow flex flex-col md:flex-row items-center gap-6 p-8 border border-blue-200 animate-fade-in">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-blue-800">
            Possibilité de financement de la formation par le CPF
          </h3>
          <ul className="space-y-2 text-sm text-blue-900 mb-1">
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Accompagnement administratif complet</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Démarches CPF simplifiées</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Possibilité de démarrer vite</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/public/lovable-uploads/4de9eaf6-ff86-436e-8a16-ee31d6da685f.png" alt="Charte CPF" className="w-48 object-contain" />
        </div>
      </div>
    </section>
  );
}
