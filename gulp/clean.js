var gulp = require('gulp'),
    del = require('del'),
    argv = require('yargs')
      .default({path : 'tmp'})
      .argv;

gulp.task('clean', function (cb) {
    del.sync(['dist/**', '!dist', '!dist/rst/**','!dist/res/**', 'tmp/**/*', '!/app/']);
    cb();
});
