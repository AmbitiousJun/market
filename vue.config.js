module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'pages': '@/pages',
        'network': '@/network'
      }
    },
    devServer: {
      // 代理跨域请求
      proxy: {
        '/api': {
          target: 'https://image.baidu.com',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  }
}