<template>
  <div class="root" transition="hfade" keep-alive>

    <!-- Menu Toggle -->
    <navigation></navigation>
    <!-- First section and Background Image -->
    <section class="bg" v-on:click="home.negative = !home.negative" :style="[home.negative ? {backgroundImage: home.background.nlogo} : '']">
      <div class="tag">
        <h6 id="0" class="name" :style="[home.negative ? { color: '#FFF' } : '']">{{home.description.name | uppercase}}</h6>
        <h6 id="1" class="description_one" :style="[home.negative ? { color: '#656565' } : '']">{{home.description.one | uppercase}}</h6>
        <h6 id="2" class="description_two" :style="[home.negative ? { color: '#656565' } : '']">{{home.description.two | uppercase}}</h6>
      </div>
      <div class="scroll_hint">
        <h6 id="3" class="scroll" :style="[home.negative ? { color: '#FFF' } : '']">{{home.description.scroll | uppercase}}</h6>
        <div class="circle">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <image xlink:href="images/down_arrow.svg" x="0" y="0" height="100" width="100" />
          </svg>
        </div>
      </div>
    </section>
    <!-- Projects  -->
    <work :work="work"></work>
    <!-- Contact  -->
    <section class="contact">

    </section>
  </div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var scale = require('../perfectScale.js');
var scramble = require('../scramble');
var scr = new scramble();
var Masonry = require ('masonry-layout');
// import Smooth from 'smooth-scrolling'


module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  props: {
    home:{
      type: Object,
      required: true
    },
    work:{
      type: Object,
      required: true
    },
  },

  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().go('/');
      }
    },
    canDeactivate: function (transition) {
      transition.next();
    }
  },

  data: function() {
    return {
      negative: false
    };

  },

  components: {
    'work': require('./work.vue'),
    'navigation': require('./nav.vue'),
  },


  ready: function() {
    if (app.getRouter().app.$data.redirect === false){

      //scrambling
      var index = 0;
      var scrambleItems = ["0", "1", "2", "3"];
      scr.scramble(scrambleItems, this);
      for (var key in this.home.description) {
        if (this.home.description.hasOwnProperty(key)) {
          var orig = this.home.description[key];
          $("#" + index).decrypt_effect({
            speed: _.randomInt(500,700),
            decrypted_text: orig,
          });
          index++;
        }
      }

      //mansory grid
      var grid = document.querySelector('.grid');
      var msnry = new Masonry( grid, {
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer',
          gutter: 12
      });
      var el = document.querySelector('body');
      console.log("el ", el);
      window.onscroll = function (e) {
          console.log("window.pageYOffset: ", window.pageYOffset);
      };

      // console.log("SMOOTH: ", Smooth);
      // const section = document.querySelector('.vs-section');
      // const smooth = new Smooth({
      //   native: true,
      //   section: section,
      //   listener: document.getElementById('wrapper'),
      //   ease: 0.4
      // });
      // smooth.on();
      // smooth.init();
    }
  },

  afterLeave: function(){
    // smooth.destroy();
  },

  enter: function (el) {
  },

  leave: function (el) {
  },

  beforeDestroy: function() {

  },

  methods: {
    click: function(){

    },
    background: function(url){
      console.log(url);
      return "background-image:" + "url(" + url +  ");";
    },
    scroll: function(){
      if(window.pageYOffset>100)alert('User has scrolled at least 400 px!');
    }
  },

};


</script>
