import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal standalone server for smaller Docker images.
  output: "standalone",
};

export default nextConfig;
