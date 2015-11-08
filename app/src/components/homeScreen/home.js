'use strict';
var app = require('../../index.js');
module.exports = {

  inherit: true,
  replace: true,
  template: require('./home.html'),

  data: function() {
    console.log("Home: ", app.getModel().link);
    return {
      link: app.getModel().link
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
