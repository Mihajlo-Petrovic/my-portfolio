const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/my-portfolio/',
  publicPath: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/'
})
