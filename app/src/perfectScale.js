var _ = require('./helpers');
var $ = require('jquery');

function PerfectScale() {
  this.regionOfInterest = {
    pointOne: 522,
    pointTwo: 662,
    defaultWidth:  1920,
    defaultHeight:  1080,
  };

  this.scaleArea = this.regionOfInterest.pointTwo - this.regionOfInterest.pointOne;
  console.log("Rescale init", Math.abs( _.floor(window.innerWidth)), Math.abs( _.floor(window.innerHeight)));
  console.log(this.regionOfInterest.defaultWidth);
  // window.addEventListener("resize", this.reScale());
  // $( window ).resize(this.reScale);
}

PerfectScale.prototype.reScale = function () {
  var x = Math.abs( _.floor(window.innerWidth)),
      y = Math.abs(_.floor(window.innerHeight));

  var defaultWidth = 1920,
      defaultHeight = 1080;

  console.log("defaultWidth: " , defaultWidth, "defaultHeight: ", defaultHeight, "x: ", x, "y: ", y);
  var yPos = Math.abs(defaultWidth - x),
      xPos = Math.abs(defaultHeight - y);

  console.log(xPos, yPos);

  $("#wrapper").find(".tag").css({
      "-webkit-transform": "matrix(" + "1,0," + "0,1," + xPos + "," + yPos + ")",
      "-moz-transform": "matrix(" + "1,0," + "0,1," + xPos + "," + yPos + ")",
      "-o-transform": "matrix(" + "1,0," + "0,1," + xPos + "," + yPos + ")",
      transform: "matrix(" + "1,0," + "0,1," + xPos + "," + yPos + ")",
  }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
    console.log("done");
  });
};

module.exports = PerfectScale;
