/**
 * Created by Rayr Lee on 2017/12/9.
 */

let webpack = require('webpack'),
    webpackStream = require('webpack-stream');

module.exports = function (gulp, $, NODE_ENV) {
    gulp.task(`webpack:${NODE_ENV}`, () => {
        return gulp.src('./src/app.js')
            .pipe($.plumber())
            .pipe(webpackStream(require(`../conf/webpack.${NODE_ENV}`), webpack))
            .pipe(gulp.dest(`./${NODE_ENV}`));
    });
}