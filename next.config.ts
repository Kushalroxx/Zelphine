import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix: tell Next.js the correct workspace root to avoid picking up
  // the stray package-lock.json at C:\Users\benug\
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        // This is your Project ID from the error log.
        // This makes it *even more* secure.
        pathname: '/images/ccxe30rb/production/**', 
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/djfquzcwz/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
