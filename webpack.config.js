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
            {test: /\.css$/,use: ['style-loader','css-loader']},  //处理css的loader
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},  //处理less的loader
            {test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']},  //处理scss的loader
            {test: /\.(jpg|png|gif|jpeg|bmp)$/,use: ['url-loader?limit=47408&name=[hash:8]-[name].[ext]']},  //处理url图片的loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'}  //处理字符文件的loader
        ]
    }
}