import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.salaryse.com",
      },
    ],
  },
};

export default nextConfig;
