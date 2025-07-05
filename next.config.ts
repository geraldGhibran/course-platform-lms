import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hotmart.com',
      },
      {
        protocol: 'https',
        hostname: '**.teachablecdn.com',
      },
    ],
  },
  experimental: {
    dynamicIO: true,
    authInterrupts: true,
  },
}

export default nextConfig