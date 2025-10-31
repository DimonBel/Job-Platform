import { Card } from "@/components/ui/card";
import { Code, Palette, TrendingUp, Megaphone, Heart, ShoppingBag } from "lucide-react";

const categories = [
  { name: "Technology", icon: Code, jobs: 2500, color: "bg-blue-500" },
  { name: "Design", icon: Palette, jobs: 1200, color: "bg-purple-500" },
  { name: "Finance", icon: TrendingUp, jobs: 1800, color: "bg-green-500" },
  { name: "Marketing", icon: Megaphone, jobs: 1500, color: "bg-orange-500" },
  { name: "Healthcare", icon: Heart, jobs: 2000, color: "bg-red-500" },
  { name: "Sales", icon: ShoppingBag, jobs: 1600, color: "bg-indigo-500" },
];

export const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">Find jobs in your field of expertise</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4 p-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${category.color} text-white transition-transform group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.jobs} jobs available</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};