
import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Book, User } from "lucide-react";

export default function LeadForm() {
  const { toast } = useToast();
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast({
      title: "Merci !",
      description: "Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
    });
  }

  return (
    <div className="bg-blue-50 rounded-xl shadow-lg p-8 border-2 border-[#0367A6]/25 space-y-4">
      <h3 className="font-bold text-2xl mb-6 text-gray-900 font-sans text-center">
        Téléchargez votre brochure de formation et découvrez le plan qui vous fera progresser
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex items-center gap-2">
          <User className="text-[#F3AE02]" size={20} />
          <input
            required
            type="text"
            name="firstname"
            placeholder="Prénom"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={sent}
          />
        </div>
        <div className="flex items-center gap-2">
          <User className="text-[#0367A6]" size={20} />
          <input
            required
            type="text"
            name="lastname"
            placeholder="Nom"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={sent}
          />
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-[#0367A6]" size={20} />
          <input
            required
            type="email"
            name="email"
            placeholder="Votre email"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={sent}
          />
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-[#0367A6]" size={20} />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Votre téléphone"
            pattern="(\+?\d{1,4}[-.\s]?|\d{0,4})?\d{9,}"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={sent}
          />
        </div>
        <div className="flex items-center gap-2">
          <Book className="text-[#F3AE02]" size={20} />
          <select
            name="formation"
            required
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
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
          className="mt-2 w-full bg-[#2463EB] text-white font-semibold py-3 rounded-lg hover:bg-[#F87315] hover:text-white transition-colors hover-scale"
          disabled={sent}
        >
          {sent ? "Merci !" : "Télécharger ma brochure maintenant"}
        </button>
      </form>
      <p className="text-xs mt-4 text-gray-500 text-center">
        * Nous ne partageons jamais vos données. Traitement confidentiel.
      </p>
      <div className="mt-4 bg-white rounded-xl p-4 border border-blue-200">
        <div className="flex flex-1 flex-col">
          <h4 className="font-semibold text-blue-800 mb-2">Formation éligible au CPF</h4>
          <p className="text-sm text-blue-900">
            Simplifiez votre parcours de formation et bénéficiez d'un accompagnement administratif complet.
          </p>
        </div>
        <div className="mt-4 flex justify-center items-center gap-4">
          <img 
            src="/lovable-uploads/84f7d8eb-7e38-44b1-8ffd-11fbb49688d9.png" 
            alt="Mon Compte Formation" 
            className="h-16 object-contain"
          />
          <img 
            src="/lovable-uploads/df5d0402-913b-432b-9de9-2bc9abfa2562.png" 
            alt="Qualiopi" 
            className="h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
