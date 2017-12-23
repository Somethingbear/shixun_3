/**
 * Created by Rayr Lee on 2017/12/23.
 */

module.exports = function (gulp, $, NODE_ENV) {
    gulp.task(`clean:${NODE_ENV}`, () => {
        return gulp.src(`./${NODE_ENV}`)
            .pipe($.clean())
    });
}