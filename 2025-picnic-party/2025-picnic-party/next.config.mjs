/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/CWGV/2025-picnic-party/', // 根據你的 GitHub Pages 路徑設定
  basePath: '/CWGV/2025-picnic-party', // 同樣設定為專案路徑
  images: {
    unoptimized: true, // 禁用 Next.js 內建圖片優化
    domains: ['imgs.cwgv.com.tw'] // 外部圖片來源
  },
  trailingSlash: true // 確保靜態路徑末尾有 `/`
}

export default nextConfig
