/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'test',
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production'
  },
  trailingSlash: true
}

export default nextConfig
