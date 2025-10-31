import { TrendingUp } from "lucide-react";

const stats = [
  { label: "Active Jobs", value: "10,000+", icon: "💼" },
  { label: "Companies", value: "5,000+", icon: "🏢" },
  { label: "Candidates", value: "50,000+", icon: "👥" },
  { label: "Success Rate", value: "95%", icon: "🎯" },
];

export const Stats = () => {
  return (
    <section className="bg-gradient-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 text-4xl">{stat.icon}</div>
              <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};