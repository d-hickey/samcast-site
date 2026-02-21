import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static site – no Node.js server required at runtime
  output: "export",

  // Append trailing slashes so /ep1 → /ep1/ and output/ep1/index.html
  // This preserves the existing episode URL pattern (ep1/, ep2/, …)
  trailingSlash: true,

  // next/image optimisation requires a server; disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
