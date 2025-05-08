
import { MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marie L.",
    content:
      "Excellents formateurs, ambiance conviviale et résultats rapides ! J'ai validé mon TOEIC du premier coup.",
  },
  {
    name: "Julien D.",
    content:
      "Méthode très adaptée à mes besoins, suivi personnalisé et équipe au top. CPF pris en charge facilement.",
  },
  {
    name: "Sophie B.",
    content:
      "J'ai repris confiance à l'oral. Les ateliers de conversation sont un vrai plus !",
  },
  {
    name: "Flora",
    content:
      "Centre de formation très professionnel, très bon suivi et très bonne expérience.",
  },
  {
    name: "Aïcha",
    content:
      "Un service irréprochable, humain et très efficace. Mme Caldas a été d'un grand soutien dans ma démarche : elle m'a guidée, encouragée et permis d'accélérer tout le processus. Je ne l'oublierai pas. Merci infiniment !",
  },
  {
    name: "Mélanie",
    content:
      "J'ai passé la certification LILATE avec Langues Faciles et tout s'est très bien déroulé. Je conseille vivement cette école si vous voulez prendre des cours particuliers en anglais ou bien passer une certification.",
  },
  {
    name: "Léo",
    content:
      "L'équipe Langues Faciles est réactive et efficace. J'ai pu bénéficier d'un accompagnement de qualité pour le TOEIC.",
  },
];

export default function TestimonialsSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-14 bg-gradient-to-br from-violet-100 via-blue-50 to-white font-sans">
      <div className="container max-w-3xl mx-auto px-4">
        {isMobile ? (
          <div className="flex flex-col items-center mb-6">
            <span role="img" aria-label="groupe" className="text-2xl mb-3">👥</span>
            <h2 className="text-3xl font-bold text-center text-[#0367A6]">
              +6 400 personnes formées depuis 2019
            </h2>
          </div>
        ) : (
          <h2 className="text-3xl font-bold text-center text-[#0367A6] mb-12 flex items-center justify-center gap-2">
            <span role="img" aria-label="groupe" className="text-2xl">👥</span>
            +6 400 personnes formées depuis 2019
          </h2>
        )}
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className={isMobile ? "basis-full" : "md:basis-1/3 lg:basis-1/3"}>
                <div className="bg-white rounded-xl p-6 shadow animate-fade-in flex flex-col items-center h-full">
                  <MessageSquare className="text-blue-400 mb-3" size={32} />
                  <div className="mb-2">
                    <span className="text-yellow-400 text-lg" aria-label="5 étoiles">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="italic text-gray-700 mb-4 text-center flex-grow">{t.content}</p>
                  <span className="font-semibold text-blue-700 mt-auto">{t.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-white" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-white" />
            </>
          )}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none bg-white h-8 w-8 mr-2" />
              <CarouselNext className="static transform-none bg-white h-8 w-8 ml-2" />
            </div>
          )}
        </Carousel>
      </div>
    </section>
  );
}
