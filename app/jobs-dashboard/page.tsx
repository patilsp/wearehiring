import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"
import JobFeeds from "@/components/JobFeed"
import { DemoGithub } from "@/components/github-card"

export default function MusicPage() {
  return (
    <>   
      <div className="md:block">
        {/* <Menu /> */}
        <div className="bg-slate-100 p-2 ">
          <div className="sidebar-right flex w-full justify-between gap-10 rounded-md border-t bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="container col-span-3 mt-4 pr-0  lg:col-span-4">
                <div className="h-full px-2">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList className="ml-2 gap-2">
                        <TabsTrigger value="music" className="relative px-11">
                          New
                        </TabsTrigger>
                        <TabsTrigger value="podcasts" className="px-11">Treading</TabsTrigger>
                        <TabsTrigger value="live" className="px-11">
                          Saved
                        </TabsTrigger>
                        <TabsTrigger value="live" className="px-11">
                          Applied
                        </TabsTrigger>
                        <TabsTrigger value="live" className="px-11">
                          Viewed
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                     
                     <JobFeeds />
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Jobs
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite jobs. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
            </div>
            <div className="sidebar_right sidebar-right  mt-2 h-full max-w-xs">
                <div className="mb-4 rounded-md border bg-card text-card-foreground shadow">
                        <h1 className="p-1 text-xl font-bold"> Suggested Jobs </h1>  
                    </div>
                <div className="mb-10 flex flex-col items-center justify-center gap-4 [&>div]:w-full">
                  
                        <DemoGithub />                  
                        <DemoGithub />
                        <DemoGithub />
                        <DemoGithub />
                  
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
