
import { Mail, Phone, Contact } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#0367A6] text-white font-sans">
      <div className="container max-w-4xl flex flex-col md:flex-row justify-between items-center gap-3 mx-auto text-sm">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/79eca677-6add-40bb-add4-450200969555.png"
            alt="Langues Faciles"
            className="w-24 h-24 object-contain" 
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="https://www.languesfaciles.fr/contact-formation-linguistique" className="hover:text-gray-200 underline transition">
              Contactez-nous
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <a href="tel:+33540707061" className="hover:text-gray-200 underline transition">
              +33&nbsp;(0)5&nbsp;40&nbsp;70&nbsp;70&nbsp;61
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <a href="tel:+33786565942" className="hover:text-gray-200 underline transition">
              +33&nbsp;(0)7&nbsp;86&nbsp;56&nbsp;59&nbsp;42
            </a>
          </span>
          <span>
            <a href="https://www.languesfaciles.fr/mentions-legales.html" className="hover:text-gray-200 underline transition">Mentions légales</a>
          </span>
        </div>
        <div className="text-gray-200">&copy; {new Date().getFullYear()} Tous droits réservés</div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-300 max-w-4xl mx-auto">
        N° SIRET de l'établissement : 88942700100033 - Numéro de déclaration d'activité organisme de formation : 75331267533 - Code NAF 8559B
      </div>
    </footer>
  );
}
