var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    gifsicle = require('imagemin-gifsicle');


gulp.task('optimizeImages', function () {
    return gulp.src(['app/images/**/*.jpg', 'app/images/**/*.jpeg', 'app/images/**/*.gif', 'app/images/**/*.png', 'app/images/**/*.svg'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [jpegtran(), gifsicle()]
            // use: [pngquant(), jpegtran(), gifsicle()]
        }))
        .pipe(gulp.dest('dist/images/'));
});
