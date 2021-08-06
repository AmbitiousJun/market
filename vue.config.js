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
    }
  }
}