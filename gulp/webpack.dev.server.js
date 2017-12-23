/**
 * Created by Rayr Lee on 2017/12/23.
 */

let webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

module.exports = function (gulp) {
    gulp.task(`webpack-dev-server`, () => {
        new WebpackDevServer(webpack(require('../conf/webpack.dev')), {
            contentBase: './dev'
        }).listen(9000, 'localhost', function (err) {
            console.log(`>>>webpack开始编译`);
        })
    });
}