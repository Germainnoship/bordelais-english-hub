
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Book, User } from "lucide-react";

export default function LeadForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState("");

  // Validate French phone number
  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all spaces and special characters except +
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    
    // Check for +33 format (international)
    if (cleanPhone.startsWith('+33')) {
      // Should be +33 followed by 9 digits
      const withoutPrefix = cleanPhone.substring(3);
      return /^[1-9]\d{8}$/.test(withoutPrefix);
    }
    
    // Check for 06 or 07 format (mobile)
    if (cleanPhone.startsWith('06') || cleanPhone.startsWith('07')) {
      // Should be exactly 10 digits
      return /^0[67]\d{8}$/.test(cleanPhone);
    }
    
    return false;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    if (phone && !validatePhoneNumber(phone)) {
      setPhoneError("Veuillez entrer un numéro de téléphone valide (06, 07 ou +33)");
    } else {
      setPhoneError("");
    }
  };

  // Get gclid from URL parameters
  const getGclid = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gclid') || '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const telephone = formData.get("telephone") as string;
    
    // Validate phone number before submission
    if (!validatePhoneNumber(telephone)) {
      setPhoneError("Veuillez entrer un numéro de téléphone valide (06, 07 ou +33)");
      return;
    }
    
    setIsSubmitting(true);
    const gclid = getGclid();
    
    const data = {
      prenom: formData.get("prenom") as string,
      nom: formData.get("nom") as string,
      email: formData.get("email") as string,
      telephone: formData.get("telephone") as string,
      type_formation: formData.get("type_formation") as string,
      gclid: gclid
    };

    console.log("=== WEBHOOK DEBUG ===");
    console.log("Webhook URL:", "https://hook.eu2.make.com/1sqmrireo6hlrkgnqjwiovn99l1mre59");
    console.log("Data being sent:", data);
    console.log("Data as JSON:", JSON.stringify(data));

    try {
      const response = await fetch("https://hook.eu2.make.com/1sqmrireo6hlrkgnqjwiovn99l1mre59", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const responseText = await response.text();
      console.log("Response body:", responseText);

      if (response.ok) {
        console.log("✅ Webhook call successful");
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
        console.error("❌ Webhook call failed with status:", response.status);
        throw new Error(`Erreur webhook: ${response.status}`);
      }
    } catch (error) {
      console.error("❌ Error calling webhook:", error);
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Phone className="text-[#0367A6]" size={20} />
            <input
              required
              type="tel"
              name="telephone"
              placeholder="Votre téléphone"
              className={`flex-1 h-12 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#0367A6] bg-white font-sans ${
                phoneError ? 'border-red-500' : 'border-blue-200'
              }`}
              disabled={isSubmitting}
              onChange={handlePhoneChange}
              onBlur={handlePhoneChange}
            />
          </div>
          {phoneError && (
            <p className="text-red-500 text-sm ml-7">{phoneError}</p>
          )}
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
