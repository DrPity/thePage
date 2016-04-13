<template>
<div class="root" transition="fade" transition-mode="out-in">
  <div class="project-layout">
    <div class="project-overlay" v-if="show" transition="slideUp"></div>
    <span></span>
  </div>
  <div class="row align-center noMargin project-description" transition="fade">
    <div class="small-6 columns">
      <template v-for="img in coded.pictures">
        <div class="row align-middle">
          <div class="small-6 columns">
            <image-loader
                v-bind:src="img"
                alt="Awesome!">
            </image-loader>
          </div>
        </div>
      </template>
    </div>
  </div>
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
      // window.scrollTo(0,0);
      // this.show = true;
      console.log("-- In deactivate -- ", transition)
      transition.next();
      // setTimeout(transition.next, 1000);
      graphics.deactivate();
    },
  },


  ready: function() {
    // document.getElementById('wrapper').style.height = 'auto';
    document.body.style.overflowY = 'scroll';
    // window.scrollTo(0,0);
    var _this = this;
    graphics = new Graphics(_this);
    setTimeout(function () {
      _this.show = false;
    }, 1000);
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
