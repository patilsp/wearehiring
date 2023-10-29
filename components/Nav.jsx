"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Button } from "@/registry/new-york/ui/button"

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between flex w-full">
      <div className="relative flex">
      
        {session?.user ? (
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="profile-image"
                >

          <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                  onHover={() => setToggleDropdown(!toggleDropdown)}
                />
                 </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
            <motion.div
                  className="profile-info"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
              <div className="flex flex-col space-y-1">
                <div className="flex-start me-2 flex">

                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                  onHover={() => setToggleDropdown(!toggleDropdown)}
                />
                <div className="ml-2 py-1">
                  <p className="mb-1 text-sm font-medium leading-none">  {session?.user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                  {session?.user.email}
                  </p>
                </div>
                </div>
              </div>
              </motion.div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
           
              <div className="py-1" role="none">
                  <DropdownMenuItem>
               
                     <Link href="/create-prompt" className="">
                       Create Customer
                     </Link>
                
                   </DropdownMenuItem>
                   <DropdownMenuItem>
                     <Link
                       href="/"
                       className="dropdown_link"
                       onClick={() => setToggleDropdown(false)}
                     >
                       Dashboard
                     </Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                     <Link
                       href="/profile"
                       className="dropdown_link"
                       onClick={() => setToggleDropdown(false)}
                     >
                       My Profile
                     </Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                     <Link
                       href="settings"
                       className="dropdown_link"
                       onClick={() => setToggleDropdown(false)}
                     >
                       My Settings
                     </Link>
                     </DropdownMenuItem>
                 </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className=""
              >
                Sign Out
              </button>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        ) : (
          <>
            <motion.div
                  className="profile-info"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className=""
                >
                  Sign in
                </Button>
              ))}
              </motion.div> 
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
