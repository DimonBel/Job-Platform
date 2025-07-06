// "use client"

// import { SidebarIcon } from "lucide-react"

// import { SearchForm } from "@/components/search-form"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { useSidebar } from "@/components/ui/sidebar"

// export function SiteHeader() {
//   const { toggleSidebar } = useSidebar()

//   return (
//     <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
//       <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
//         <Button
//           className="h-8 w-8"
//           variant="ghost"
//           size="icon"
//           onClick={toggleSidebar}
//         >
//           <SidebarIcon />
//         </Button>
//         <Separator orientation="vertical" className="mr-2 h-4" />
//         <Breadcrumb className="hidden sm:block">
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink href="#">
//                 Building Your Application
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             {/* <BreadcrumbSeparator /> */}
//             <BreadcrumbItem>
//               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//         <SearchForm className="w-full sm:ml-auto sm:w-auto" />
//       </div>
//     </header>
//   )
// }

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SearchForm } from "@/components/search-form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium ">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <SearchForm className="w-full sm:ml-auto sm:w-auto" />
          </Button>
        </div>
      </div>
    </header>
  )
}