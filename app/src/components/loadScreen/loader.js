'use strict';
var app = require('../../index.js');

module.exports = {

  inherit: true,
  replace: true,
  name: "preloader",
  template: require('./loader.html'),

  data: function() {
    return {
      id: app.getModel().preloader.id,
      preloadBar: app.getModel().preloader.preloadBar,
      show: true
    };

  },
  ready: function() {
    console.log("Thiiis", this);
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
