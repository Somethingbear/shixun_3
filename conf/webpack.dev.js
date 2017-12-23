/**
 * Created by Rayr Lee on 2017/12/9.
 */

const path = require('path'),
    HtmlWebapckPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    entry = require('./entry'),
    rules = require('./rules');

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    watch: true,
    module: {
        rules: rules
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/styles.css'
        }),
        new HtmlWebapckPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../dev/index.html'),
            inject: 'body'
        })
    ]
};