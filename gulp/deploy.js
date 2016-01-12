var gulp = require('gulp'),
    gzip = require('gulp-gzip'),
    argv = require('yargs')
      .default({path : 'tmp'})
      .argv;

gulp.task('deploy', ['build'], function() {
    console.log("In deploy");
    console.log("The path", argv.path);
    // return gulp.src('dist/**/*.{html,xml,json,css,js}')
    //   .pipe(gzip({ append: false }))
    //   .pipe(gulp.dest(argv.path));
});
