import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur dark:supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          React Hooks
        </Link>
        <nav className="flex gap-4">
          <Button asChild size="icon" variant="ghost">
            <Link href={siteConfig.links.github} target="_blank">
              <Icons.gitHub className="size-5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
