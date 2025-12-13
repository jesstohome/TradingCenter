module.exports = {
    publicPath: './',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
       //自己公司项目自己配置哈
       proxy: {
        '/api': {
            target: '/',
            changeOrigin: true,
            // pathRewrite: {
            //   '^/api': ''
            // }
        },
        '/upload': {
          target: '/',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api': ''
          // }
        },
        '/US.json': {
          target: 'https://www.mycurrency.net/',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api': ''
          // }
        }
      }
    }
  }