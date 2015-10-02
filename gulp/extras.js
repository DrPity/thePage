var gulp = require('gulp')

gulp.task('extras', function(){
  return gulp.src([
    'app/assets/*.json'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/assets/'));
});
