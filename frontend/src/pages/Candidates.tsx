import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

const Candidates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Browse Candidates</h1>
          <p className="mt-2 text-muted-foreground">Find talented professionals for your team</p>
        </div>
        
        <Card className="p-8">
          <p className="text-center text-muted-foreground">
            Candidate browsing feature coming soon...
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Candidates;