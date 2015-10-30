var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Watch Files For Changes & Reload
//['clean','styles', 'jshint', 'html', 'browserify' ,'images', 'fonts', 'extras']
gulp.task('serve', ['build', 'watch'], function() {
  browserSync.init(null, {
    // watchTask: true,
    notify: false,
    server: {
      baseDir: ['dist'],
      index: 'index.html',
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  });

  // gulp.watch(['./static/build/**/*.*'], reload);

  gulp.watch([
    'dist/**/*',
  ]).on('change', reload);

  gulp.watch('./app/src/components/**/*.html', ['browserify']);
  gulp.watch('./app/*.html', ['html']);
  gulp.watch('./app/images/**/*', ['images']);
  gulp.watch('./app/src/**/*.js', ['browserify']);
  gulp.watch('./redist/kogni/src/**/*', ['browserify']);
  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/fonts/**/*', ['fonts']);
  gulp.watch('./bower.json', ['wiredep', 'fonts']);
});
