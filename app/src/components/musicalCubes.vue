<template>
  <div class="root" transition="fade">
    <project
    :work="work"
    :description="'<i>MusicalCubes</i> is a collaborative interactive art installation for open spaces. It consists of eight illuminated semi transparent cubes, hanging from the ceiling in a 2x4 pattern. The users can interact with the installation in various ways. They can record their own sounds and transfer them between cubes in order to make a beat or melody in their desired way. '"
    :projectdata="musicalcubes"
    ></project>
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

  inherit: true,
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

    };
  },

  components: {
    'navigation': require('./nav.vue'),
    'navfooter': require('./navFooter.vue'),
    'project': require('./projectBase.vue'),
  },

  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        var _this = this;
        app.getRouter().app.$data.nextRoute = _this.musicalcubes.route;
        app.getRouter().go({ name: 'loader' })
      }
    },
    canDeactivate: function (transition) {
      if (app.getRouter().app.$data.redirect === false){
        graphics.deactivate();
        window.onscroll = null;
        window.onresize = null;
      }
      this.show = true;
      transition.next();
    },
  },

  ready: function() {
    if (app.getRouter().app.$data.redirect === false){
      document.getElementById('wrapper').style.height = 'auto';
      window.scrollTo(0,0);
      var _this = this;
      graphics = new Graphics(_this, _this.musicalcubes.titlePicture);

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

      window.onresize = function(){
        switchNav(_this);
      }
      switchNav(_this);
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

function switchNav(_this){
  var pixelRatio = 1;
  var el = _this.$el.getElementsByClassName('project-header');
  var navEl = document.getElementsByClassName('nav-links');
  var eloffset = _.getOffset(el[0]).top;

  if(window.innerWidth >= 1024*pixelRatio){
    navEl[0].classList.add('active');
    switchedColor = true;
    window.onscroll = function (e) {
      var offset = window.pageYOffset,
      switchValue = Math.floor(eloffset * 0.8);
      if(window.innerWidth >= 1024*pixelRatio){
        checkNav(switchValue, offset, navEl);
      }
    }
  }else if (switchedColor){
    navEl[0].classList.remove('active');
  }
}

</script>
