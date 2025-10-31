import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Stats } from "@/components/home/Stats";
import { Categories } from "@/components/home/Categories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <FeaturedJobs />
      <Categories />
    </div>
  );
};

export default Index;