import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
};

export default nextConfig;
