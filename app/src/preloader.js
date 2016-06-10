var Scramble = require('./scramble');
var $ = require('jquery');
var _ = require('./helpers');
var app = require('./index.js');
window.createjs = this.createjs || {};
window.imgArray = [];
require('PreloadJS');

require('gsap');
require('./descramble.js');


preloader = {};

preloader.init = function() {
  message = "LOADING";
  currentIndex = 0;
  formerIndex = 0;
  console.log("In preload");
  queue        = new createjs.LoadQueue(false);//
  $progress    = $('#progress');
  $progressbar = $('#progressbar .bar');
  // queue.loadFile({src:"../images/berlin.jpg", type:createjs.AbstractLoader.IMAGE});
  queue.on('complete',     this.onComplete);
  queue.on('error',        this.onError);
  queue.on('fileload',     this.onFileLoad);
  queue.on('fileprogress', this.onFileProgress);
  queue.on('progress',     this.onProgress);

  queue.loadManifest([
    {
      id: '0',
      src: './images/down_arrow.svg'
    },
    {
      id: '1',
      src:  '../images/load.gif'
    },
    {
      id: '2',
      src: '../images/logo.png'
    },
    {
      id: '3',
      src: './images/bg_negative.png'
    },
    {
      id: '4',
      src: './images/bg.png'
    },
    {
      id: '5',
      src: './images/bg_small.png'
    },
    {
      id: '6',
      src: './images/me.jpg'
    },
    {
      id: '7',
      src: './images/cubes/cubes_title.jpg'
    },
    {
      id: '8',
      src: './images/coded/coded_title.jpg'
    },
    {
      id: '9',
      src: './images/human/human_title.jpg'
    },
    {
      id: '10',
      src: './images/light/light_title.jpg'
    },
    {
      id: '11',
      src: './images/wall/wall_title.jpg'
    },
    {
      id: '12',
      src: './images/mubrace/mubrace_title.jpg'
    },
    {
      id: '13',
      src: './images/cucumbis/cucumbis_title.jpg'
    },
    {
      id: '14',
      src: './images/goldmann/goldmann_title.jpg'
    },
    {
      id: '15',
      src: './images/pictures/pictures_title.jpg'
    },
    {
      id: '16',
      src: './images/displacement.jpg'
    },
  ]);
};

preloader.onComplete = function(event) {
    var nextRoute = app.getRouter().app.$data.nextRoute;
    console.log("NextRoute", nextRoute);
    var router = app.getRouter().go(nextRoute);
};

preloader.onError = function (event) {
  console.log("--- Error ---");
};

preloader.onFileLoad = function (event) {
  // var item = event.item;
  // var type = item.type;
  //
  // if (type == createjs.LoadQueue.IMAGE) {
  //     var img=new Image();
  //     img = item;
  //     imgArray.push(img);
  //     console.log("IMAGE ITEM: ", imgArray);
  // }
};

preloader.onFileProgress = function (event) {
};

preloader.onProgress = function (event) {
  var progress = Math.round(event.loaded * 100);
  var preloader = _.arrayFilter(app.getRouter()._children, 'preloader', 'id');
  preloader.preloadBar = progress + '%';
  $progressbar.css({
    'width': progress + '%'
  });
  // currentIndex = Math.ceil(progress/2);
  // if (currentIndex < message.length) {
  //     for ( var idx = formerIndex; idx < currentIndex; idx++){
  //       $('.msg').append(message[idx]);
  //     }
  // }
  // formerIndex = currentIndex;
};

module.exports = preloader;
