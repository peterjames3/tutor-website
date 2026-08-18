import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "placehld.co",
      },
    ],
  },
};

export default nextConfig;
