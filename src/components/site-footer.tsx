import { GitHubBanner } from "./github-banner"
import { ThemeToggle } from "./theme-toggle"

export function SiteFooter() {
  return (
    <>
      <GitHubBanner />
      <footer className="mt-6 flex flex-col items-center justify-between gap-4 border-t py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose md:text-left">
          Build with{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          .
        </p>
        <ThemeToggle />
      </footer>
    </>
  )
}
