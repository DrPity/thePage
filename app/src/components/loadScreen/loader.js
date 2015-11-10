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
      preloadBar: app.getModel().preloader.preloadBar
    };

  },

  ready: function() {
  },

  beforeDestroy: function() {

  },

  methods: {

  },
  // setValue: setValue
};
