import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    logo: "🚀",
    tags: ["React", "TypeScript", "Remote"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignStudio",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90k - $130k",
    posted: "1 day ago",
    logo: "🎨",
    tags: ["Figma", "UI/UX", "Remote"],
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "GrowthLabs",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $110k",
    posted: "3 days ago",
    logo: "📊",
    tags: ["SEO", "Content", "Strategy"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Austin, TX",
    type: "Contract",
    salary: "$100k - $140k",
    posted: "5 days ago",
    logo: "☁️",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataMinds",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "1 week ago",
    logo: "🔬",
    tags: ["Python", "ML", "Analytics"],
  },
  {
    id: 6,
    title: "Sales Director",
    company: "SalesForce Pro",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$90k - $120k",
    posted: "4 days ago",
    logo: "💼",
    tags: ["B2B", "SaaS", "Leadership"],
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Jobs</h2>
            <p className="mt-2 text-muted-foreground">Discover opportunities from top companies</p>
          </div>
          <Link to="/jobs">
            <Button variant="outline">View All Jobs</Button>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-hover animate-fade-in"
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="font-semibold text-primary">{job.salary}</span>
                  <Button size="sm" variant="default">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};