
import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Book } from "lucide-react";

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
    <section id="lead-form" className="py-16 bg-white font-sans">
      <div className="container max-w-lg mx-auto">
        <div className="bg-blue-50 rounded-xl shadow-lg p-8">
          <h3 className="font-bold text-2xl mb-4 text-blue-900 font-sans">
            Recevoir une brochure ou être rappelé
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex items-center gap-2">
              <input
                required
                type="text"
                name="firstname"
                placeholder="Prénom"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white font-sans"
                disabled={sent}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                required
                type="text"
                name="lastname"
                placeholder="Nom"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white font-sans"
                disabled={sent}
              />
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-400" size={20} />
              <input
                required
                type="email"
                name="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white font-sans"
                disabled={sent}
              />
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-blue-400" size={20} />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                pattern="(\+?\d{1,4}[-.\s]?|\d{0,4})?\d{9,}"
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white font-sans"
                disabled={sent}
              />
            </div>
            <div className="flex items-center gap-2">
              <Book className="text-blue-400" size={20} />
              <select
                name="formation"
                required
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-300 bg-white font-sans"
                disabled={sent}
              >
                <option value="">Type de formation souhaitée</option>
                <option value="intensive">Formation anglais intensive</option>
                <option value="pro">Formation anglais professionnel</option>
                <option value="toeic">Préparation TOEIC / LINGUASKILL / LILATE</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-violet-600 transition hover-scale"
              disabled={sent}
            >
              {sent ? "Merci !" : "Recevoir ma brochure personnalisée / Être rappelé(e)"}
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
