const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    // 设置@为src; _c定位到src/components路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成sourceMap，减少打包体积
  productionSourceMap: false,
  devServer: {
    // 将未知请求都代理到这个url下，来满足跨域的请求
    proxy: 'http://localhost:4000'
  }
}
