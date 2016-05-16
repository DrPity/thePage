<template>
  <div class="root" transition="fade">
    <project
    :work="work"
    :description="'Stories and sagas have been a means to reflect and share knowledge since the dawn of humanity. In our digital age, technology around us take on living and sentient forms. Our experience of the borders between eachother, as well as between us and technology, are erased in time and space and thereby creates a form of illusionary meetings. From this perspective it seems evident to mix the classical experience of storytelling with performace arts and technology, in order to better understand what it is to be human today.
                  In the project “Coded Reality” we want to bend and explore the borders that we are used to percieve on stage, and within storytelling. Participants, a part of the audience, will control an interactive narrative through their collective unconcious reactions through a neural interface. Thorugh this performance and experience we want to ask questions about agency, integrity and social power in a technological context. Through a creative technological experience we want to create a performance laboratory about human interaction for both participants and audience.
                  With the support of Kulturbryggan we are carrying out a pilot in the autumn of 2014 on the conferences of “Alibis for Interaction” and “Agera Digitalt”. In a fifteen minute performance, an interactive story will be told. Six people from the audience are connected through a neural interface, which gives feedback to the storyteller of the collective unconsious of the participants. This feedback controls in what way the interactive story unfolds, in real time, on stage.'"
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
