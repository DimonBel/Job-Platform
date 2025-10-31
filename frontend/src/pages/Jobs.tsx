import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Briefcase, Clock, Bookmark, Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const allJobs = [
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
    description: "We're looking for an experienced frontend developer...",
  },
  // ... more jobs would be here
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <Card className="mb-8 p-6 shadow-lg">
          <div className="grid gap-4 md:grid-cols-[2fr,1fr,auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Job title, keywords, or company" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="City or remote" 
                className="pl-10"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <Button size="lg">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </Card>
        
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Filters</h3>
              </div>
              
              <div className="space-y-6">
                {/* Job Type */}
                <div>
                  <h4 className="mb-3 font-medium text-sm">Job Type</h4>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Freelance'].map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm cursor-pointer">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Salary Range */}
                <div>
                  <h4 className="mb-3 font-medium text-sm">Salary Range</h4>
                  <Slider defaultValue={[50]} max={200} step={10} />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>$0k</span>
                    <span>$200k+</span>
                  </div>
                </div>
                
                <Separator />
                
                {/* Experience Level */}
                <div>
                  <h4 className="mb-3 font-medium text-sm">Experience Level</h4>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map((level) => (
                      <div key={level} className="flex items-center gap-2">
                        <Checkbox id={level} />
                        <label htmlFor={level} className="text-sm cursor-pointer">{level}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">Clear Filters</Button>
              </div>
            </Card>
          </aside>
          
          {/* Job Listings */}
          <div className="space-y-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {allJobs.length} Jobs Found
              </h2>
              <select className="rounded-md border bg-card px-4 py-2">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>
            </div>
            
            {allJobs.map((job) => (
              <Card 
                key={job.id} 
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-hover"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary text-3xl">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-muted-foreground">{job.company}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{job.salary}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <Button variant="default" className="flex-1">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;