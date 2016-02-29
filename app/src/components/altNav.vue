<template>
  <!-- Menu Nav-->
  <div data-magellan-expedition="fixed" data-magellan>
    <div class="slide">
      <div class="absoluteCentering nav">
        <li><a v-on:mouseenter="mouseenter(work)" v-on:mouseleave="mouseleave(work)" href="#first"><h3>THE WORK</h3><div class="line" v-bind:class="work"></div></a></li>
        <li><a v-on:mouseenter="mouseenter(person)" v-on:mouseleave="mouseleave(person)" href="#second"><h3>THE PERSON</h3><div class="line" v-bind:class="person"></div></a></li>
        <li><a v-on:mouseenter="mouseenter(idea)" v-on:mouseleave="mouseleave(idea)"><h3>THE IDEA</h3><div class="line" v-bind:class="idea"></div></a></li>
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
