/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // for github pages only
  reactStrictMode: true,
  images: { unoptimized: true } // for github pages only
};

export default nextConfig;
