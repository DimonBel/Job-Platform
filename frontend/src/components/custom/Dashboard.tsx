import { FindJobCard } from "@/components/custom/card-job";
import { FeaturedJobs } from "@/components/custom/FeaturedJobs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Dashboard() {
  return (
    <>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <FindJobCard />
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
        <FeaturedJobs />
      </div>
    </>
  );
} 