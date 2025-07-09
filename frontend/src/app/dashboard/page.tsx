import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { FindJobCard } from "@/components/custom/card-job"
import { Dashboard } from "@/components/custom/Dashboard";
export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default function Page() {
  return (

    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          {/* <AppSidebar /> */}
          <SidebarInset>
            <Dashboard />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
