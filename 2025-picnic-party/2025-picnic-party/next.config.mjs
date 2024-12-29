/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'test',
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  basePath:
    process.env.NODE_ENV === 'production' ? '/CWGV/2025-picnic-party/2025-picnic-party/test' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production'
  },
  trailingSlash: true
}

export default nextConfig
