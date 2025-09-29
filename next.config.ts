import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    "/*": ["./src/registry/**/*"],
  },
};

export default nextConfig;
