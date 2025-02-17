const { IMAGE_DOMAINS } = require('./config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 图片域名配置
  images: {
    domains: IMAGE_DOMAINS,
  },

  // 静态资源前缀
  assetPrefix: '',
  
  // 应用基础路径
  basePath: '',

  // 重写资源请求路径
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/assets/:path*',
      },
    ];
  },

  // webpack 配置
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: '/_next',
          outputPath: 'static/images/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },

  // 自定义服务器配置
  serverRuntimeConfig: {
    staticFolder: '/public',
  },

  // 公共运行时配置
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
};

module.exports = nextConfig;
