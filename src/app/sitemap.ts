import { type MetadataRoute } from "next"

import { hooksConfig } from "@/config/hooks"

export default function sitemap(): MetadataRoute.Sitemap {
  return hooksConfig.map((hook) => ({
    url: new URL(
      "/hook/" + hook.name,
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
        : "http://localhost:3000"
    ).href,
  }))
}
