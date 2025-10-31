import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Eye, FileText, TrendingUp, User, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CompanyDashboard = () => {
  const jobPostings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      status: "Active",
      applications: 45,
      views: 320,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Designer",
      status: "Active",
      applications: 32,
      views: 280,
      posted: "5 days ago",
    },
  ];
  
  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8900",
      position: "Senior Frontend Developer",
      experience: "5 years",
      status: "New",
      appliedDate: "2 days ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 234 567 8901",
      position: "Senior Frontend Developer",
      experience: "7 years",
      status: "Reviewed",
      appliedDate: "3 days ago",
    },
    {
      id: 3,
      name: "Emma Williams",
      email: "emma.w@email.com",
      phone: "+1 234 567 8902",
      position: "Product Designer",
      experience: "4 years",
      status: "Interview",
      appliedDate: "1 week ago",
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Company Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Manage your job postings and applications</p>
        </div>
        
        {/* Stats */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
                <p className="mt-2 text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="mt-2 text-3xl font-bold text-foreground">248</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                <Users className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Profile Views</p>
                <p className="mt-2 text-3xl font-bold text-foreground">1,452</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hire Rate</p>
                <p className="mt-2 text-3xl font-bold text-foreground">18%</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </Card>
        </div>
        
        <Tabs defaultValue="postings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="postings">Job Postings</TabsTrigger>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="candidates">Search Candidates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="postings" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Job Postings</h2>
              <Button variant="success">Post New Job</Button>
            </div>
            
            {jobPostings.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Posted {job.posted}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="ghost">Close</Button>
                  </div>
                </div>
                
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-2xl font-bold">{job.applications}</p>
                      <p className="text-sm text-muted-foreground">Applications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-2xl font-bold">{job.views}</p>
                      <p className="text-sm text-muted-foreground">Views</p>
                    </div>
                  </div>
                  <Button className="sm:col-start-3">View Applications</Button>
                </div>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="applicants" className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Applicants</h2>
            
            {applicants.map((applicant) => (
              <Card key={applicant.id} className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">
                      {applicant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{applicant.name}</h3>
                        <p className="text-sm text-muted-foreground">Applied for: {applicant.position}</p>
                      </div>
                      <Badge variant={
                        applicant.status === 'New' ? 'default' : 
                        applicant.status === 'Interview' ? 'default' : 
                        'secondary'
                      }>
                        {applicant.status}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{applicant.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{applicant.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{applicant.experience} experience</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                      <Button variant="success" size="sm">Accept</Button>
                      <Button variant="outline" size="sm">View Resume</Button>
                      <Button variant="ghost" size="sm">Reject</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="candidates" className="space-y-4">
            <h2 className="text-2xl font-bold">Search for Candidates</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground py-8">
                Candidate search feature coming soon...
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CompanyDashboard;