/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 自定义服务器配置
  server: {
    // 指定端口号
    port: 3010, // 例如，将端口号设置为 3001
  }
}

module.exports = nextConfig
