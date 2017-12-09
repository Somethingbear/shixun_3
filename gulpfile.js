/**
 * Created by Rayr Lee on 2017/12/9.
 */

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    fs = require('fs');

fs.readdirSync('./gulp/').forEach((file) => {
    require('./gulp/' + file)(gulp, $);
});
