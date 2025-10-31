import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostJob = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Post a Job</h1>
            <p className="mt-2 text-muted-foreground">Fill in the details to create your job posting</p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input id="title" placeholder="e.g. Senior Frontend Developer" />
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="e.g. San Francisco, CA or Remote" />
                </div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type *</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="min-salary">Min Salary ($)</Label>
                  <Input id="min-salary" type="number" placeholder="80000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-salary">Max Salary ($)</Label>
                  <Input id="max-salary" type="number" placeholder="120000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the role, responsibilities, and requirements..." 
                  className="min-h-[200px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="List the key requirements and qualifications..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits</Label>
                <Textarea 
                  id="benefits" 
                  placeholder="Health insurance, 401k, remote work, etc..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Skills/Tags (comma-separated)</Label>
                <Input id="tags" placeholder="React, TypeScript, Node.js" />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="success" className="flex-1">
                  Post Job
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PostJob;