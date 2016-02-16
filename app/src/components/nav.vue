<template>
  <!-- Menu Nav-->
  <div data-magellan-expedition="fixed">
  <div class="slide">
    <ul class="absoluteCentering">
      <li><h3>THE WORK</h3></li>
      <li><h3>THE PERSON</h3></li>
      <li><h3>THE IDEA</h3></li>
    </ul>
  </div>

  <div id="box" v-on:click="animate()">
     <ul>
       <li :style="[$parent.home.negative ? { background: '#FFF' } : '']"></li>
       <li :style="[$parent.home.negative ? { background: '#FFF' } : '']"></li>
       <li :style="[$parent.home.negative ? { background: '#FFF' } : '']"></li>
     </ul>
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
  name: "nav",

  data: function() {
    return {
      animated: false,
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
    }
  },

  // setValue: setValue
};
</script>
