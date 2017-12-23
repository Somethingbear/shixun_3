/**
 * Created by Rayr Lee on 2017/12/23.
 */

module.exports = function (gulp, $) {
    gulp.task('clean:dev', () => {
        return gulp.src('./dev')
            .pipe($.clean())
    });

    gulp.task('clean:build', () => {
        return gulp.src('./build')
            .pipe($.clean())
    });
}