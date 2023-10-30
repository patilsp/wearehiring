"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"


export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image 
          src="/images/logo.png"
          height="50"
          width="50"
          alt="logo"
         />
      </Link>
      <nav className="nav-link flex items-center space-x-6 text-sm font-bold">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Find Job
        </Link>
        {/* <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link> */}
        <Link
          href="/applications"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Applications
        </Link>
        <Link
          href="/companies"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/companies" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Companies
        </Link>
        <Link
          href="/jobs-dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/messages" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Hire
        </Link>
        <Link
          href="/forms"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/forms" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Settings
        </Link>
      </nav>
    </div>
  )
}
