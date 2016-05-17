<template>
  <div class="root" transition="fade">
    <project
    :work="work"
    :description="'Some text'"
    :projectdata="mubrace"
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
  name: "mubrace",

  props: {
    work:{
      type: Object,
      required: true
    },
    mubrace:{
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
        app.getRouter().app.$data.nextRoute = _this.mubrace.route;
        app.getRouter().go({ name: 'loader' })
      }
    },
    canDeactivate: function (transition) {
      if (app.getRouter().app.$data.redirect === false){
        graphics.deactivate();
        window.onscroll = null;
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
      graphics = new Graphics(_this, _this.mubrace.titlePicture);

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
      // var pixelRatio = window.devicePixelRatio;
      // if(window.innerWidth >= 769*pixelRatio){
      //   var el = this.$el.getElementsByClassName('project-header');
      //   var navEl = document.getElementsByClassName('nav-links');
      //   var eloffset = _.getOffset(el[0]).top;
      //   navEl[0].classList.add('active');
      //   switchedColor = true;
      //   window.onscroll = function (e) {
      //     var offset = window.pageYOffset,
      //         switchValue = Math.floor(eloffset * 0.8);
      //         if(window.innerWidth >= 769*pixelRatio){
      //           checkNav(switchValue, offset, navEl);
      //         }
      //   }
      // }

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

</script>
