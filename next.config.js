/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages deployment
  // Replace 'your-repo-name' with the name of your GitHub repository
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
}

module.exports = nextConfig