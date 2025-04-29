
import { Users, GraduationCap, UserCheck } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      value: "+15",
      label: "formations certifiantes"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      value: "25",
      label: "formateurs professionnels"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "+6400",
      label: "personnes formées"
    }
  ];

  return (
    <section className="bg-[#2463EB] py-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {stat.icon}
              <div className="mt-3 text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
