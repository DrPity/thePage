'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');

module.exports = {

  // inherit: true,
  replace: true,
  name: "nav",
  template: require('./navigation.html'),

  data: function() {
    return {
      Bla: "Bla",
    };

  },


  ready: function() {

  },

  afterLeave: function(){

  },

  enter: function (el) {

  },

  leave: function (el) {

  },

  beforeDestroy: function() {

  },

  methods: {

  },

  // setValue: setValue
};
