import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-4 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20">
        <p className="pt-8 text-center text-sm font-bold leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Santosh Patil
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
