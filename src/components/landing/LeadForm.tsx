
import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { Contact, Mail } from "lucide-react";

export default function LeadForm() {
  const { toast } = useToast();
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast({
      title: "Merci !",
      description: "Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
    });
    // Ici on ajouterait l’envoi réel (API/mail) si besoin
  }

  return (
    <section id="lead-form" className="py-16 bg-white">
      <div className="container max-w-lg mx-auto">
        <div className="bg-blue-50 rounded-xl shadow-lg p-8">
          <h3 className="font-playfair text-2xl font-bold mb-4 text-blue-900">
            Renseignez vos infos pour <span className="text-violet-600">recevoir la brochure</span> ou être rappelé
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <Contact className="text-blue-400" size={20} />
              <input
                required
                type="text"
                name="name"
                placeholder="Votre nom"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-400" size={20} />
              <input
                required
                type="email"
                name="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white"
              />
            </div>
            <select
              name="demande"
              required
              className="px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white"
            >
              <option value="">Je souhaite...</option>
              <option value="brochure">Télécharger une brochure</option>
              <option value="rappel">Être rappelé par un conseiller</option>
            </select>
            <button
              type="submit"
              className="mt-2 w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-violet-600 transition hover-scale"
              disabled={sent}
            >
              {sent ? "Merci !" : "Envoyer"}
            </button>
          </form>
          <p className="text-xs mt-4 text-gray-500 text-center">
            * Nous ne partageons jamais vos données. Traitement confidentiel.
          </p>
        </div>
      </div>
    </section>
  );
}
