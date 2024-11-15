/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // for github pages only
  reactStrictMode: true,
  images: {
    unoptimized: true, // for github pages only
    domains: ["cdn.builder.io"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
