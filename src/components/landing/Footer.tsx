import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#0367A6] text-white font-sans">
      <div className="container max-w-4xl flex flex-col md:flex-row justify-between items-center gap-3 mx-auto text-sm">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/79eca677-6add-40bb-add4-450200969555.png"
            alt="Langues Faciles"
            className="w-12 h-12 object-contain"
          />
          <b>Langues Faciles</b>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="mailto:contact@english-hub.fr" className="hover:text-gray-200 underline transition">
              contact@english-hub.fr
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <a href="tel:0535120000" className="hover:text-gray-200 underline transition">
              05&nbsp;35&nbsp;12&nbsp;00&nbsp;00
            </a>
          </span>
          <span>
            <a href="#" className="hover:text-gray-200 underline transition">Mentions légales</a>
          </span>
        </div>
        <div className="text-gray-200">&copy; {new Date().getFullYear()} Tous droits réservés</div>
      </div>
    </footer>
  );
}
