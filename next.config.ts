import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mapas/:slug",
        destination: "/mapas/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
