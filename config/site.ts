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
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Customers",
      href: "/customers",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Tasks",
      href: "/tasks",
    },
     {
      title: "Settings",
      href: "/forms",
    },
  ],
  links: {
    twitter: "https://twitter.com/patilsp",
    github: "https://github.com/patilsp",
    docs: "https://ui.shadcn.com",
  },
}
