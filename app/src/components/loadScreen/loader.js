'use strict';
var app = require('../../index.js');

module.exports = {

  inherit: true,
  replace: true,
  name: "loader",
  template: require('./loader.html'),

  data: function() {

    console.log("Preload: ", app.getModel().preload);
    return {
      preload: app.getModel().preload
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
