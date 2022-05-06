const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // 更改入口
/*   pages: {
    index: {
      entry: 'src/nick.js'
    }
  } */
  lintOnSave: false // 关闭语法检查
}
