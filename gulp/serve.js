var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Watch Files For Changes & Reload
gulp.task('serve', ['clean', 'jshint', 'browserify', 'html' ,'img', 'watch', 'fonts'], function () {
    browserSync.init(null, {
        // watchTask: true,
        notify: false,
        server: {
          baseDir: ['.tmp', 'app'],
          index: 'index.html',
          routes: {
            '/bower_components': 'bower_components'
          }
        }
    });

    // gulp.watch(['./static/build/**/*.*'], reload);

    gulp.watch([
      './app/*.html',
      './app/scripts/*.js',
      './app/images/**/*',
      '.tmp/fonts/**/*',
      '.tmp/styles/**/*'
    ]).on('change', reload);

    gulp.watch('./app/src/components/**/*.html',['browserify']);
    gulp.watch('./app/src/**/*.js', ['browserify']);
    gulp.watch('./app/styles/**/*.scss', ['styles']);
    gulp.watch('./app/fonts/**/*', ['fonts']);
    gulp.watch('./bower.json', ['wiredep', 'fonts']);
});
