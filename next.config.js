/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // for github pages only
  images: {
    domains: ["cdn.builder.io"],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
