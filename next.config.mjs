/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  experimental: {
    // Moved back inside experimental to resolve the validation error
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;