<template>
<div class="link-layout" transition="slide" transition-mode="out-in">
</div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var PIXI = require('pixi.js');
var renderer;
var container;
var displacementFilter;
var GLOB_HEIGHT = 720;
var GLOB_WIDTH  = 1920;
var ELEM;

module.exports = {

  // inherit: true,
  replace: true,
  name: "coded",

  props: {
    work:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
    };
  },

  route: {
    activate: function () {

    },
    canDeactivate: function (transition) {
      transition.next();
      window.removeEventListener("resize", resize);
    }
  },


  ready: function() {
    document.getElementById('wrapper').style.height = 'auto';
    document.body.style.overflowY = 'scroll';
    var _this = this;
    header(_this);
  },

  afterLeave: function(){

  },

  enter: function (el) {

  },

  leave: function (el) {

  },

  beforeDestroy: function() {

  },

  methods: {
    mouseenter: function(index){

    },
    mouseleave: function(index){

    }
  },
  // setValue: setValue
};


function header(_this){

  var rendererOptions = {
    antialiasing: false,
    transparent: false,
    resolution: window.devicePixelRatio,
    autoResize: true,
  }
  ELEM = _this.$el;

  // Renderer
  renderer = PIXI.autoDetectRenderer(GLOB_WIDTH, GLOB_HEIGHT, rendererOptions);
  _this.$el.appendChild(renderer.view);
  // Container
  container = new PIXI.Container();

  // Background
  var bg = PIXI.Sprite.fromImage("../images/home_large.jpg");
  container.addChild(bg);

  // Filter
  var displacementTexture = PIXI.Sprite.fromImage("../images/displacement2.jpg");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

  // Apply it
  container.filters = [displacementFilter];

  // Animate
  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(animate);
}


function animate() {
    var offset = 2;
    var t = .1 * window.scrollY;
    // console.log("Delta ",t);
    // if(id==1) offset = 1;

    // else if(id==2) offset = 2;
    //
    displacementFilter.scale.x = 2 * t;
    displacementFilter.scale.y = 1 * t;


    renderer.render(container);
    requestAnimationFrame(animate);
}

function resize() {
  // Determine which screen dimension is most constrained
  var ratio = Math.min(ELEM.getBoundingClientRect().width/GLOB_WIDTH, ELEM.getBoundingClientRect().height/GLOB_HEIGHT);
  // Scale the view appropriately to fill that dimension
  container.scale.x = container.scale.y = ratio;

  // Update the renderer dimensions
  renderer.resize(Math.ceil(GLOB_WIDTH * ratio), Math.ceil(GLOB_HEIGHT * ratio));

  // console.log("Resize\n" +
  //             "  Window inner " + window.innerWidth + "," +
  //             window.innerHeight +
  //             " pixel ratio " + window.devicePixelRatio + "\n" +
  //             "  Renderer " + renderer.width + "," +
  //             renderer.height + " res " + renderer.resolution + "\n" +
  //             "  Scale " + container.scale.x + "," + container.scale.y + "\n" +
  //             "  Element " + ELEM.getBoundingClientRect().width + "," + ELEM.getBoundingClientRect().height + "\n");
}


</script>
