<template>
  <div class="root" transition="fade">
    <project
    :work="work"
    :description="'The human brain is made up of billions of interconnected neurons. The patterns of interaction between these neurons result in thoughts and emotional states. Generally speaking, every interaction between the neurons can be measured as a small electrical discharge. These patterns of different amplitude and frequency show a characteristic wave which can be measured by a so called BCI (Brain Computer Interface). In our theatrical performance, a coded reality scenario, participants wear such a BCI. We make use of the BCI’s ability to envision brain wave activities corresponding to different mental states. Each mental state is assigned a characteristic colour while state changes are visualised by colour fades: Beta waves (12-30hz) are associated with concentration corresponding with the colour red. Waves between 8 and 12 hertz, alpha waves, are associated with relaxation and green colour. A neutral state in our setup would be a state between concentration and relaxation which is indicated by orange. The participants’ brain wave activities are constantly measured and collected in a computer program where the average colour is calculated and finally displayed at the “pyramid campfire” in the middle of the setup. The colour at the top of the pyramid then eventually has an influence on the course of our performance, i.e. on the interactive storyline the narrator reads. The participants’ activities may drastically change the story.'"
    :projectdata="codedreality"
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
  name: "codedreality",

  props: {
    work:{
      type: Object,
      required: true
    },
    codedreality:{
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
        app.getRouter().app.$data.nextRoute = _this.codedreality.route;
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
      // document.body.style.overflowY = 'scroll';
      document.getElementById('wrapper').style.height = 'auto';
      window.scrollTo(0,0);
      var _this = this;
      graphics = new Graphics(_this, _this.codedreality.titlePicture);

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
