import Link from "next/link"
import { StarIcon } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Button } from "./ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function GitHubBanner() {
  return (
    <Card className="flex flex-col items-center justify-between bg-muted sm:flex-row">
      <CardHeader className="py-10 pb-4 text-center sm:px-10 sm:pb-10 sm:text-left">
        <CardTitle>Enjoying the content?</CardTitle>
        <CardDescription>
          If you find this website helpful, consider starring it on GitHub!
        </CardDescription>
      </CardHeader>
      <Button asChild className="mb-10 sm:mb-0 sm:mr-10">
        <Link href={siteConfig.links.github}>
          <StarIcon />
          Star on GitHub
        </Link>
      </Button>
    </Card>
  )
}
