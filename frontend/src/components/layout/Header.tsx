import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, User, Building2, LayoutDashboard } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">JobPortal</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/jobs" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/jobs') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Find Jobs
            </Link>
            <Link 
              to="/companies" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/companies') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Companies
            </Link>
            <Link 
              to="/candidates" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/candidates') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Candidates
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/admin">
              <Button variant="ghost" size="icon">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/company-dashboard">
              <Button variant="ghost" size="icon">
                <Building2 className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/post-job">
              <Button variant="success">Post a Job</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};