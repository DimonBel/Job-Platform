import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mail, Phone, Briefcase, Calendar, FileText } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-primary" />
          <div className="px-8 pb-8">
            <div className="relative -mt-16 flex flex-col sm:flex-row gap-6 items-start">
              <Avatar className="h-32 w-32 border-4 border-card">
                <AvatarFallback className="bg-secondary text-4xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 pt-16 sm:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">John Doe</h1>
                    <p className="mt-1 text-lg text-muted-foreground">Senior Frontend Developer</p>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
                
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">7 years experience</span>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="mb-4 text-xl font-bold">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionate frontend developer with 7 years of experience building scalable web applications.
                Specialized in React, TypeScript, and modern web technologies. I love creating beautiful,
                performant user interfaces and collaborating with cross-functional teams to deliver
                exceptional products.
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
                  <p className="text-muted-foreground">TechCorp Inc. • Full-time</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2021 - Present</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Leading frontend development for enterprise applications, mentoring junior developers,
                    and implementing modern React patterns.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-2xl">
                  💻
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Frontend Developer</h3>
                  <p className="text-muted-foreground">WebAgency • Full-time</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jun 2018 - Dec 2020</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Developed responsive web applications for various clients using React and Vue.js.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="applications">
            <Card className="p-6">
              <p className="text-center text-muted-foreground py-8">
                No applications yet. Start browsing jobs!
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <Card className="p-6">
              <p className="text-center text-muted-foreground py-8">
                No saved jobs yet. Save jobs to apply later!
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;