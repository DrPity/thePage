'use strict';
var app = require('../../index.js');
var Preloader = require('../../preloader.js');

module.exports = {

  inherit: true,
  replace: true,
  name: "preloader",
  template: require('./loader.html'),

  data: function() {
    return {
      id: app.getModel().preloader.id,
      preloadBar: app.getModel().preloader.preloadBar,
    };

  },
  route: {
    activate: function () {
      console.log('hook-example activated!');
    },
    canDeactivate: function (transition) {
      console.log('You are not allowed to leave.');
      console.log(transition);
      setTimeout(transition.next, 4000);
      // transition.from('*');
      // transition.to('/home');
      // transition.next();
    }
  },

  ready: function() {
    console.log("Thiiis", this);
    Preloader.init();
    // this.$remove();
  },

  beforeDestroy: function() {

  },

  methods: {

    remove: function(){
      console.log("Remove this element: ", this);
      this.$remove(0,false);
    }

  },
  // setValue: setValue
};
