import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  },
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
    
    useCache: true,
    optimizePackageImports: ["@clerk/nextjs"], // Keep other useful experiments
  },
  
};

export default nextConfig;
