const config = {
  development: {
    API_BASE_URL: 'http://localhost:3010',
    STATIC_URL: 'http://localhost:3010',
    IMAGE_DOMAINS: ['localhost', 'cdn.ljaym.com'],
  },
  production: {
    API_BASE_URL: 'https://api.ljaym.com',  // 生产环境 API 地址
    STATIC_URL: 'https://cdn.ljaym.com',    // 生产环境静态资源地址
    IMAGE_DOMAINS: ['cdn.ljaym.com'],       // 生产环境图片域名
  }
};

const env = process.env.NODE_ENV || 'development';
const currentConfig = config[env];

// 改用 CommonJS 导出语法
module.exports = {
  API_BASE_URL: currentConfig.API_BASE_URL,
  STATIC_URL: currentConfig.STATIC_URL,
  IMAGE_DOMAINS: currentConfig.IMAGE_DOMAINS,
  default: currentConfig
}; 