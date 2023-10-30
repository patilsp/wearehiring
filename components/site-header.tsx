"use client";

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import Nav from "@/components/Nav"
import { motion } from "framer-motion"

export function SiteHeader() {
  return (
    <motion.div>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    
  
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1, delay: 1 }} 
      >
      
    
            <div className="flex h-14 w-full items-center justify-between gap-1 px-4 "> 
              <MobileNav />           
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <MainNav />              
                <div className="w-full flex-1 sm:flex md:w-auto md:justify-end">
                  <CommandMenu />
                </div>
                <nav className="flex items-center gap-2">
                  <Nav />
                </nav>
              </div>
            </div>
         
      </header>
      </motion.div>

  )
}
