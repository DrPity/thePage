<template>
<div class="root" transition="fade">
  <navigation
  :showhome="true"
  :showabout="true"
  ></navigation>
  <div class="coverScreen">
    <div class="project-layout">
      <div class="absoluteCentering header" style="top: 45%">
        {{musicalcubes.title | uppercase}}
      </div>
      <div class="project-overlay" v-if="show" transition="slideUp"></div>
    </div>
    <div class="project-coverup" style="transform: matrix(1, 0, 0, 1, 0, 0); transform: translateZ(0); -webkit-transform: translateZ(0);">
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
        <span><h3>{{musicalcubes.title | uppercase}}</h3></span>
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
      <template v-for="section in musicalcubes.sections">
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
          <navfooter style="position: relative!important;"></navfooter>
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
var Blazy = require('blazy');
var Graphics = require('../graphics');
var graphics = null;
var switchedColor = false;


module.exports = {

  // inherit: true,
  replace: true,
  name: "musicalcubes",

  props: {
    work:{
      type: Object,
      required: true
    },
    musicalcubes:{
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

  components: {
    'navigation': require('./nav.vue'),
    'navfooter': require('./navFooter.vue'),
  },

  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().app.$data.nextRoute = "musicalcubes";
        app.getRouter().go({ name: 'loader' })
      }
    },
    canDeactivate: function (transition) {
      if (app.getRouter().app.$data.redirect === false){
        graphics.deactivate();
      }
      this.show = true;
      transition.next();
    },
  },

  ready: function() {
    if (app.getRouter().app.$data.redirect === false){
      document.body.style.overflowY = 'scroll';
      window.scrollTo(0,0);
      var _this = this;
      graphics = new Graphics(_this, "../images/home_large.jpg");
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
            var parent = element.parentNode;
            parent.className = parent.className.replace(/\bloading\b/,'');
              }, 200);
          }
      });
      var pixelRatio = window.devicePixelRatio;
      if(window.innerWidth >= 769*pixelRatio){
        var el = this.$el.getElementsByClassName('project-header');
        var navEl = document.getElementsByClassName('nav-links');
        var eloffset = _.getOffset(el[0]).top;
        navEl[0].classList.add('active');
        switchedColor = true;
        window.onscroll = function (e) {
          var offset = window.pageYOffset,
              switchValue = Math.floor(eloffset * 0.8);
              if(window.innerWidth >= 769*pixelRatio){
                checkNav(switchValue, offset, navEl);
              }
        }
      }

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
};

function checkNav(eloffset, offset, el){
  if(eloffset >= offset && !switchedColor){
    el[0].classList.add('active');
    switchedColor = true;
  }else if(eloffset < offset && switchedColor){
    el[0].classList.remove('active');
    switchedColor = false;
  }
}

</script>
