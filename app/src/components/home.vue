<template>
  <div class="root" transition="hfade" keep-alive>
    <!-- Menu Toggle -->
    <navigation
    :showhome="false"
    :showabout="true"
    ></navigation>
    <div class="topbar"></div>
    <div class="bg-overlay" v-on:mouseenter="mouseenter($el)" v-on:mouseleave="mouseleave($el)" v-on:mousemove="mousemove($el,$event)" v-on:transitionend="trans()"></div>
    <!-- First section and Background Image -->
    <section class="row noMargin color_0">
      <div class="bg" style="transition: 100ms; transform: matrix(1, 0, 0, 1, 0, 0);">
        <div class="tag">
          <h6 id="0" class="name">{{home.description.name | uppercase}}</h6>
          <h6 id="1" class="description_one">{{home.description.one | uppercase}}</h6>
          <h6 id="2" class="description_two">{{home.description.two | uppercase}}</h6>
        </div>
        <div class="scroll_hint">
          <h6 id="3" class="scroll">{{home.description.scroll | uppercase}}</h6>
          <div class="circle">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <image xlink:href="images/down_arrow.svg" x="0" y="0" height="100" width="100" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- Projects  -->
    <work :work="work" transition="hfade"></work>
  </div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var scramble = require('../scramble');
var scr = new scramble();
var transitionEnd = _.transitions();
var op = {
    scale: 1.08,
    strength: 25,
    animationSpeed: "100ms",
    isAnimating: false
};

module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  props: {
    home:{
      type: Object,
      required: true
    },
    work:{
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
      window.onscroll = null;
      transition.next();
    }
  },

  data: function() {
    return {
      negative: false
    };

  },

  components: {
    'work': require('./projects.vue'),
    'navigation': require('./nav.vue'),
  },


  ready: function() {
    if (app.getRouter().app.$data.redirect === false){

      document.getElementById('wrapper').style.height = 'auto';
      //scrambling
      var index = 0;
      var scrambleItems = ["0", "1", "2", "3"];
      scr.scramble(scrambleItems, this.home.description);
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
    }
  },

  afterLeave: function(){
    // smooth.destroy();
  },

  enter: function (el) {
  },

  beforeLeave: function (el) {

  },

  beforeDestroy: function() {

  },

  methods: {
    click: function(){

    },
    background: function(url){

      return "background-image:" + "url(" + url +  ");";
    },
    trans: function(){
      console.log("transition done");
    },
    mouseenter: function(item){
      if(!_.checkForMobile() && screen.width >= 699){
        op.isAnimating = true;
        var el = item.getElementsByClassName('bg');
        var offsetY = (window.outerHeight - window.innerHeight) /6;
        var x = Math.abs( _.floor((event.clientX / window.innerWidth) * op.strength)),
            y = Math.abs(_.floor((event.clientY / window.innerHeight) * op.strength - offsetY));
        window.requestAnimationFrame(function() {
          el[0].style.transition  ='300ms';
          el[0].style.transform = 'matrix(' + op.scale + ',0,0,' + op.scale  + ',' + x + ',' + y + ')';
          // el[0].addEventListener(transitionEvent, inHandler(el), false);
          el[0].addEventListener(transitionEnd, handler);
        });
      }
    },
    mouseleave: function(item){
      if(!_.checkForMobile() && screen.width >= 699){
        op.isAnimating = true;
        var el = item.getElementsByClassName('bg');
        window.requestAnimationFrame(function() {
          el[0].style.transition  ='300ms';
          el[0].style.transform = 'matrix(' + 1 + ',0,0,' + 1 + ',0,0)';
          // $('.bg').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
          //   })
        });
      }
    },
    mousemove: function(item,event){
      if(!_.checkForMobile() && screen.width >= 699){
        if (!op.isAnimating){
          var el = item.getElementsByClassName('bg');
          var offsetY = (window.outerHeight - window.innerHeight) /6;
          var x = Math.abs( _.floor((event.clientX / window.innerWidth) * op.strength)),
              y = Math.abs(_.floor((event.clientY / window.innerHeight) * op.strength - offsetY));

          window.requestAnimationFrame(function() {
            // el[0].style['-webkit-transition']  ='none';
            el[0].removeEventListener("transitionend", handler);
            el[0].style.transition  ='none';
            // el[0].style['-webkit-transform'] = 'matrix(' + op.scale + ',0,0,' + op.scale + ',' + x + ',' + y + ')';
            el[0].style.transform = 'matrix(' + op.scale + ',0,0,' + op.scale + ',' + x + ',' + y + ')';
          });
        }
      }
    }
  },
};


function handler(event){
  // console.log("END", event);
  op.isAnimating = false;
  // console.log("Enter finished", el[0]);
  // console.log("Enter finished", $('.bg'));
  // elem[0].removeEventListener(transitionEnd, inHandler);
};

function outHandler(el){
  op.isAnimating = false;
  console.log("Leave finished");
  el[0].removeEventListener("transitionend", outHandler);
};

//:style="[home.negative ? {backgroundImage: home.background.nlogo} : '']"
</script>
