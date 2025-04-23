
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gradient-to-t from-blue-100 via-white to-white font-sans">
      <div className="container max-w-4xl flex flex-col md:flex-row justify-between items-center gap-3 mx-auto text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <b>Bordelais English Hub</b>
          <span className="ml-2">| Bordeaux</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="mailto:contact@english-hub.fr" className="text-blue-700 underline hover:text-violet-700 transition">
              contact@english-hub.fr
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <a href="tel:0535120000" className="text-blue-700 underline hover:text-violet-700 transition">
              05&nbsp;35&nbsp;12&nbsp;00&nbsp;00
            </a>
          </span>
          <span>
            <a href="#" className="text-gray-500 underline hover:text-blue-700 transition">Mentions légales</a>
          </span>
        </div>
        <div className="text-gray-400">&copy; {new Date().getFullYear()} Tous droits réservés</div>
      </div>
    </footer>
  );
}
