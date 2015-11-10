'use strict';
var app = require('../../index.js');
module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  template: require('./home.html'),

  data: function() {
    return {
      id: app.getModel().home.id,
      links:   app.getModel().home.links
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
