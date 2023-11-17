"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
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
} from "@/registry/new-york/ui/dropdown-menu";
import { Button } from "@/registry/new-york/ui/button";
import { ThemeMenu } from "@/components/theme-menu";

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
                className="profile-image cursor-pointer"
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

            <DropdownMenuContent className="h-[430px] w-[280px]" align="end">
              <div className="flex items-center justify-start gap-2 p-1">
                <div className="flex flex-col space-y-1 leading-none">
                  <div className="flex gap-1 p-2">
                    <div className="flex flex-col gap-1">
                      {session?.user.name && (
                        <p className="font-medium">{session?.user.name}</p>
                      )}
                      {session?.user.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {session?.user.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-2" asChild>
                <Link href="/">
                  Dashboard
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="p-2" asChild>
                <Link href="create-job">
                  Create Job
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="p-2" asChild>
                <Link href="/forms">
                  Profile Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="p-2" asChild>
                <Link href="/FAQ">
                  FAQ
                  <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
             
              <DropdownMenuItem className="p-2" asChild>
                <Link href="/">
                  Command Menu
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              

              <ThemeMenu />
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer p-2"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                  push('/login');
                }}
               >
                Sign out
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="mt-2">
                <Link
                  href="/pricing"
                  target="_blank"
                  className="btn-primary m-auto h-8 w-full text-center"
                >
                  Upgrade to Pro
                </Link>
              </div>
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
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="btn-primary"
                  >
                    Sign in
                  </button>
                ))}
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
