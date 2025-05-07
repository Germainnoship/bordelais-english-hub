
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, PhoneCall } from "lucide-react";
import Footer from "@/components/landing/Footer";

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const formationRequested = location.state?.formation || "";
  const userEmail = location.state?.email || "";
  
  // If no state is passed, redirect to home page
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const getFormationLabel = (value: string) => {
    switch (value) {
      case "intensive": return "Formation anglais intensive";
      case "pro": return "Formation anglais professionnel";
      case "toeic": return "Préparation TOEIC / LINGUASKILL / LILATE";
      default: return "Formation";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header section */}
      <header className="bg-[#0367A6] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start">
            <a href="/" className="font-bold text-white text-2xl">Langues Faciles</a>
          </div>
        </div>
      </header>

      {/* Thank you content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Confirmation message */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-t-4 border-[#F3AE02] text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Mail className="h-12 w-12 text-[#0367A6]" />
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#0367A6] mb-4">
              Merci pour votre demande !
            </h1>
            
            <p className="text-gray-700 mb-6">
              Votre brochure pour la <span className="font-semibold">{getFormationLabel(formationRequested)}</span> va 
              être envoyée à l'adresse <span className="font-semibold">{userEmail}</span> dans les prochaines minutes.
            </p>
            
            <div className="flex justify-center">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 max-w-md">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Conseil</span> : N'hésitez pas à vérifier votre dossier de spam si vous ne recevez pas l'email rapidement.
                </p>
              </div>
            </div>
          </div>

          {/* Calendly section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0367A6] mb-4">
                Réservez votre bilan linguistique gratuit
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Échangez avec l'un de nos conseillers pour discuter de vos besoins et objectifs spécifiques. 
                Nous vous aiderons à identifier la formation la plus adaptée à votre situation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-[#0367A6] flex items-center gap-2 mb-4">
                  <PhoneCall className="h-5 w-5 text-[#F3AE02]" />
                  Ce que vous obtiendrez
                </h3>
                <ul className="space-y-3">
                  {[
                    "Une analyse de votre niveau actuel d'anglais",
                    "Des recommandations personnalisées",
                    "Un plan d'action précis",
                    "Toutes les informations sur le financement CPF"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#F3AE02] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center items-center bg-blue-50 p-6 rounded-lg text-center">
                <Calendar className="h-12 w-12 text-[#0367A6] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Réserver maintenant</h3>
                <p className="text-gray-600 mb-6">
                  Consultation de 15 minutes, totalement gratuite et sans engagement
                </p>
                <Button 
                  className="bg-[#F3AE02] hover:bg-[#0367A6] text-white px-6 py-3 rounded-lg w-full"
                  onClick={() => window.open("https://calendly.com/votrelien", "_blank")}
                >
                  Réserver mon créneau
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                En réservant un appel, vous acceptez d'être contacté par notre équipe pédagogique dans le cadre exclusif de votre projet de formation.
              </p>
            </div>
          </div>

          {/* Return home button */}
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="border-[#0367A6] text-[#0367A6] hover:bg-[#0367A6] hover:text-white"
            >
              Retourner à l'accueil
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
