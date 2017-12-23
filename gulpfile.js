/**
 * Created by Rayr Lee on 2017/12/9.
 */

let NODE_ENV = process.argv[2];

console.log(`>>当前构建的环境为：${NODE_ENV}模式！===========================`);

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    run = require('run-sequence'),
    fs = require('fs');

fs.readdirSync('./gulp/').forEach((file) => {
    require('./gulp/' + file)(gulp, $, NODE_ENV);
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

gulp.task('build', function (done) {
    run(
        ['clean:build'],
        ['webpack:build'],
        done
    )
});

