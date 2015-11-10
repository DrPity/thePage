var $ = require('jquery');

module.exports = {

  //------Add or remove class with jquery---------------------------------------

  addClass: function(toRemoveClass, toAddClass){
    $('.' + toRemoveClass).addClass(toAddClass);
    $('.' + toRemoveClass).removeClass(toRemoveClass);
  },

  //------Array filter--------

  arrayFilter: function(array, id, property) {
    property = property || 'id';
    console.log("all: ", array, id, property);
    console.log("Preloader: ", preloader);
    console.log("Array[0]: ", array[0]);
    console.log("Array[0][property]: ", array[0][property]);
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
  }
};
