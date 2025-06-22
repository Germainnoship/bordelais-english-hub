import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Book, User } from "lucide-react";

export default function LeadForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Get gclid from URL parameters
  const getGclid = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gclid') || '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const gclid = getGclid();
    
    const data = {
      prenom: formData.get("prenom") as string,
      nom: formData.get("nom") as string,
      email: formData.get("email") as string,
      telephone: formData.get("telephone") as string,
      type_formation: formData.get("type_formation") as string,
      gclid: gclid
    };

    console.log("Sending data to webhook:", data);

    try {
      const response = await fetch("https://hook.eu2.make.com/1sqmrireo6hlrkgnqjwiovn99l1mre59", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Merci !",
          description: "Votre demande a bien été envoyée ! Un conseiller vous recontactera rapidement.",
        });
        
        // Redirect to thank you page with form data
        navigate("/thank-you", {
          state: {
            formation: data.type_formation,
            email: data.email
          }
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="lead-form" className="bg-blue-50 rounded-xl shadow-lg p-8 border-2 border-[#0367A6]/25 space-y-4">
        <div className="text-center">
          <h3 className="font-bold text-2xl mb-6 text-gray-900 font-sans">
            Merci !
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Votre demande a bien été envoyée ! Un conseiller vous recontactera rapidement.
          </p>
          <div className="bg-green-100 border border-green-300 rounded-lg p-4">
            <p className="text-green-800 font-medium">
              ✓ Votre brochure vous sera envoyée par email
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-blue-50 rounded-xl shadow-lg p-8 border-2 border-[#0367A6]/25 space-y-4">
      <h3 className="font-bold text-2xl mb-6 text-gray-900 font-sans text-center">
        Téléchargez votre brochure de formation et découvrez le plan qui vous fera progresser
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex items-center gap-2">
          <User className="text-[#0367A6]" size={20} />
          <input
            required
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex items-center gap-2">
          <User className="text-[#0367A6]" size={20} />
          <input
            required
            type="text"
            name="nom"
            placeholder="Nom"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-[#0367A6]" size={20} />
          <input
            required
            type="tel"
            name="telephone"
            placeholder="Votre téléphone"
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          <Book className="text-[#0367A6] min-w-[20px]" size={20} />
          <select
            name="type_formation"
            required
            className="flex-1 h-12 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans w-full"
            disabled={isSubmitting}
          >
            <option value="">Type de formation souhaitée</option>
            <option value="intensive">Formation anglais intensive</option>
            <option value="pro">Formation anglais professionnel</option>
            <option value="toeic">Préparation TOEIC / LINGUASKILL / LILATE</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-[#F3AE02] text-white font-semibold py-3 rounded-lg hover:bg-[#0367A6] hover:text-white transition-colors hover-scale"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Télécharger ma brochure maintenant"}
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
