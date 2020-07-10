var path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                src: path.resolve(__dirname, './src')
            }
        },
    }
}
