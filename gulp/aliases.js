var gulp = require('gulp'),
gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

// gulp.task('build', ['clean', 'jshint', 'styles', 'browserify']);
// gulp.task('build', ['clean', 'jshint', 'html', 'browserify', 'images', 'fonts', 'extras'], function(){
//   gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
// });
gulp.task('install', ['build', 'deploy']);
gulp.task('default', ['build', 'serve']);
