<template>
<div transition="fade" transition-mode="out-in">
  <div class="project-layout">
    <div class="project-overlay" v-if="show" transition="slideUp" transition-mode="out-in"></div>
  </div>
  <div class="row align-center noMargin project-description" v-if="!show">
    <div class="small-6 columns">
      <template v-for="picture in coded.pictures">
        <div class="row align-middle">
          <div class="small-6 columns">
            <img src="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif" v-img="picture">
          </div>
        </div>
      </template>
    </div>
  </div>
    <!--  transition="slide" transition-mode="out-in" -->
    <!-- <template v-for="picture in coded.pictures">
      <div class="row align-middle">
        <div class="small-6 columns">
          <img src="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif" v-img="picture">
        </div>
      </div>
    </template> -->
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

    },
    canDeactivate: function (transition) {
      // window.scrollTo(0,0);
      this.show = true;
      setTimeout(transition.next, 1000);
      graphics.deactivate();
    }
  },


  ready: function() {
    // document.getElementById('wrapper').style.height = 'auto';
    document.body.style.overflowY = 'scroll';
    window.scrollTo(0,0);
    var _this = this;
    graphics = new Graphics(_this);
    this.show = false;
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

    },
    mouseleave: function(index){

    }
  },
  // setValue: setValue
};

</script>
