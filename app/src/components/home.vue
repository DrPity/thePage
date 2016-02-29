<template>
  <div class="root" transition="hfade">

    <!-- Menu Toggle -->
    <!-- <navigation></navigation> -->

    <!-- First section and Background Image -->
    <section class="bg" v-on:click="home.negative = !home.negative" :style="[home.negative ? {backgroundImage: home.background.nlogo} : '']">
      <div class="tag">
        <h6 id="0" class="name" :style="[home.negative ? { color: '#FFF' } : '']">{{home.description.name | uppercase}}</h6>
        <h6 id="1" class="description_one" :style="[home.negative ? { color: '#656565' } : '']">{{home.description.one | uppercase}}</h6>
        <h6 id="2" class="description_two" :style="[home.negative ? { color: '#656565' } : '']">{{home.description.two | uppercase}}</h6>
      </div>
    </section>
    <!-- Projects  -->
    <section class="work" id="first">
    </section>

    <!-- Contact  -->
    <section class="contact" id="second">
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
// var masonry = require ('masonry-layout');

module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  props: {
    home:{
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
    'navigation': require('./nav.vue'),
  },


  ready: function() {
    var index = 0;
    var scrambleItems = ["0", "1", "2"];
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

    // $('.grid').masonry({
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });
    // $('ul').on('click',function(){
    //   $('ul').toggleClass('open');
    // });
    //
    // var msnry = new Masonry( '.grid', {
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });
    //
    // msnry.imagesLoaded().progress( function() {
    //   msnry.masonry();
    // });
    //
    // $('.grid').masonry({
    //   // set itemSelector so .grid-sizer is not used in layout
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });
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
    background: function(url){
      console.log(url);
      return "background-image:" + "url(" + url +  ");";
    }
  },

  // setValue: setValue
};

</script>
