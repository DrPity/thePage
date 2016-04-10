require('gsap');
var $ = require('jquery');
var _ = require('./helpers');


function Graphics() {
  this.booleanEnum = {
    isNavToggled: false,
  };

  // this.transform($("#wrapper"));
  this.tFont = new TimelineMax({repeat:-1});
  // var animation = this.tweenFontWeight(".theproject");
  // animation.play();
  // this.attachelements();

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
  // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
  // which will try to choose the best renderer for the environment you are in.
  var renderer = new PIXI.WebGLRenderer(800, 600);
   
  // The renderer will create a canvas element for you that you can then insert into the DOM.
  document.body.appendChild(renderer.view);

  // You need to create a root container that will hold the scene you want to draw.
  var stage = new PIXI.Container();

  // load the texture we need
  PIXI.loader.add('bunny', 'bunny.png').load(function (loader, resources) {
      // This creates a texture from a 'bunny.png' image.
      var bunny = new PIXI.Sprite(resources.bunny.texture);

      // Setup the position and scale of the bunny
      bunny.position.x = 400;
      bunny.position.y = 300;

      bunny.scale.x = 2;
      bunny.scale.y = 2;

      // Add the bunny to the scene we are building.
      stage.addChild(bunny);

      // kick off the animation loop (defined below)
      animate();
  });

  function animate() {
      // start the timer for the next animation loop
      requestAnimationFrame(animate);

      // each frame we spin the bunny around a bit
      bunny.rotation += 0.01;

      // this is the main render call that makes pixi draw your container and its children.
      renderer.render(stage);
  }
};


function panim(el){

}

module.exports = Graphics;
