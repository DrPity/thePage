// Uncomment to debug browserify + shim
// process.uglifyIt.BROWSERIFYSHIM_DIAGNOSTICS = 1;

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    remapify = require('remapify'),
    gStreamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    bundleLogger = require('./utils/bundleLogger'),
    handleErrors = require('./utils/handleErrors'),
    source = require('vinyl-source-stream'),
    stringify = require('stringify'),
    _ = require('lodash'),
    bowerResolve = require('bower-resolve');

var uglifyIt = false;

gulp.task('browserify', function()
{
  var b = browserify([
    './app/src/index.js',
  ],
    {
      cache: {},
      packageCache: {},
      debug: uglifyIt,
      fullPaths: true,
      transform: stringify ({extensions: ['.html'], minify: false
      })
    }),
    file = 'main.js',
    folder = './dist/scripts/';

    getBowerPackageIds().forEach(function (id) {
      var resolvedPath = bowerResolve.fastReadSync(id);
      console.log(resolvedPath);
      console.log(id);
      b.require(resolvedPath, {
        expose: id
      });
    });

    var bundler = global.isWatching ? watchify(b) : b;
    // var bundler = watchify(b);

    bundler.plugin(remapify, ['components', 'scripts', 'src', 'styles'].map(function(folder) {
        return {
            src: './**/*.js',
            expose: folder,
            cwd: process.cwd() + '/src/' + folder
        };
    }));

    var bundle = function() {
        bundleLogger.start();

        return bundler.bundle()
        .on('error', handleErrors)
        .pipe(source(file))
        .pipe(uglifyIt === false ? gutil.noop() : gStreamify(uglify()))
        .pipe(gulp.dest(folder))
        .on('end', bundleLogger.end);
    };



        // gulp.src('./app/scripts/main.js')
        // .pipe(gulp.dest('dist/scripts'));


    if(global.isWatching) bundler.on('update', bundle);

    return bundle();
});

function getBowerPackageIds() {
  // read bower.json and get dependencies' package ids
  var bowerManifest = {};
  try {
    bowerManifest = require('../bower.json');
  } catch (e) {
    console.log("no bower json");
  }
  return _.keys(bowerManifest.dependencies) || [];

}
