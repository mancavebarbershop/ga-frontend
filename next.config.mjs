/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "ga-backend-production.up.railway.app",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
