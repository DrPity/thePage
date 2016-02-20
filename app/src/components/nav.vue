<template>
  <!-- Menu Nav-->
  <div data-magellan-expedition="fixed">
  <div class="slide">
    <div class="absoluteCentering nav">
      <a v-on:mouseenter="mouseenter('work')" v-on:mouseleave="mouseleave('work')"><h3>THE WORK</h3><div class="line" v-bind:class="work"></div></li>
      <a v-on:mouseenter="mouseenter('person')" v-on:mouseleave="mouseleave('person')"><h3>THE PERSON</h3><div class="line" v-bind:class="person"></div></li>
      <a v-on:mouseenter="mouseenter('idea')" v-on:mouseleave="mouseleave('idea')"><h3>THE IDEA</h3><div class="line" v-bind:class="idea"></div></li>
    </div>
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
      work: {
        'lleave': true,
        'lenter': false
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
    mouseenter: function(item){
      this.item.lenter = true;
      this.item.lleave = false;
    },
    mouseleave: function(item){
      this.item.lenter = false;
      this.item.lleave = true;
    }
  },

  // setValue: setValue
};
</script>
