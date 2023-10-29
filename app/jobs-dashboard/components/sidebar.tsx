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
    <div className={cn("pb-12", className)}>
        <ScrollArea className="mb-2 h-[1200px]">
          <div className="sidebar space-y-4 py-4">
            <div className="px-2">
              {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Menu
              </h2> */}
              <ScrollArea className="h-[220px] px-1">
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Job Type
                </h2>
                <div className="p-1">
                  <FilterOne />
                </div>
              </ScrollArea>
              <ScrollArea className="h-[220px] px-1">
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Work Experience
                </h2>
                <div className="p-1">
                  <FilterTwo />
                </div>
              </ScrollArea>
              <ScrollArea className="h-[220px] px-1">
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Salary
                </h2>
                <div className="p-1">
                  <FilterThree />
                </div>
              </ScrollArea>
              
              <ScrollArea className="h-[220px] px-1">
                <h2 className="blue_gradient relative px-1 text-lg font-semibold tracking-tight">
                  Work Style
                </h2>
                <div className="p-1">
                  <FilterFour />
                </div>
              </ScrollArea>
            </div>
          </div>
        </ScrollArea>
    </div>
  )
}
