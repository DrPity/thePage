var Scramble = require('./scramble');
var $ = require('jquery');
var _ = require('./helpers');
var app = require('./index.js');
require('gsap');
require('./descramble.js');

preloader = {};

preloader.init = function() {
  message = "LOOAOADDDDDDDDDIIIIIIIIIIINGNGNGNNGNGNG YEEHAHHHHH";
  currentIndex = 0;
  formerIndex = 0;
  console.log("test view", app.getMainView());

  queue        = new createjs.LoadQueue();
  $progress    = $('#progress');
  $progressbar = $('#progressbar .bar');

  queue.on('complete',     this.onComplete);
  queue.on('error',        this.onError);
  queue.on('fileload',     this.onFileLoad);
  queue.on('fileprogress', this.onFileProgress);
  queue.on('progress',     this.onProgress);

  queue.loadManifest([
    {
      id:   '1',
      src:  './images/home_small.jpg'
    },
    {
      id: '2',
      src: './images/bgTest.jpg'
    }
  ]);
};

preloader.onComplete = function(event) {
    //app.getMainView().currentView = "home";
    _.addClass("fade-transition", "fade-enter");
};

preloader.onError = function (event) {
};

preloader.onFileLoad = function (event) {

};

preloader.onFileProgress = function (event) {
};

preloader.onProgress = function (event) {
  var progress = Math.round(event.loaded * 100);
  var preloader = _.arrayFilter(app.getMainView().$children, 'preloader', 'id');
  preloader.preloadBar = progress + '%';
  $progressbar.css({
    'width': progress + '%'
  });
  currentIndex = Math.ceil(progress/2);
  if (currentIndex < message.length) {
      for ( var idx = formerIndex; idx < currentIndex; idx++){
        $('.msg').append(message[idx]);
      }
  }
  formerIndex = currentIndex;
};

module.exports = preloader;
