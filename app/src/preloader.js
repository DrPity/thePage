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
      src: './images/home_large.jpg'
    }
  ]);
};

preloader.onComplete = function(event) {
  console.log('Complete', event);
    $( "#loader" ).fadeOut( 2000, function() {
      // Animation complete
    });
    $( ".bg" ).fadeIn( 2000, function() {
      // Animation complete
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
  app.setVariable(app.mainView, 'preload', progress + '%');
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
