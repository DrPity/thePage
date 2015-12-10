'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');

module.exports = {

  // inherit: true,
  replace: true,
  name: "wrapper",
  template: require('./wrapper.html'),

  data: function() {
    return {
      Bla: "Bla",
    };

  },


  ready: function() {
    console.log("Router init: ", this );
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
