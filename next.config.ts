import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Prefer AVIF (≈20-30% smaller than WebP), fall back to WebP.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires whitelisting any non-default quality (default is [75]).
    // 60 is used for decorative images (e.g. the low-opacity hero background).
    qualities: [60, 75],
  },
  // Long-lived caching for static media in /public/gallery (images, posters,
  // exercise/gallery videos). These are not content-hashed, so cache-bust by
  // renaming a file if you ever replace it in place.
  async headers() {
    return [
      {
        source: "/gallery/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
