
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const trainers = [
  {
    name: "Daniel",
    role: "formateur Anglais",
    image: "/lovable-uploads/60ed4426-dd0b-4e8f-899a-7d7cbc314aae.png"
  },
  {
    name: "Marianne",
    role: "formatrice Anglais",
    image: "/lovable-uploads/3c0c869a-0b87-4fc5-8037-9c0e3115aca6.png"
  },
  {
    name: "Christopher",
    role: "formateur Anglais",
    image: "/lovable-uploads/8954298d-388f-4d0d-94fa-5bb1e710e473.png"
  },
  {
    name: "Evan",
    role: "formateur Anglais",
    image: "/lovable-uploads/9c394211-7bd3-419a-af12-91c652724f25.png"
  }
];

export default function TrainersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Notre équipe de formateurs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
                <AvatarImage src={trainer.image} alt={trainer.name} />
              </Avatar>
              <h3 className="font-semibold text-gray-800">{trainer.name}</h3>
              <p className="text-sm text-gray-600">{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
