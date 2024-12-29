/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '.', // 使用相對路徑來處理資源
  images: {
    // 本地圖片與第三方圖片來源混用
    unoptimized: true, // 禁用 Next.js 內建圖片優化（適用於靜態匯出）
    domains: ['imgs.cwgv.com.tw'] // 允許外部圖片來源
  },
  trailingSlash: true // 確保靜態路徑末尾有 `/`
}

export default nextConfig
