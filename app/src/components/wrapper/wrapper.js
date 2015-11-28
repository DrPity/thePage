'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');

module.exports = {

  inherit: true,
  replace: true,
  name: "wrapper",
  template: require('./wrapper.html'),

  data: function() {
    return {

      mainData: "Test",
      // links: app.getModel().home.links
    };

  },


  ready: function() {

  },

  afterLeave: function(){
    console.log("after Leave");
  },

  enter: function (el) {
    console.log("enter");
  },

  leave: function (el) {
    console.log("leave");
  },

  beforeDestroy: function() {

  },

  methods: {

  },

  // setValue: setValue
};
