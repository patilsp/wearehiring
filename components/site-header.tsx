"use client";

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import Nav from "@/components/Nav"
import Image from "next/image"

export function SiteHeader() {
  return (   
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 w-full items-center justify-between gap-1 px-4 "> 
          <MobileNav /> 
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/images/logo.png"
              height="50"
              width="50"
              alt="logo"
            />
          </Link>          
          <div className="m-auto flex w-full items-center justify-center">
            <MainNav />              
            <div className="mr-2 w-full sm:flex md:hidden md:w-auto md:justify-end">
              <CommandMenu />
            </div>
            
          </div>
           <div className="flex md:w-auto md:justify-end">
              <Nav />
            </div>
        </div>      
      </header>


  )
}
