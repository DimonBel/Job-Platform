import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Briefcase } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "TechCorp Inc.",
    logo: "🚀",
    location: "San Francisco, CA",
    employees: "500-1000",
    openJobs: 12,
    industry: "Technology",
    description: "Leading software company building innovative solutions...",
  },
  {
    id: 2,
    name: "DesignStudio",
    logo: "🎨",
    location: "New York, NY",
    employees: "50-100",
    openJobs: 5,
    industry: "Design",
    description: "Award-winning design agency creating beautiful experiences...",
  },
  // Add more companies...
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Companies</h1>
          <p className="mt-2 text-muted-foreground">Explore top companies and their open positions</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Card key={company.id} className="group cursor-pointer overflow-hidden transition-all hover:shadow-hover">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary text-3xl">
                    {company.logo}
                  </div>
                  <Badge variant="secondary">{company.openJobs} jobs</Badge>
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {company.description}
                </p>
                
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{company.employees} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{company.industry}</span>
                  </div>
                </div>
                
                <Button className="mt-4 w-full" variant="outline">
                  View Company
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Companies;