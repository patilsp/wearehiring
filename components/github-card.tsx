import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import { FaEllipsisV, FaRegCalendarAlt, FaUserFriends } from "react-icons/fa"


import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Separator } from "@/registry/new-york/ui/separator"

export function DemoGithub() {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_20px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="mb-4 text-2xl font-semibold tracking-tight">Company Name</CardTitle>
          <CardDescription>
            <h1 className="mb-1 font-semibold leading-none tracking-tight">Junior UI-UX Designer</h1>
            <h3 className="mb-1 text-sm text-muted-foreground">Product Technology</h3>
          </CardDescription>
        </div>
        <div className="flex w-4 items-center  rounded-md bg-secondary text-secondary-foreground">
         
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <FaEllipsisV className="h-2 w-2 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className="mr-2 h-4 w-4" /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <FaRegCalendarAlt className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            1 Day Ago
          </div>
          <div className="flex items-center">
            <FaUserFriends className="mr-1 h-3 w-3" />
            100 Applied
          </div>
          
        </div>
      </CardContent>
    </Card>
  )
}
