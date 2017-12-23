/**
 * Created by Rayr Lee on 2017/12/23.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
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
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader'
                }
            ]
        })
    },
    {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        })
    }
]