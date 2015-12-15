'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');
var $ = require('jquery');
module.exports = {

  inherit: true,
  replace: true,
  name: "work",



  route: {
    activate: function () {
      console.log('work');
    },
    canDeactivate: function (transition) {
    }
  },


  data: function() {
    return {

    };

  },


  ready: function() {
    console.log('work');
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
