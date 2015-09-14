'use strict';
 function sketch (p) {

  var c;

  p.setup = function() {
    console.log("Setup");
  };

  // p.draw = function() {
  // 	p.background(125);
 // 		p.ellipse(p.mouseX, p.mouseY, 20, 20);
  //   console.log('mx:'+p.mouseX+' my:'+p.mouseY+' wmx:'+p.winMouseX+' wmy:'+p.winMouseY);
  // };

  // setInterval(function() {
  //   console.log("Ready");
  //   // $("#randomit").on(hover, #randomit, function() {});
  //   $("#randomit" ).hover(function() {
  //     var possible = '░░▀██▄█▀░░░███▄▀░';
  //     possible += possible.toUpperCase();
  //     possible += '';
  //     var randomit = $('#randomit');
  //     var tobe = '';
  //     for (var i = 0; i < 18; i++) {
  //       var r = possible.charAt(p.floor(p.random(0,possible.length)));
  //       tobe += r;
  //     }
  //     randomit.html(tobe);
  //     console.log("Done");
  //   });
  // },200);
}

// exports.init = function (){
  // var myP5 = new p5(sketch);
console.log("Works");
$("#wrapper").on( "click", "#randomit", function() {
  console.log("Works");
});
// };
