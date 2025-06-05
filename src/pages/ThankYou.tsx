
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, PhoneCall, Star } from "lucide-react";
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
    
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, [location.state, navigate]);

  const getFormationLabel = (value: string) => {
    switch (value) {
      case "intensive": return "Formation anglais intensive";
      case "pro": return "Formation anglais professionnel";
      case "toeic": return "Préparation TOEIC / LINGUASKILL / LILATE";
      default: return "Formation";
    }
  };

  const googleReviews = [
    {
      name: "Ellis Taieb",
      rating: 5,
      timeAgo: "14 weeks ago",
      content: "Super expérience avec Langue Facile pour le TOEIC ! Ils sont très réactifs, un service au top. Très efficace, rien à redire. Je recommande à 100% !",
      image: "/lovable-uploads/2135940d-d7d7-4cb1-a1c4-cdfdda1c646c.png"
    },
    {
      name: "Mary-Line Leparoux",
      rating: 5,
      timeAgo: "13 weeks ago",
      content: "Je recommande vraiment Langues Faciles ! 100% Ayant de mauvais souvenirs des cours d'anglais à l'école. Le professeur de Langues Faciles m'a donné de la confiance et moins d'appréhension à l'oral. L'envie de continuer à apprendre ! Très à l'écoute pour le passage du TOEIC",
      image: "/lovable-uploads/d4785491-a398-43c7-bec9-0e576b9f2845.png"
    },
    {
      name: "Aïcha Lahjouji",
      rating: 5,
      timeAgo: "6 weeks ago",
      content: "Un service irréprochable, humain et très efficace. Mme Kaldas a été d'un grand soutien dans ma démarche : elle m'a guidée, encouragée et permis d'accélérer tout le processus. Je ne l'oublierai pas. Merci infiniment !",
      image: "/lovable-uploads/38399df4-e33f-4496-805d-7e891355686f.png"
    },
    {
      name: "Mélanie",
      rating: 5,
      timeAgo: "8 weeks ago",
      content: "J'ai passé la certification LILATE avec Langues Faciles et tout s'est très bien déroulé. Je conseille vivement cette école si vous voulez prendre des cours particuliers en anglais ou bien passer une certification.",
      image: "/lovable-uploads/32b62caa-f2a7-43c9-8211-9ea3286203ba.png"
    },
    {
      name: "Rachida Omari",
      rating: 5,
      timeAgo: "6 weeks ago",
      content: "Madame Marianne Kaldas a fait un travail exceptionnel. Je ne sais même pas comment la remercier. Grâce à son soutien et à sa réactivité, ma procédure a été accélérée, et j'ai pu obtenir mon TOEIC dans les meilleures conditions. Un immense merci du fond du cœur !",
      image: "/lovable-uploads/638cc62c-1681-41c6-8f0a-961f365fbca2.png"
    },
    {
      name: "Anthony",
      rating: 5,
      timeAgo: "12 weeks ago",
      content: "Expérience top. Équipe très réactive et à l'écoute. Je recommande vraiment.",
      image: "/lovable-uploads/4c25053b-dcde-4368-9734-b787db482110.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header section */}
      <header className="bg-[#0367A6] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/be1b1a48-3630-438a-903a-889cb062d42b.png" 
                alt="Langues Faciles" 
                className="h-16 md:h-20" 
              />
            </a>
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
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-12">
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

          {/* Google Reviews Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0367A6] mb-4">
                Déjà +6 400 personnes ont fait confiance à Langues Faciles
              </h2>
              <p className="text-gray-600">
                Découvrez les témoignages de nos apprenants
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {googleReviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{review.timeAgo}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>
              ))}
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
