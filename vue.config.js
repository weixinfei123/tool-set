/** @format */

const path = require('path');
// 项目名称
const projectName = 'toolSet';
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: true, // 仅仅在dev环境使用SourceMap
  assetsDir: 'static', // 打包静态资源目录
  outputDir: projectName, // 打包输出目录 默认dist
  publicPath: '/' + projectName + '/',
  chainWebpack: (config) => {
    // 配置入口( 兼容 es6 es7 )
    config.entry.app = './src/main.js';
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('utils', resolve('src/utils'));
  },
  configureWebpack: (config) => {
    //警告 webpack 的性能提示 关闭文件大小的警告
    config.performance = {
      hints: false
    };
  },
  devServer: {
    port: 3002
    // proxy: 'http://localhost:3001',
    // public: '172.17.5.190:3001/cluePushWeb/'  // 本地ip
    // disableHostCheck: true,
    // proxy: {
    //   '/cluePush': {
    //     target: 'http://172.17.5.186:8015',
    //     // ws: false,
    //     secure: false,
    //     changeOrigin: true,
    //     // pathRewrite: {
    //     //   '^/': '/bpp/'
    //     // }
    //   }
    // }
  }
};
