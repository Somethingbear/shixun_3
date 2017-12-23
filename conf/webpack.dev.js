/**
 * Created by Rayr Lee on 2017/12/9.
 */

const path = require('path'),
    HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: 'js/[name].js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../dev/index.html'),
            inject: 'body'
        })
    ]
};