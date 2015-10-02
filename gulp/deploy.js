var gulp = require('gulp'),
    argv = require('yargs')
      .default({path : 'tmp'})
      .argv;

console.log(argv.path);
gulp.task('deploy', ['build'], function() {
    console.log("In deploy");
    return gulp.src('dist/**/*')
     .pipe(gulp.dest(argv.path));
});
