import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Find Your Dream Job
          </h1>
          <p className="mb-10 text-lg text-white/90 md:text-xl">
            Connect with thousands of companies hiring right now. Your next career move starts here.
          </p>
          
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-4 shadow-2xl animate-scale-in">
            <div className="grid gap-3 md:grid-cols-[2fr,1fr,auto]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  className="h-12 pl-10 border-0 bg-secondary"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="City or remote" 
                  className="h-12 pl-10 border-0 bg-secondary"
                />
              </div>
              
              <Button variant="hero" size="lg" className="h-12 px-8">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span>Popular searches:</span>
            {['Developer', 'Designer', 'Marketing', 'Sales'].map((tag) => (
              <button
                key={tag}
                className="rounded-full bg-white/10 px-4 py-1.5 transition-all hover:bg-white/20 hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};