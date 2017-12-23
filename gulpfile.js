/**
 * Created by Rayr Lee on 2017/12/9.
 */

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    run = require('run-sequence'),
    fs = require('fs');

fs.readdirSync('./gulp/').forEach((file) => {
    require('./gulp/' + file)(gulp, $);
});


//dev
gulp.task('dev', function (done) {
    run(
        ['clean:dev'],
        ['server:dev'],
        ['webpack:dev'],
        done
    )
});
