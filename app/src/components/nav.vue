<template>
  <!-- Menu Nav-->
  <div id="mag" data-magellan-expedition="fixed" data-magellan>
    <div class="slide">
    </div>
    <div id="box" v-on:click="animate()">
      <div class="about">
        <a href="#" >about</a>
      </div>
     </div>
  </div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var booleanEnum = {
  isNavToggled: false,
};

module.exports = {

  // inherit: true,
  replace: true,
  name: "navigation",

  data: function() {
    return {
      animated: false,
      work: {
        'lleave': false,
        'lenter': true
      },
      person: {
        'lleave': true,
        'lenter': false
      },
      idea: {
        'lleave': true,
        'lenter': false
      }
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
    animate: function(){
      $('.slide').toggleClass('trans');
      $('#box ul').toggleClass('open');
    },

    click: function(){
      this.$parent.click();
    },

    mouseenter: function(item){
      item.lenter = true;
      item.lleave = false;
    },
    mouseleave: function(item){
      item.lenter = false;
      item.lleave = true;
    }
  },

  // setValue: setValue
};
</script>
