require('gsap');
var _ = require('./helpers');
window.PIXI = require('pixi.js');
window.scene = {
    elem: null,
    width: 1920,
    height: 1080,
    renderer: null,
    container: null,
    displacementFilter: null,
    context: null,
    bg: null,
    init: true
};

// console.log("The screen height: ", (screen.height));

window.handler = {

  preload: function(image){
    handler.createrenderer(); // Create renderer to test which kind in loading,
                      // do preloader animations (not implemented)

    var loader = PIXI.loader;


    if (window.devicePixelRatio >= 2 &&
        scene.renderer instanceof PIXI.WebGLRenderer) {
      loader.add("background", image);
    } else {
      loader.add("background", image);
    }

    loader.once('complete', handler.init);
    loader.load();

  },

  createrenderer: function(){
    console.log("Create Renderer");

    var rendererOptions = {
      antialiasing: false,
      transparent: false,
      resolution: window.devicePixelRatio,
      autoResize: true,
    };

    scene.elem = scene.context.$el.querySelector('.project-layout');
    // scene.width = scene.elem.getBoundingClientRect().width;
    // scene.width = screen.width;
    // if(screen.width <= 699){
    //   scene.height = Math.floor((scene.elem.getBoundingClientRect().width/1.7777777)*2);
    // }else{
    // scene.height = screen.height/1.777777777;
    // scene.height = Math.floor(scene.elem.getBoundingClientRect().height);
    // }
    console.log("scene scale ", scene.width + " | " + scene.height);
    // Renderer
    scene.renderer = PIXI.autoDetectRenderer(scene.elem.getBoundingClientRect().width, scene.elem.getBoundingClientRect().height, rendererOptions);
    // The stage is essentially a display list of all game objects
    // for Pixi to render; it's used in resize(), so it must exist
    scene.container = new PIXI.Container();

    // Actually place the renderer onto the page for display
    scene.elem.appendChild(scene.renderer.view);
    // handler.resize();

    // Listen for and adapt to changes to the screen size, e.g.,
    // user changing the window or rotating their device
  },

  init: function(){

    scene.bg = new PIXI.Sprite(PIXI.loader.resources.background.texture);
    scene.init = false;
    scene.bg.position.x = 0;
    scene.bg.position.y = 0;
    // var bg = PIXI.Sprite.fromImage("../images/home_large.jpg");
    // if(scene.bg.width > scene.width){
    //   scene.bg.x = (scene.width - scene.bg.width)/1.5;
    // }

    scene.container.addChild(scene.bg);
    console.log("BG " , PIXI.loader.resources.background);

    // Filter
    var displacementTexture = PIXI.Sprite.fromImage("../images/displacement2.jpg");
    scene.displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

    // Apply it
    scene.container.filters = [scene.displacementFilter];
    // Animate
    handler.resize();
    window.addEventListener("resize", handler.resize);
    requestAnimationFrame(handler.animate);
  },

  animate: function (){

    var offset = 0.1 * window.scrollY;

    scene.displacementFilter.scale.x = 2 * offset;
    scene.displacementFilter.scale.y = 1 * offset;


    scene.renderer.render(scene.container);
    requestAnimationFrame(handler.animate);
  },

  ratio: function(ew, w, eh, h) {
      var r = Math.min(ew / w, eh / h);
      return {
          width: w * r,
          height: h * r
      };
  },

  resize: function(){


    // ratio = handler.ratio(scene.elem.getBoundingClientRect().width, scene.width, scene.elem.getBoundingClientRect().height, scene.height);
    // console.log("Ratio: ", ratio);

    // Scale the view appropriately to fill that dimension
    var w = scene.elem.getBoundingClientRect().width,//Math.ceil(scene.width * ratio),
        h = scene.elem.getBoundingClientRect().height;//Math.ceil(scene.height * ratio);

    //Do stuff here for responsive
    // scene.container.scale.x = scene.container.scale.y = ratio;


    if (!scene.init) {
      var r = 0,
          renderW = scene.elem.getBoundingClientRect().width,
          renderH = scene.elem.getBoundingClientRect().height;

      scene.bg.position.x = 0;
      scene.bg.position.y = 0;

      if(renderW >= scene.width){
        console.log("In > then 1920");
        r = Math.max(scene.elem.getBoundingClientRect().width/scene.width, scene.elem.getBoundingClientRect().height/scene.height);
        //uncomment to fixate scaling
        // if(r >= 1.3){
        //   r = 1.3;
        // }
        scene.bg.scale.x = scene.bg.scale.y = r;
      }else if (renderW < scene.width){
        scene.bg.position.x = - ((scene.width - scene.elem.getBoundingClientRect().width)/2);
      }

      if(renderH >= scene.height){
        r = Math.max(scene.elem.getBoundingClientRect().width/scene.width, scene.elem.getBoundingClientRect().height/scene.height);
        //uncomment to fixate scaling
        // if(r >= 1.3){
        //   r = 1.3;
        // }

        scene.bg.scale.x = scene.bg.scale.y = r;
      }else if (renderH < scene.height){
        console.log("In < then 1080");
        scene.bg.position.y = - ((scene.height - scene.elem.getBoundingClientRect().height)/2);
      }

    }

    // Update the renderer dimensions
    scene.renderer.resize(w,h);

    // console.log("Resize\n" +
    //             "  Window inner " + window.innerWidth + "," +
    //             window.innerHeight +
    //             " ratio " + ratio + "\n" +
    //             "  Renderer " + scene.renderer.width + "," +
    //             scene.renderer.height + " res " + scene.renderer.resolution + "\n" +
    //             "  Scale " + scene.container.scale.x + "," + scene.container.scale.y + "\n" +
    //             "  Element " + scene.context.$el.getBoundingClientRect().width + "," + scene.context.$el.getBoundingClientRect().height + "\n");
  },

};

function Graphics(context, image) {

  this.text = "Can you read this";
  scene.context = context;
  // this.setUpScene(context)
  handler.preload(image);
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
    scene.renderer = PIXI.autoDetectRenderer(scene.width, scene.height(), rendererOptions);
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
