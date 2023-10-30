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
export default function MusicPage() {
  return (
    <>   
      <div className="md:block">
        {/* <Menu /> */}
        <div className="mt-4">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="container col-span-3 lg:col-span-4">
                <div className="h-full px-2">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList className="gap-2">
                        <TabsTrigger value="music" className="relative px-10">
                          New
                        </TabsTrigger>
                        <TabsTrigger value="podcasts2" className="px-10">Treading</TabsTrigger>
                        <TabsTrigger value="live" className="px-10">
                          Saved

                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto hidden md:block">
                        <Link href="create-job">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                           Add New
                        </Button>
                        </Link>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="hidden space-y-1 md:block">
                          <h2 className="blue_gradient text-2xl font-semibold tracking-tight">
                            Recommended Jobs
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                     <JobFeeds />
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
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
          </div>
        </div>
      </div>
    </>
  )
}
