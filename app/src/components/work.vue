<template>
  <section class="work" id="first">
    <div class="row">
      <div class="grid-wrapper">
        <div class="grid">
          <div class="grid-sizer"></div>
          <template v-for="item in work.grid_items_bg">
            <div class="grid-item">
              <a v-link="{name: 'coded'}" v-on:mouseenter="mouseenter($index)" v-on:mouseleave="mouseleave($index)"  v-bind:style="{ backgroundImage: item }">
                <div class="grid-overlay">
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="left"></div>
    <!-- <div class="angle"></div> -->
    <div class="right"></div>
    <span class="title" v-show="show" v-text="title"></span>
  </section>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');

module.exports = {

  // inherit: true,
  replace: true,
  name: "work",

  props: {
    work:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
      show: false,
      title: 'bla'
    };
  },


  ready: function() {
    setTimeout(function(){ $('.work').addClass('transform'); }, 500);
    // var el = document.querySelectorAll('.work:'),':before';
    // console.log("The element: ", str);
    // el.style.transform = 'rotate(-4deg)';
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
      // console.log("mouseenter: ", this.work.grid_items_title[index+1])
      this.title = this.work.grid_items_title[index+1];
      this.show = true;

    },
    mouseleave: function(index){
      // console.log("mouseleave: ", this.showTitle)
      this.title = "";
    },
    link: function(index){
      console.log("link: ", this.work.links[index]);
      return this.work.links[index+1];
    }
  },

  // setValue: setValue
};
</script>
