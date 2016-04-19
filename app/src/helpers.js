var $ = require('jquery');

module.exports = {

  //------Add or remove class with jquery (should be fixed)---------------------------------------

  addRemoveClass: function(toRemoveClass, toAddClass){
    $('.' + toRemoveClass).addClass(toAddClass);
    $('.' + toRemoveClass).removeClass(toRemoveClass);
  },

  addClass: function(toAppendClass, toAddClass){
    $('.' + toAppendClass).addClass(toAddClass);
  },

  removeClass:function(toRemoveClass){
    $('.' + toRemoveClass).removeClass(toRemoveClass);
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
      console.log(systemTime - startTime);
      if ((systemTime - startTime) <= waitTime) {
        console.log(systemTime);
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

  // Check for mobile devices
  checkForMobile: function (){
   if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
   ){
     return true;
    }
    else {
      return false;
    }
  },

  preloadImage: function(url)
  {
    console.log("laod image: ", url);
    var img=new Image();
    img.src=url;
  },

  //set Cookies
  setCookie: function (cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },

  getCookie: function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
    }
    return "";
}

};
