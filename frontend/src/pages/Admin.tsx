import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Briefcase, Building2, TrendingUp, 
  MoreVertical, CheckCircle, XCircle, AlertCircle 
} from "lucide-react";

const Admin = () => {
  const stats = [
    { label: "Total Users", value: "52,431", change: "+12%", icon: Users, color: "bg-blue-500" },
    { label: "Active Jobs", value: "10,245", change: "+8%", icon: Briefcase, color: "bg-green-500" },
    { label: "Companies", value: "5,120", change: "+15%", icon: Building2, color: "bg-purple-500" },
    { label: "Applications", value: "248,932", change: "+23%", icon: TrendingUp, color: "bg-orange-500" },
  ];
  
  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@email.com", role: "Job Seeker", status: "Active", joined: "2 days ago" },
    { id: 2, name: "Jane Smith", email: "jane@company.com", role: "Employer", status: "Active", joined: "5 days ago" },
    { id: 3, name: "Mike Johnson", email: "mike@email.com", role: "Job Seeker", status: "Pending", joined: "1 week ago" },
  ];
  
  const pendingJobs = [
    { id: 1, title: "Senior Developer", company: "TechCorp", posted: "1 day ago", status: "Pending" },
    { id: 2, title: "Product Manager", company: "StartupXYZ", posted: "2 days ago", status: "Pending" },
    { id: 3, title: "UI/UX Designer", company: "DesignHub", posted: "3 days ago", status: "Pending" },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Manage users, jobs, and platform analytics</p>
        </div>
        
        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-sm text-success">{stat.change} from last month</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button variant="outline">Export Data</Button>
            </div>
            
            <Card>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="pb-3 font-medium">Name</th>
                        <th className="pb-3 font-medium">Email</th>
                        <th className="pb-3 font-medium">Role</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Joined</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b last:border-0">
                          <td className="py-4">{user.name}</td>
                          <td className="py-4 text-muted-foreground">{user.email}</td>
                          <td className="py-4">
                            <Badge variant="secondary">{user.role}</Badge>
                          </td>
                          <td className="py-4">
                            <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-4 text-muted-foreground">{user.joined}</td>
                          <td className="py-4">
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="jobs" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Job Postings Management</h2>
              <div className="flex gap-2">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Export</Button>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">8,432</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-orange-500" />
                  <div>
                    <p className="text-2xl font-bold">127</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <div>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Rejected</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card>
              <div className="p-6">
                <h3 className="mb-4 font-semibold">Pending Approval</h3>
                <div className="space-y-4">
                  {pendingJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company} • {job.posted}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="success">
                          <CheckCircle className="mr-1 h-4 w-4" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="mr-1 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="companies" className="space-y-4">
            <h2 className="text-2xl font-bold">Companies</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground py-8">
                Company management interface coming soon...
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-2xl font-bold">Platform Analytics</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground py-8">
                Advanced analytics dashboard coming soon...
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;