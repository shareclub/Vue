//webpack配置文件
const path = require('path');

//导入插件
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'  //指定生成的文件名
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}