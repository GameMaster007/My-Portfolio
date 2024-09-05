/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update this to match your repository name
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio/',
}

module.exports = nextConfig
