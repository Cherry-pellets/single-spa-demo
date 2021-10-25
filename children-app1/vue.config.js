module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue',
            libraryTarget: 'umd',
        },
        devServer: {
            port: 10002
        }
    }
}
//相当于导出 window.singleVue.bootstrap