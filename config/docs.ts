// config/docs.ts
import { NavItem } from "types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Find Job",
      href: "/jobs-dashboard",
    },
    {
      title: "Companies",
      href: "/customers",
    },
    {
      title: "Applications",
      href: "/Applications",
    },
    {
      title: "Hire",
      href: "/jobs-dashboard",
    },
     {
      title: "Settings",
      href: "/forms",
    },
    {
      title: "FAQ",
      href: "/",
    },
    {
      title: "User Settings",
      href: "/forms",
    },
    
  ],
  sidebarNav: [
    {
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Settings",
          href: "/forms",
        },
        {
          title: "Sign Up",
          href: "/sign-up",
        },
        // ... other sidebarNav sub-items ...
      ],
    },
    // ... other sidebarNav items ...
  ],
};
