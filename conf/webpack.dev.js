/**
 * Created by Rayr Lee on 2017/12/9.
 */

const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'js/[name].js'
    },
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
    }
};