export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "We Are Hiring",
  description:
    "Job Portal",
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
  links: {
    twitter: "https://twitter.com/patilsp",
    github: "https://github.com/patilsp",
    docs: "https://ui.shadcn.com",
  },
}
