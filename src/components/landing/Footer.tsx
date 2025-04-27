
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#0367A6] text-white font-sans">
      <div className="container max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/d281e649-fc07-467d-8e52-97a4f2bfd696.png" 
              alt="Langues Faciles" 
              className="h-12 object-contain"
            />
            <b>Langues Faciles</b>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <a href="#contact" className="hover:text-gray-200 underline transition">
                Contactez-nous
              </a>
            </span>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <a href="tel:+33540707061" className="hover:text-gray-200 underline transition">
                  +33 (0)5 40 70 70 61
                </a>
              </span>
              <a href="tel:+33786565942" className="hover:text-gray-200 underline transition">
                +33 (0)7 86 56 59 42
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm border-t border-white/20 pt-4 space-y-2">
          <p className="text-gray-200">
            N° SIRET de l'établissement : 88942700100033 - Numéro de déclaration d'activité organisme de formation : 75331267533 - Code NAF 8559B
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-gray-300">
            <p>Copyright © 2023-2025 - Site internet réalisé par Appalga</p>
            <a href="#" className="hover:text-gray-200 underline transition">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
