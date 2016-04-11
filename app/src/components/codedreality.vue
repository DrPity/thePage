<template>
<div class="link-layout" transition="slide" transition-mode="out-in">
</div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var Graphics = require('../graphics');
var graphics = null;

module.exports = {

  // inherit: true,
  replace: true,
  name: "coded",

  props: {
    work:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
    };
  },

  route: {
    activate: function () {

    },
    canDeactivate: function (transition) {
      transition.next();
      graphics.deactivate();
    }
  },


  ready: function() {
    document.getElementById('wrapper').style.height = 'auto';
    document.body.style.overflowY = 'scroll';
    window.scrollTo(0,0);
    var _this = this;
    graphics = new Graphics(_this);
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
    mouseenter: function(index){

    },
    mouseleave: function(index){

    }
  },
  // setValue: setValue
};

</script>
