/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL,
    outputDir: 'build',
    assetsDir: 'static',
    indexPath: 'index.html',
    devServer: {
        disableHostCheck: true,
        port: 8080,
        open: true,
        hot: true,
        proxy: {
            '/api': {
              // TODO
                target: 'http://uat-flow-information.bilibili.co',
                changeOrigin: true,
            },
        },
    },
    css: {},
    chainWebpack: config => {
        config
            .plugin('context')
            .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
        config.resolve.alias.set('@', resolve('src'))
    },
}
