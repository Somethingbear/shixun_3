/**
 * Created by Rayr Lee on 2017/12/9.
 */

module.exports = function (gulp, $) {
    gulp.task('server', () => {
        $.connect.server({
            root: './build/',
            port: 9000
        });
    });

    gulp.task('server:dev', () => {
        $.connect.server({
            root: './dev/',
            port: 9000
        });
    });
}