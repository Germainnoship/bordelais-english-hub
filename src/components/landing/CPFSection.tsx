
import { Check } from "lucide-react";
export default function CPFSection() {
  return (
    <section className="py-10 px-4 font-sans">
      <div className="container max-w-3xl mx-auto bg-blue-50 rounded-xl shadow flex flex-col md:flex-row items-center gap-6 p-8 border border-blue-200 animate-fade-in">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-blue-800">
            Financement possible de votre formation avec le CPF
          </h3>
          <p className="text-sm text-blue-900 mb-4">
            Salarié, demandeur d'emploi ou retraité : quels que soient votre statut et vos objectifs, nous vous orientons vers le dispositif de financement le plus adapté. Nous vous accompagnons à chaque étape pour constituer un dossier solide et maximiser vos chances de prise en charge.
          </p>
          <ul className="space-y-2 text-sm text-blue-900 mb-1">
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Accompagnement administratif complet</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Démarches CPF simplifiées</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={18} /> Possibilité de démarrer vite</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80" alt="Formation CPF en ligne" className="w-32 h-32 rounded-full shadow object-cover" />
        </div>
      </div>
    </section>
  );
}
