var Scramble = require('./scramble');
var $ = require('jquery');
var _ = require('./helpers');
var app = require('./index.js');
window.createjs = this.createjs || {};
require('PreloadJS');

require('gsap');
require('./descramble.js');


preloader = {};

preloader.init = function() {
  message = "LOADING";
  currentIndex = 0;
  formerIndex = 0;
  console.log("In preload");
  queue        = new createjs.LoadQueue("image");
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
      id:   '1',
      src:  '../images/load.gif'
    },
    {
      id: '2',
      src: '../images/logo.png'
    },
    {
      id: '3',
      src: './images/berlin.jpg'
    },
  ]);
};

preloader.onComplete = function(event) {
    var nextRoute = app.getRouter().app.$data.nextRoute;
    console.log("NextRoute", nextRoute);
    var router = app.getRouter().go(nextRoute);
};

preloader.onError = function (event) {
};

preloader.onFileLoad = function (event) {
  var item = event.item; // A reference to the item that was passed in to the LoadQueue
  var type = item.type;

  // Add any images to the page body.
  if (type == createjs.LoadQueue.IMAGE) {
      var img=new Image();
      img.src=event.result.src;
      console.log("IMAGE ITEM: ", event);
  }
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
