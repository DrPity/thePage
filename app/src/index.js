// menu = require ('./menu');
// var fs = require('fs');
var Vue = require('vue');

new Vue({
  el: 'body',
  data: {
    currentView: 'home'
  },
  components: {
    home : require('./components/home')
  },

  ready: function(){
    // var p5Init = require('./menu.js');
    // p5Init.init();
  }

});
