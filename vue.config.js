// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')//确定icon所在的目录
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)//以.svg结尾的
      .include.add(dir).end()//只包含icons目录走这个规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
};

