/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const jsFileName = 'js/[name].[hash].js'
const cssFileName = 'css/[name].[hash].css'
const resolve = dir => path.join(__dirname, dir)
const inProduction = process.env.NODE_ENV === 'production'

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
            '^/api': {
                // target: 'http://10.23.230.29:8101',
                target: 'https://uat-yunpan.bilibili.co',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': '',
                // },
            },
            '^/bossapi': {
                target: 'http://uat-boss.bilibili.co',
                changeOrigin: true,
                pathRewrite: {
                    '^/bossapi': '',
                },
            },
        },
    },
    transpileDependencies: ['vuex-module-decorators'],
    css: {
        extract: inProduction
            ? {
                  filename: cssFileName,
                  chunkFilename: cssFileName,
              }
            : undefined,
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    chainWebpack: config => {
        config.module.rules.delete('svg') // 重点：删除默认配置中的svg
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include.add(resolve('src/asset/svg')) // 处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
        config.output.filename(jsFileName)
        config.output.chunkFilename(jsFileName)
        config
            .plugin('context')
            .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
        config.resolve.alias
            .set('@', resolve('src'))
            .set('view', resolve('src/view'))
            .set('style', resolve('src/style'))
            .set('util', resolve('src/util'))
            .set('asset', resolve('src/asset'))
            .set('api', resolve('src/api'))
            .set('store', resolve('src/store'))
            .set('lib', resolve('src/lib'))
            .set('type', resolve('src/type'))
            .set(
                '@ant-design/icons-svg/es/asn/CheckCircleFilled',
                resolve('src/asset/svg/ant/CheckCircleFilled')
            )
            .set(
                '@ant-design/icons-svg/es/asn/ExclamationCircleFilled',
                resolve('src/asset/svg/ant/ExclamationCircleFilled')
            )
            .set(
                '@ant-design/icons-svg/es/asn/CloseCircleFilled',
                resolve('src/asset/svg/ant/CloseCircleFilled')
            )
            .set(
                '@ant-design/icons-svg/es/asn/DownOutlined',
                resolve('src/asset/svg/ant/DownOutlined')
            )
            .set(
                '@ant-design/icons-svg/es/asn/RightOutlined',
                resolve('src/asset/svg/ant/RightOutlined')
            )
            .set(
                '@ant-design/icons-svg/es/asn/CaretDownOutlined',
                resolve('src/asset/svg/ant/CaretDownOutlined')
            )
            .set(
                '@ant-design/icons-svg/es/asn/CaretUpOutlined',
                resolve('src/asset/svg/ant/CaretUpOutlined')
            )
    },
    productionSourceMap: false,
}
