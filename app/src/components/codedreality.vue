<template>
<div class="root" transition="fade" transition-mode="out-in">
  <div class="coverScreen">
    <div class="project-layout">
      <div class="absoluteCentering header">
        CODED REALITY
      </div>
      <div class="project-overlay" v-if="show" transition="slideUp"></div>
      <!-- <div class="project-overlay" style="transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);"></div> -->
    </div>
    <div class="project-coverup" style="transform: matrix(1, 0, 0, 1, 0, 0);">
            <div class="device-content">

            </div>
    </div>
  </div>
  <!-- <div class="row align-center noMargin project-description">
    <div class="project-overlay" style="height: 30rem; position: relative;"></div>
    <div class="small-8 columns">
      <div class="circle">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <image xlink:href="images/down_arrow.svg" x="0" y="0" height="100" width="100" />
        </svg>
      </div>
      <template v-for="img in coded.pictures" v-if="!show">
        <div class="row align-middle" transition="fade">
          <div class="small-12 columns">
            <image-loader
                v-bind:src="img"
                alt="Awesome!">
            </image-loader>
          </div>
          <div class="small-12 columns">

          </div>
        </div>
      </template>
    </div>
  </div> -->
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
    coded:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
      show: true,
    };
  },

  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().app.$data.nextRoute = "codedreality";
        app.getRouter().go({ name: 'loader' })
      }
    },
    canDeactivate: function (transition) {
      console.log("Redirect: ", app.getRouter().app.$data.redirect);
      if (app.getRouter().app.$data.redirect === false){
        graphics.deactivate();
      }
      this.show = true;
      transition.next();
      // setTimeout(transition.next, 1000);
    },
  },


  ready: function() {
    // document.getElementById('wrapper').style.height = 'auto';
    if (app.getRouter().app.$data.redirect === false){
      console.log("Graphics Init: ");
      document.body.style.overflowY = 'scroll';
      window.scrollTo(0,0);
      var _this = this;
      graphics = new Graphics(_this, "../images/home_large.jpg");
      setTimeout(function () {
        _this.show = false;
      }, 500);
    }
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
    check: function(){
      console.log("check");
    },
    mouseleave: function(index){

    }
  },
  // setValue: setValue
};

</script>
