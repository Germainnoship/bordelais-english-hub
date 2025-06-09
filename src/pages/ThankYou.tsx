import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, PhoneCall, Star, ArrowUp, CheckCircle } from "lucide-react";
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

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [location.state, navigate]);

  const getFormationLabel = (value: string) => {
    switch (value) {
      case "intensive": return "Formation anglais intensive";
      case "pro": return "Formation anglais professionnel";
      case "toeic": return "Préparation TOEIC / LINGUASKILL / LILATE";
      default: return "Formation";
    }
  };

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Une analyse de votre niveau actuel d'anglais",
    "Des recommandations personnalisées", 
    "Un plan d'action précis",
    "Toutes les informations sur le financement CPF"
  ];

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
    },
    {
      name: "Nicolas B",
      rating: 5,
      timeAgo: "31 May 2024",
      content: "Je recommande entièrement langues faciles ! Ayant effectué une formation rapide de 5 heures pour obtenir le TOEIC 4 skills et il a été très facile d'avoir le devis accepté par pôle emploi car ils ont pu me proposer une formation adaptée à un prix raisonnable qu'aucun centre de formation n'a pas me proposer. C'est une entreprise très professionnelle, réactive, à l'écoute et très efficace pour avoir des résultats en anglais.",
      avatar: "N"
    },
    {
      name: "Nathalie Attard",
      rating: 5,
      timeAgo: "11 Apr 2024",
      content: "Je suis ravie, formateurs de bonne qualité et natif du pays, parfait pour stages adulte ou enfants. Cours complets et adaptés aux horaires de chacun. Équipe administrative compétente et réactive avec une gérante arrangeante 😊",
      avatar: "N"
    },
    {
      name: "Sylvie Aman",
      rating: 5,
      timeAgo: "30 Mar 2024",
      content: "Équipe sérieuse, dynamique, apprentissages diverses proposés au top. J ai pris des cours d anglais dans le cadre de mon CPF avec Isabelle. C était un réel plaisir à chaque fois. Les 1h30 passaient très vite et grâce à ses cours de grande qualité j ai revu les bases qui sont essentielles, j ai vraiment progressé et pris confiance en moi. Les locaux sont parfaitement adaptés. Je recommande. J ai passé le Toeic et ai réussi à obtenir le score de 570. Ce qui est très bien n ayant pas passé d examens depuis 1995 ! Merci à toute l équipe et surtout à Isabelle",
      avatar: "S"
    },
    {
      name: "Sébastien Bodin",
      rating: 5,
      timeAgo: "1 Feb 2024",
      content: "Centre de formation vraiment sérieux. L'équipe est vraiment très pro, et le prof est vraiment pédagogue et à l'écoute des besoins. Je suis des cours d'anglais via mon CPF et je vois mes progrès à chaque cours. Je recommande vraiment ce centre de formation.",
      avatar: "S"
    },
    {
      name: "Alexandre Laufs",
      rating: 5,
      timeAgo: "49 weeks ago",
      content: "Je recommande Langue facile pour le passage du linguaskill, merci à Laura pour sa pédagogie et ses qualités d'English trainer.",
      avatar: "A"
    },
    {
      name: "Annie Boundou",
      rating: 5,
      timeAgo: "29 Mar 2024",
      content: "Très agréable. L'équipe est très à l'écoute et très accueillante. Moi je à l'aise dans mon apprentissage de l'anglais que je n'ai plus pratiqué depuis le collège il y a de cela plus de 30 ans.",
      avatar: "A"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header section */}
      <header className="bg-[#0367A6] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
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
        <div className="max-w-5xl mx-auto">
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

          {/* What you'll get section - centered above calendar */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
            <div className="text-center mb-8">
              <h3 className="font-semibold text-2xl text-[#0367A6] flex items-center gap-2 mb-6 justify-center">
                <PhoneCall className="h-6 w-6 text-[#F3AE02]" />
                Ce que vous obtiendrez
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#F3AE02]/30 hover:bg-[#F3AE02]/5 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#F3AE02] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendly section */}
          <div id="calendar-section" className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0367A6] mb-4">
                Réservez votre bilan linguistique gratuit
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Échangez avec l'un de nos conseillers pour discuter de vos besoins et objectifs spécifiques. 
                Nous vous aiderons à identifier la formation la plus adaptée à votre situation.
              </p>
            </div>
            
            {/* Calendly widget - standalone */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-8 w-8 text-[#0367A6]" />
                <h3 className="font-semibold text-xl text-[#0367A6]">Réserver mon bilan gratuit</h3>
              </div>
              <div 
                className="calendly-inline-widget w-full max-w-4xl" 
                data-url="https://calendly.com/languesfaciles/rendez-vous-avec-un-conseiller"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
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
                      {review.avatar || review.name.charAt(0)}
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

            {/* CTA to scroll back to calendar */}
            <div className="mt-12 text-center">
              <Button 
                onClick={scrollToCalendar}
                className="bg-[#F3AE02] hover:bg-[#0367A6] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2"
              >
                <ArrowUp className="h-5 w-5" />
                Réserver un bilan gratuit
              </Button>
            </div>
          </div>

          {/* Visit website button */}
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => window.open("https://www.languesfaciles.fr/", "_blank")}
              className="border-[#0367A6] text-[#0367A6] hover:bg-[#0367A6] hover:text-white"
            >
              Visitez notre site internet
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
