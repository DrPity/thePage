var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
// Watch Files For Changes & Reload
gulp.task('build', ['clean','styles', 'jshint', 'html', 'browserify' ,'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'dist', gzip: false}));
});
