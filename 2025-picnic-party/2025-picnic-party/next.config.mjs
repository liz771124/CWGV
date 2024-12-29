/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'test', // 自定義輸出資料夾名稱
  output: 'export', // 啟用靜態匯出模式
  assetPrefix: './', // 使用相對路徑
  basePath: '', // 移除基礎路徑，避免硬編碼
  images: {
    unoptimized: true // 禁用 Next.js 內建圖片優化
  },
  trailingSlash: true // 確保路徑以 `/` 結尾，適合靜態伺服器
}

export default nextConfig
