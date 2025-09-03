import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "naezj88dgh.ufs.sh", // 👈 yahi wala add karo
      },
    ],
  },
};

export default nextConfig;
