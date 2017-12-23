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
        path: path.resolve(__dirname, '../build'),
        filename: 'js/[name].[chunkhash:6].js'
    },
    module: {
        rules: rules
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/styles.[chunkhash:6].css'
        }),
        new HtmlWebapckPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../build/index.html'),
            inject: 'body'
        })
    ]
};