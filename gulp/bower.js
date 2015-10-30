var gulp = require('gulp'),
    _ = require('lodash'),
    bowerResolve = require('bower-resolve');

var production = (process.env.NODE_ENV === 'production');
gulp.task('bower', function () {


  var b = browserify({
   // generate source maps in non-production environment
   debug: !production
 });


  getBowerPackageIds().forEach(function (id) {

    var resolvedPath = bowerResolve.fastReadSync(id);

    b.require(resolvedPath, {
      expose: id

    });
  });
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
