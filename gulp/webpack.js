/**
 * Created by Rayr Lee on 2017/12/9.
 */

let webpack = require('webpack'),
    webpackStream = require('webpack-stream');

module.exports = function (gulp, $) {
    gulp.task('webpack:dev', () => {
        return gulp.src('./src/app.js')
            .pipe($.plumber())
            .pipe(webpackStream(require('../conf/webpack.dev'), webpack))
            .pipe(gulp.dest('./dev'));
    });
}