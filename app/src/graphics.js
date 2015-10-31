var tween = require('gsap');
var $ = require('jquery');
var _ = require('./helpers');


function Graphics() {
  this.attachelements();
  this.tFont = new TimelineLite();
}


Graphics.prototype.attachelements = function () {
  var _this = this;
  $("#wrapper").on("mouseenter", "li", function() {
    var animation = _this.tweenFontWeight(this);
    console.log("Animation: ", animation);
    animation.play();
  });

  $("#wrapper").on("mouseleave", "li", function() {
      _this.tFont.kill();
      _this.tFont.clear();
      _this.tFont.to(this, 0, {'font-family':'SourceSansPro-Light'});
  });
};

Graphics.prototype.tweenFontWeight = function (element) {
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-ExtraLight'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-Bold'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-ExtraLightItalic'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-Semibold'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-BlackItalic'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-Italic'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-Regular'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-SemiboldItalic'});
    this.tFont.to(element, 0.1, {'font-family':'SourceSansPro-BlackItalic'});
    this.tFont.restart(true, false);
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
