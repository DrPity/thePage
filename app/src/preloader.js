var Scramble = require('./scramble');
var $ = require('jquery');
require('gsap');
require('./descramble.js');

preloader = {};

preloader.init = function() {
  message = "LOOAOADDDDDDDDDIIIIIIIIIIINGNGNGNNGNGNG YEEHAHHHHH";
  currentIndex = 0;
  formerIndex = 0;

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
  console.log('Complete', event);
    $( "#loader" ).fadeOut( 2000, function() {
      startApp.mainView.currentView = "home";
    });
    $( ".bg" ).fadeIn( 1000, function() {
      var scrambleItems = ["0", "1", "2"];
      for (var item = 0; item < scrambleItems.length; item++) {
        console.log("In for loop");
        var path = 'links.link[' + item + '].linkName';
  			var orig = app.getVariable(app.mainView, path);
        $("#" + item).decrypt_effect({
          speed: preloader.getRandomIntInclusive(100,700),
          decrypted_text: orig,
        });
      }
    });
};

preloader.onError = function (event) {
  // console.log('Error', event);
};

preloader.onFileLoad = function (event) {

};

preloader.onFileProgress = function (event) {
};

preloader.onProgress = function (event) {
  var progress = Math.round(event.loaded * 100);
  startApp.mainView.$children[0].$set('preload', progress + '%');
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

preloader.getRandomIntInclusive = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = preloader;
