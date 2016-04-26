<template>
<div class="root" transition="fade" transition-mode="out-in">
  <div class="coverScreen">
    <div class="project-layout">
      <div class="absoluteCentering header" style="top: 45%">
        CODED REALITY
      </div>
      <div class="project-overlay" v-if="show" transition="slideUp"></div>
    </div>
    <div class="project-coverup" style="transform: matrix(1, 0, 0, 1, 0, 0);">
      <div class="absoluteCentering">
        <div class="circle">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <image xlink:href="images/down_arrow.svg" x="0" y="0" height="100" width="100" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="project-header">
    <div class="row align-center noMargin">
      <div class="small-12 large-1 columns">
      </div>
      <div class="small-12 large-2 columns">
        <span><h3>CODED REALITY</h3></span>
      </div>
      <div class="small-12 large-9 columns">
      </div>
      <div class="small-12 large-1 columns">
      </div>
      <div class="small-12 large-5 columns">
        <span><p>Some test text of whatever I think should stand here</p></span>
      </div>
      <div class="small-12 large-6 columns">
      </div>
    </div>
  </div>
  <div class="row align-center noMargin project-description">
    <div class="small-12 columns">
      <template v-for="section in coded.sections">
        <div class="project-section" transition="fade" :style="{'backgroundColor': section.sectionColor, 'backgroundImage': section.sectionBg}">
          <template v-for="media in section.media">
            <template v-if="media.type === 'VIDEO'">
              <div class="row noMargin align-center small-collapse">
                <div class="small-12 large-8 columns margin-iframe">
                  <div class="flex-video widescreen vimeo">
                    <iframe class="b-lazy" data-src="{{media.src}}" width="640" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="media.type === 'IMAGE'">
              <div class="row noMargin align-center small-collapse">
                <div class="small-12 large-8 columns small-centered margin">
                  <img class="b-lazy"
                	 src="../images/load.gif"
                	 data-src="{{media.src}}"
                	 alt="Image description" />
                </div>
              </div>
            </template>
            <template v-if="media.type === 'TEXT'">
              <div class="project-text row noMargin align-center small-collapse">
                <div class="small-12 large-8 columns margin">
                  <div class="row noMargin align-center small-collapse">
                    <div class="small-12 large-12 columns margin">
                      <strong>{{text[media.src]}}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </template>
    </div>
  </div>
</div>
</template>

<!-- <iframe src="https://player.vimeo.com/video/157266155" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var Blazy = require('blazy');
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
      text: [
            "This is a text section A",
            "This is a text section B",
            ]
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
        // graphics.deactivate();
      }
      this.show = true;
      transition.next();
      // setTimeout(transition.next, 1000);
    },
  },

  ready: function() {
    // document.getElementById('wrapper').style.height = 'auto';
    if (app.getRouter().app.$data.redirect === false){
      console.log("Graphics Init: ", this);
      document.body.style.overflowY = 'scroll';
      window.scrollTo(0,0);
      var _this = this;
      // graphics = new Graphics(_this, "../images/memyselfnI.jpg");
      setTimeout(function () {
        _this.show = false;
      }, 500);

      var bLazy = new Blazy({
                  breakpoints: [{
                  width: 420 // Max-width
                  , src: 'data-src-small'
                }]
        , success: function(element){
          setTimeout(function(){
          // We want to remove the loader gif now.
          // First we find the parent container
          // then we remove the "loading" class which holds the loader image
            var parent = element.parentNode;
            parent.className = parent.className.replace(/\bloading\b/,'');
              }, 200);
          }
      });

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
