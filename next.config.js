/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinifyMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [`res.cloudinary.com`],
  },
};

module.exports = nextConfig;
