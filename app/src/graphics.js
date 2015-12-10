require('gsap');
var $ = require('jquery');
var _ = require('./helpers');


function Graphics() {
  this.attachelements();
  this.transform($("#wrapper"));
  this.tFont = new TimelineLite();
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
  var _this = this;
  $("#wrapper").on("mouseenter", "li a", function() {
    var animation = _this.tweenFontWeight(this);
    console.log("Animation: ", animation);
    // _.addClass("bg", "greyscale");
    animation.play();
  });

  $("#wrapper").on("mouseleave", "li a", function() {
      _this.tFont.kill();
      _this.tFont.clear();
      _this.tFont.to(this, 0, {'font-family':'"SourceSansPro-Light",  sans-serif'});
  });


  $("#wrapper").on("click", "li a", function() {
    var wipeAnimation = new TimelineMax()
        .fromTo(".pin", 1, {y: "-100%"}, {y: "0%", ease: Expo.easeOut}); // in from top
  });
};

Graphics.prototype.tweenFontWeight = function (element) {
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-Light", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-ExtraLight", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-Bold", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-ExtraLightItalic", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-Semibold", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-BlackItalic", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-Italic", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-Regular", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-SemiboldItalic", sans-serif'});
    this.tFont.to(element, 0.1, {'font-family':'"SourceSansPro-BlackItalic", sans-serif'});
    // this.tFont.restart(true, false);
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
        scale: 1.05,
        strength: 25,
        animationSpeed: "100ms",
        isAnimating: false
    };

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
      if (!op.isAnimating){
        var offsetX = (element.outerWidth() - element.innerWidth()) /2;
        var offsetY = (window.outerHeight - window.innerHeight) /6;

        console.log("outer: ", offsetY);


        var x = _.floor((event.clientX / window.innerWidth) * op.strength),
            y = _.floor((event.clientY / window.innerHeight) * op.strength - offsetY);

        // console.log("oW: ", element.outerWidth() - element.innerWidth(), "oH: ", element.outerHeight() - element.innerHeight());
        console.log("x: ", x, "Y: ", y);
        element.find("> .bg").css({
            "-webkit-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
            "-moz-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
            "-o-transform": "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
            transform: "matrix(" + op.scale + ",0,0," + op.scale + "," + x + "," + y + ")",
        });
      }

    });





    // mousemove(function(e) {
    //     if (!i.hasClass("ibg-entering") && !i.hasClass("exiting")) {
    //         var t = e.pageX || e.clientX,
    //             n = e.pageY || e.clientY
    //             t = t - i.offset().left - o / 2,
    //             n = n - i.offset().top - s / 2,
    //             f = a * t * -1,
    //             l = u * n * -1;
    //         i.find("> .ibg-bg").css({
    //             "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
    //             "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
    //             "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
    //             transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
    //             "-webkit-transition": "none",
    //             "-moz-transition": "none",
    //             "-o-transition": "none",
    //             transition: "none"
    //         })
    //     }
    // })



};


module.exports = Graphics;
