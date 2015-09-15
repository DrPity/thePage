var queue        = new createjs.LoadQueue(),
    $state       = $('#state'),
    $progress    = $('#progress'),
    $progressbar = $('#progressbar .bar');


queue.on('complete',     onComplete);
queue.on('error',        onError);
queue.on('fileload',     onFileLoad);
queue.on('fileprogress', onFileProgress);
queue.on('progress',     onProgress);


queue.loadManifest([
  {
    id:   '1',
    src:  './images/home.jpg'
  }
  // {
  //   id: '2',
  //   src: './images/home2.jpg'
  // }
]);



function onComplete(event) {
  console.log('Complete', event);
  $state.text( $state.text() + '[All loaded]' );
  $progressbar.addClass('complete');
}

function onError(event) {
  console.log('Error', event);
  $state.text( $state.text() + '[' + event.item.id + ' errored] ');
}

function onFileLoad(event) {
  console.log('File loaded', event);
  $(".bg").show("slow");
}

function onFileProgress(event) {
  console.log('File progress', event);
}

function onProgress(event) {
  var progress = Math.round(event.loaded * 100);

  console.log('General progress', Math.round(event.loaded) * 100, event);
  $progress.text(progress + '%');
  $progressbar.css({
    'width': progress + '%'
  });
}
