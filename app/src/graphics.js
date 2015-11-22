require('gsap');
var $ = require('jquery');
var _ = require('./helpers');


function Graphics() {
  this.attachelements();
  this.tFont = new TimelineLite();
  this.tFont.to($("#0"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});
  this.tFont.to($("#1"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});
  this.tFont.to($("#2"), 0, {'font-family':'"SourceSansPro-Light", sans-serif'});


  var mouse = {x:0.0, y:0.0};
  var mouseStart = function(){
      var element = document.getElementById("wrapper");
      console.log("wrapper set");
      element.addEventListener('mousemove', mouseMove, false);
  };

  var mouseMove = function(event){
      // window.screen.width/height
      mouse.x = ((event.clientX / window.screen.width) - 0.5) * 2;
      mouse.y = ((event.clientY / window.screen.height) - 0.5) * 2;
      console.log("x: ", mouse.x, "y: ", mouse.y);
  };

  mouseStart();
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


module.exports = Graphics;
