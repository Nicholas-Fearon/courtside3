/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disabling Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
