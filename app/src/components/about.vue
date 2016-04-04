<template>
<div class="about" transition="slide" transition-mode="out-in">
  <div class="row expanded align-center">
    <div class="small-12 medium-6 columns">
      <div class="aboutPic">
        <span>BALALALALLALALALALAALLAALLALALAL</span>
      </div>
    </div>
    <div class="small-12 medium-6 columns">
      <div class="aboutPic">
        <span>BALALALALLALALALALAALLAALLALALAL</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');

module.exports = {

  // inherit: true,
  replace: true,
  name: "about",

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
    }
  },


  ready: function() {
    document.getElementById('wrapper').style.height = 'auto';
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
