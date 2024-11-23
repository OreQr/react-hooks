import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["."],
  },
}

export default nextConfig
