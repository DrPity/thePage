var $ = require("jquery");
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require("gsap");

function ScrollTriggers() {
  console.log(ScrollMagic.version);
  console.log(TimelineMax);
  this.attachScrollTriggers();
}


ScrollTriggers.prototype.attachScrollTriggers = function () {
  var controller = new ScrollMagic.Controller();
  // create a scene
  var wipeAnimation = new TimelineMax()
      .fromTo("section.panel.blue", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pin",
        triggerHook: "onLeave",
        duration: "100%",
        tweenChanges: true
      })
      .setPin("#pin")
      .setTween("section.panel.blue", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
};


module.exports = ScrollTriggers;
