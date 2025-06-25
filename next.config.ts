import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/Personal-website',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  assetPrefix: '/Personal-website/', // Set the asset prefix for static files
};

export default nextConfig;