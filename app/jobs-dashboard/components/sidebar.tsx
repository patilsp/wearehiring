import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

import { Playlist } from "../data/playlists"

import { FilterOne } from "../data/filterone"
import { FilterTwo } from "../data/filtertwo"
import { FilterThree } from "../data/filterthree"
import { FilterFour } from "../data/filterfour"


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("w-[240px] pb-8", className)}>
        <ScrollArea className="mb-2 h-[700px]">
          <div className="space-y-4 py-4">
            <div className="px-2">
        
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Job Type
                </h2>
                <div className="p-1">
                  <FilterOne />
                </div>
            
              
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Work Experience
                </h2>
                <div className="p-1">
                  <FilterTwo />
                </div>
             
              
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Salary
                </h2>
                <div className="p-1">
                  <FilterThree />
                </div>
              
              
              
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Work Style
                </h2>
                <div className="p-1">
                  <FilterFour />
                </div>
             
            </div>
          </div>
        </ScrollArea>
    </div>
  )
}
