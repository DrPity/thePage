require('gsap');
var _ = require('./helpers');
window.PIXI = require('pixi.js');
var scene = {
    elem: null,
    width: 1920,
    height: 600,//Math.ceil(screen.height*0.8),
    renderer: null,
    container: null,
    displacementFilter: null,
    context: null
};

var handler = {

  preload: function(){

    handler.createrenderer(); // Create renderer to test which kind in loading,
                      // do preloader animations (not implemented)

    var loader = PIXI.loader;


    if (window.devicePixelRatio >= 2 &&
        scene.renderer instanceof PIXI.WebGLRenderer) {
      loader.add("background", "../images/home_large.jpg");
    } else {
      loader.add("background", "../images/home_large.jpg");
    }

    loader.once('complete', handler.init);
    loader.load();

  },

  createrenderer: function(){
    console.log("Create Renderer");

    var rendererOptions = {
      antialiasing: false,
      transparent: false,
      // resolution: window.devicePixelRatio,
      autoResize: true,
    };

    scene.elem = scene.context.$el.querySelector('.project-layout');
    // scene.width = scene.elem.getBoundingClientRect().width;
    console.log("scene elem: ", scene.elem);
    // Renderer
    scene.renderer = PIXI.autoDetectRenderer(scene.width, scene.height, rendererOptions);
    console.log("Context ", scene.renderer);
    // The stage is essentially a display list of all game objects
    // for Pixi to render; it's used in resize(), so it must exist
    scene.container = new PIXI.Container();

    // Actually place the renderer onto the page for display
    scene.elem.appendChild(scene.renderer.view);
    handler.resize();

    // Listen for and adapt to changes to the screen size, e.g.,
    // user changing the window or rotating their device
  },

  init: function(){

    var bg = PIXI.Sprite.fromImage(PIXI.loader.resources.background.url,1,1);
    // var bg = PIXI.Sprite.fromImage("../images/home_large.jpg");
    // bg.x = -1920+screen.width;
    console.log("BG " + bg.width + "," + bg.height +
                   " res " , bg);

    scene.container.addChild(bg);

    // Filter
    var displacementTexture = PIXI.Sprite.fromImage("../images/displacement2.jpg");
    scene.displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

    // Apply it
    scene.container.filters = [scene.displacementFilter];
    // Animate
    window.addEventListener("resize", handler.resize);
    requestAnimationFrame(handler.animate);
  },

  animate: function (){

    var offset = 0.1 * window.scrollY;

    // console.log("this.scene: ", _this.scene);
    scene.displacementFilter.scale.x = 2 * offset;
    scene.displacementFilter.scale.y = 1 * offset;


    scene.renderer.render(scene.container);
    requestAnimationFrame(handler.animate);
  },

  resize: function(){



    // Determine which screen dimension is most constrained
    var ratio = Math.min(scene.elem.getBoundingClientRect().width/scene.width, scene.elem.getBoundingClientRect().height/scene.height);
    // Scale the view appropriately to fill that dimension
    scene.container.scale.x = scene.container.scale.y = ratio;
    // var w = screen.width;
    // var h = scene.height;
    // scene.renderer.view.style.width = scene.elem.getBoundingClientRect().width + "px";
    // scene.renderer.view.style.height = Math.ceil(scene.height * ratio) + "px";

    // console.log("Style: ", scene.elem.getBoundingClientRect());
    // Update the renderer dimensions
    scene.renderer.resize(Math.ceil(scene.width * ratio), Math.ceil(scene.height * ratio));

    console.log("Resize\n" +
                "  Window inner " + window.innerWidth + "," +
                window.innerHeight +
                " ratio " + ratio + "\n" +
                "  Renderer " + scene.renderer.width + "," +
                scene.renderer.height + " res " + scene.renderer.resolution + "\n" +
                "  Scale " + scene.container.scale.x + "," + scene.container.scale.y + "\n" +
                "  Element " + scene.context.$el.getBoundingClientRect().width + "," + scene.context.$el.getBoundingClientRect().height + "\n");
  },

};

function Graphics(context) {

  this.text = "Can you read this";
  scene.context = context;
  // this.setUpScene(context);
  handler.preload();
  // this.tFont = new TimelineMax({repeat:-1});

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

Graphics.prototype.setUpScene = function (context){
    // handler.preload();
    var rendererOptions = {
      antialiasing: false,
      transparent: false,
      // resolution: window.devicePixelRatio,
      autoResize: false,
    };

    scene.elem = context.$el.querySelectorAll('.project-layout')[0];
    console.log("Context ", scene.elem);

    // Renderer
    scene.renderer = PIXI.autoDetectRenderer(scene.width, scene.height, rendererOptions);
    scene.elem.appendChild(scene.renderer.view);

    // Container
    scene.container = new PIXI.Container();

    // Background
    var bg = PIXI.Sprite.fromImage("../images/home_large.jpg");
    // bg.x = -1920+screen.width;
    console.log("BG " + bg.width + "," + bg.height +
                   " res " + bg);
    scene.container.addChild(bg);

    // Filter
    var displacementTexture = PIXI.Sprite.fromImage("../images/displacement2.jpg");
    scene.displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

    // Apply it
    scene.container.filters = [scene.displacementFilter];
    // Animate
    handler.resize();
    window.addEventListener("resize", handler.resize);
    requestAnimationFrame(handler.animate);

};

Graphics.prototype.deactivate = function (){
  window.removeEventListener("resize", handler.resize);
  PIXI.loader.reset();
};

module.exports = Graphics;
