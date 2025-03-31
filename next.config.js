/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // For demo images
  },
  // Server Actions are available by default in Next.js 14+
}

module.exports = nextConfig
