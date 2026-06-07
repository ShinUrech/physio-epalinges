import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Prefer AVIF (≈20-30% smaller than WebP), fall back to WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
