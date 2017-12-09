/**
 * Created by Rayr Lee on 2017/12/9.
 */

var webpack = require('webpack'),
    webpackStream = require('webpack-stream');

module.exports = function (gulp, $) {
    gulp.task('webpack', () => {
        return gulp.src('./src/app.js')
            .pipe(webpackStream(require('../conf/webpack.dev'), webpack))
            .pipe(gulp.dest('./build'));
    });
}