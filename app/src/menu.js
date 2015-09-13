'use strict';
var sketch = function(p) {

  var c;

  p.setup = function() {
    p.createCanvas(200, 200);
  };

  p.draw = function() {
  	p.background(125);
 		p.ellipse(p.mouseX, p.mouseY, 20, 20);
    console.log('mx:'+p.mouseX+' my:'+p.mouseY+' wmx:'+p.winMouseX+' wmy:'+p.winMouseY);
  };
};

var myp5 = new p5(sketch);
  //
  //   setInterval(function() {
  //     $("#randomit" ).hover(function() {
  //       var possible = '░░▀██▄█▀░░░███▄▀░';
  //       possible += possible.toUpperCase();
  //       possible += '';
  //       var randomit = $('#randomit');
  //       var tobe = '';
  //       for (var i = 0; i < 18; i++) {
  //         var r = possible.charAt(p.floor(p.random(0,possible.length)));
  //         tobe += r;
  //       }
  //       randomit.html(tobe);
  //       console.log("Done");
  //     });
  //   },200);
  // };
