<template>
  <!-- Menu Nav-->
  <div data-magellan-expedition="fixed">
  <div class="slide">
    <ul>
      <li>THE WORK</li>
      <li>THE PERSON</li>
      <li>THE IDEA</li>
    </ul>
  </div>

  <div id="box" v-on:click="animate()">
     <ul>
       <li :style="[$parent.negative ? { background: '#FFF' } : '']"></li>
       <li :style="[$parent.negative ? { background: '#FFF' } : '']"></li>
       <li :style="[$parent.negative ? { background: '#FFF' } : '']"></li>
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
