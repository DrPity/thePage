require('gsap');
var $ = require('jquery');
var _ = require('./helpers');


function Graphics() {
  this.transform($("#wrapper"));
  this.tFont = new TimelineMax({repeat:-1});

  var animation = this.tweenFontWeight(".welcomeTxt");
  // console.log("Animation: ", animation);
  // _.addClass("bg", "greyscale");
  animation.play();
  // this.tFont.to($("#0"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});
  // this.tFont.to($("#1"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});
  // this.tFont.to($("#2"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});


  // var mouse = {x:0.0, y:0.0};
  // var mouseStart = function(){
  //     var element = document.getElementById("wrapper");
  //     console.log("wrapper set");
  //     element.addEventListener('mousemove', mouseMove, false);
  // };
  //
  // var mouseMove = function(event){
  //     // window.screen.width/height
  //     mouse.x = ((event.clientX / window.screen.width) - 0.5) * 2;
  //     mouse.y = ((event.clientY / window.screen.height) - 0.5) * 2;
  //     console.log("x: ", mouse.x, "y: ", mouse.y);
  // };
  //
  // mouseStart();
}


Graphics.prototype.attachelements = function () {
  // var _this = this;
  // $("#wrapper").on("mouseenter", ".bold", function() {
  //   _this.tweenFontWeight(this).play();
  // });
  //
  // $("#wrapper").on("mouseleave", ".bold", function() {
  //     _this.tFont.kill();
  //     _this.tFont.clear();
  //     _this.tFont.to(this, 0, {'font-family':'"OpenSans-ExtraBold",  sans-serif'});
  // });
  //
  //
  // $("#wrapper").on("click", "li a", function() {
  //   var wipeAnimation = new TimelineMax()
  //       .fromTo(".pin", 1, {y: "-100%"}, {y: "0%", ease: Expo.easeOut}); // in from top
  // });
};

Graphics.prototype.tweenFontWeight = function (element) {
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-Regular", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-Bold", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-BoldItalic", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-ExtraBold", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-ExtraBoldItalic", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-Italic", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-LightItalic", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-Light", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-Semibold", sans-serif'});
    this.tFont.to(element, 0.2, {'font-family':'"OpenSans-SemiboldItalic", sans-serif'});
    return this.tFont;
};


Graphics.prototype.shakeAnimation = function (element){
  this.tFont.to(element, 0.1, {
    x: -7,
    ease: Quad.easeInOut
  });
  this.tFont.to(element, 0.1, {
    repeat: 4,
    x: 7,
    yoyo: true,
    delay: 0.1,
    ease: Quad.easeInOut
  });
  this.tFont.to(element, 0.1, {
    x: 0,
    delay: 0.1 * 4
  });
};


Graphics.prototype.transform = function (element){
  console.log("In transform");
    var op = {
        scale: 1.04,
        strength: 25,
        animationSpeed: "100ms",
        isAnimating: false
    };
    if (screen.width <= 699) {
        console.log("Touch Device");
    }else{
      element.on("mouseenter", ".bg", function() {
        op.isAnimating = true;
        element.find("> .bg").css({
            "-webkit-transform": "matrix(" + op.scale + ",0,0," + op.scale + ",0,0)",
            "-moz-transform": "matrix(" + op.scale + ",0,0," + op.scale + ",0,0)",
            "-o-transform": "matrix(" + op.scale + ",0,0," + op.scale + ",0,0)",
            transform: "matrix(" + op.scale + ",0,0," + op.scale + ",0,0)",
            "-webkit-transition": "-webkit-transform " + op.animationSpeed + " linear",
            "-moz-transition": "-moz-transform " + op.animationSpeed + " linear",
            "-o-transition": "-o-transform " + op.animationSpeed + " linear",
            transition: "transform " + op.animationSpeed + " linear"
        }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            op.isAnimating = false;
        });
      });

      element.on("mouseleave", ".bg", function() {
        op.isAnimating = true;
        element.find("> .bg").css({
            "-webkit-transform": "matrix(" + 1 + ",0,0," + 1 + ",0,0)",
            "-moz-transform": "matrix(" + 1 + ",0,0," + 1 + ",0,0)",
            "-o-transform": "matrix(" + 1 + ",0,0," + 1 + ",0,0)",
            transform: "matrix(" + 1 + ",0,0," + 1 + ",0,0)",
            "-webkit-transition": "-webkit-transform " + op.animationSpeed + " linear",
            "-moz-transition": "-moz-transform " + op.animationSpeed + " linear",
            "-o-transition": "-o-transform " + op.animationSpeed + " linear",
            transition: "transform " + op.animationSpeed + " linear"
        }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            op.isAnimating = false;
        });
      });

      element.on("mousemove", ".bg", function(event){
        // console.log("outer: ", op.isAnimating);
        if (!op.isAnimating){
          var offsetY = (window.outerHeight - window.innerHeight) /6;

          var x = Math.abs( _.floor((event.clientX / window.innerWidth) * op.strength)),
              y = Math.abs(_.floor((event.clientY / window.innerHeight) * op.strength - offsetY));

          // console.log("oW: ", element.outerWidth() - element.innerWidth(), "oH: ", element.outerHeight() - element.innerHeight());
          // console.log("x: ", x, "Y: ", y);
          element.find(".bg").css({
              "-webkit-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
              "-moz-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
              "-o-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
              transform: "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
          });
        }

      });
    }

};


module.exports = Graphics;
