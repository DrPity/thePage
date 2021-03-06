module.exports = {

  //------activate mouse tracking-----------------------------------------------
  mouseXY: function(element){
    var mouse = {x:0.0, y:0.0};
    var mouseStart = function(){
      element.addEventListener('mousemove', mouseMove, false);
    };

    var mouseMove = function(event){
      mouse.x = ((event.clientX / window.screen.width) - 0.5) * 2;
      mouse.y = ((event.clientY / window.screen.height) - 0.5) * 2;
      return mouse;
    };

    mouseStart();
  },

  //------get Style-------------------------------------------------------------
  getStyle: function(element,style){
    return window.getComputedStyle(el, null).getPropertyValue(style);
  },

  //------Array filter--------
  arrayFilter: function(array, id, property) {
    property = property || 'id';
    for(var i = 0; i < array.length; i++) {
      if(array[i][property] === id) return array[i];
    }
  },

  //------Returns a simple tweened value----------------------------------------
  tween: function(beginPos,endPos,istart,istop,ostart,ostop){
    var value = Math.abs(beginPos-endPos);
    value = this.map(value,istart,istop,ostart,ostop);
    return this.floor(value);
  },

  //------Check the sign of a value---------------------------------------------
  sign: function(value) {
    return value > 0 ? 1 : value < 0 ? -1 : 0;
  },

  //------get a offset value----------------------------------------------------
  getOffset: function (el) {
    var box = el.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
    };
  },

  //------Returns a random and floored integer----------------------------------

  randomInt: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //------Map a value to a specific range---------------------------------------

  map: function(value,istart,istop,ostart,ostop){
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  },

  //------pad a number----------------------------------------------------------

  pad: function (number, pad) {
    var padded = number.toString();
    pad = pad || 2;
    for(var i = padded.length; i < pad; i++) {
      padded = '0' + padded;
    }
    return padded;
  },

  //------floor a number--------------------------------------------------------

  floor: function(number){
    return ~~number;
  },

  //------Returns the system time-----------------------------------------------

  systemTime: function(){
    var d = new Date();
    var n = d.getTime();
    return n;
  },

  //------Start a interval and receive a callback when finished-----------------

  interval: function(startTime, waitTime, intervalTime, callback) {
    var i = null;
    i = setInterval(function() {
      var d = new Date();
      var systemTime = d.getTime();
      // console.log(systemTime - startTime);
      if ((systemTime - startTime) <= waitTime) {
        // console.log(systemTime);
      } else {
        stopInterval();
        callback();
      }
    }, intervalTime);

    function stopInterval() {
      if (i !== null) {
        clearInterval(i);
        i = null;
      }
    }
  },

  //------Check for mobile devices----------------------------------------------
  checkForMobile: function (){
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
  else {
    return false;
  }
},

//------Check orientation-------------------------------------------------------
orientation: function()
{
  if(window.innerHeight > window.innerWidth)
  {
    return 'portrait';
  }else
  {
    return 'lanscape';
  }
},

//------Preload Images----------------------------------------------------------
preloadImage: function(url)
{
  // console.log("laod image: ", url);
  var img=new Image();
  img.src=url;
},

//------Set cookies-------------------------------------------------------------
setCookie: function (cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
},

//------get cookies-------------------------------------------------------------
getCookie: function(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
  }
  return "";
},

//------Outlier detection-------------------------------------------------------
filterOutliers: function(someArray) {
  // Copy the values, rather than operating on references to existing values
  var values = someArray.concat();
  // Then sort
  values.sort( function(a, b) {
    return a - b;
  });
  // console.log(values);

  /* Then find a generous IQR. This is generous because if (values.length / 4)
  * is not an int, then really you should average the two elements on either
  * side to find q1.
  */

  var q1 = values[Math.floor((values.length / 4))];
  // console.log(q1);
  var q3 = values[Math.ceil((values.length * (3 / 4)))];
  // console.log(q3);
  var iqr = q3 - q1;

  // Then find min and max values
  var maxValue = q3 + iqr*1.5;
  var minValue = q1 - iqr*1.5;

  // Then filter anything beyond or beneath these values.
  var filteredValues = values.filter(function(x) {
    return (x < maxValue) && (x > minValue);
  });

  return filteredValues;
},

transitions: function(){
  var i,
  el = document.createElement('div'),
  transitions = {
    'transition':'transitionend',
    'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  };

  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }
}

};
