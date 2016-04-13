<template>
  <section class="work" id="first">
    <div class="right"></div>
    <div class="headline">
      <h3>The Projects</h3>
    </div>
    <div class="cont-list-work">
      <template v-for="item in work.grid_items_title">
        <article class="wk color-10" v-on:mouseleave="mouseleave($el, $index)">
          <div class="wrapper-link">
            <a v-link="{ name: 'coded'}" class="link-project" v-on:mouseenter="mouseenter($el, $index)"></a>
            <div class="wrapper-work">
              <div class="info-work">
                <span class="mono-title">.0{{$index+1}}</span>
                <h6 v-text="item"></h6>
                <div class="link-detail">
                  <span class="year">Year–{{work.year[$index+1]}}</span>
                  <span class="mono-title arrow-section" href="#">
                  </span>
                </div>
              </div>
              <div class="info-work-detail">
                <div class="cont-info-work-detail">
                  <div class="thetitle">
                    <span v-text="item | uppercase"></span>
                  </div>
                  <div class="info-detail">
                    <div class="detail">
                      <span class="mono-title">Description</span>
                      <span class="name" v-text="work.description[$index+1] | uppercase"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var active = [false,false,false,false,false,false,false,false,false];
var oldpos = -1;

module.exports = {

  // inherit: true,
  replace: true,
  name: "projects",

  props: {
    work:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
      show: false,
      transition: false
    };
  },


  ready: function() {
    //TODO: Need to have a fix concerning the treshold on endvalue
    if (app.getRouter().app.$data.redirect === false){
      setTimeout(function(){ $('.work').addClass('transform'); }, 500);
      var el = this.$el.getElementsByClassName('cont-list-work');
      var _this = this;
      var eloffset = _.getOffset(el[0]).top;
      console.log("Native dist: ", eloffset);
      if(_.checkForMobile() && !this.transition){
        window.onscroll = function (e) {
          var offset = window.pageYOffset,
          startValue = Math.floor(eloffset * 0.8),
          endValue = startValue + 650;//startValue + 850;
          if(offset >= startValue && offset <= endValue)
          {
            var pos = Math.floor(_.map(offset, startValue,endValue,0,9));
            if(pos != oldpos){
              if(oldpos != -1){
                mouseLeaveHandler(_this.$el, oldpos);
              }
              mouseEnterHandler(_this.$el, pos);
              oldpos = pos;
            }
          }else if(offset < startValue && oldpos != -1){
            mouseLeaveHandler(_this.$el, oldpos);
            oldpos = -1;
          }
        };
      }
    }
  },

  afterLeave: function(){

  },

  enter: function (el) {

  },

  beforeLeave: function (el) {

  },

  beforeDestroy: function() {

  },

  methods: {
    mouseenter: function(item, index){
      mouseEnterHandler(item,index);
    },
    mouseleave: function(item, index){
      mouseLeaveHandler(item,index);
    },
    link: function(index){
      console.log("link: ", this.work.links[index]);
      return this.work.links[index+1];
    },

    test: function(el, index){
      console.log("test: ", el, index);
    }
  },
  // setValue: setValue
};


function inHandler(el,index){
  el[index].removeEventListener("transitionend", inHandler);
};

function outHandler(el,index){
  el[index].removeEventListener("transitionend", outHandler);
};

function mouseEnterHandler(item, index){
  // if(!active[index]){
    var el = item.getElementsByClassName('wk'),
        el_2 = item.getElementsByClassName('info-work-detail'),
        el_3 = item.getElementsByClassName('link-project'),
        el_4 = item.getElementsByClassName('thetitle');
    // console.log("mouseenter: ", el, "index: ", index);
    window.requestAnimationFrame(function() {
      el[index].classList.add('active');
      el_2[index].classList.add('active');
      el_3[index].classList.add('active');
      el_4[index].classList.add('active');
      active[index] = true;
    });
  // }
};

function mouseLeaveHandler(item, index){
  // if(active[index]){
    var el = item.getElementsByClassName('wk'),
        el_2 = item.getElementsByClassName('info-work-detail'),
        el_3 = item.getElementsByClassName('link-project'),
        el_4 = item.getElementsByClassName('thetitle');
    window.requestAnimationFrame(function() {
      el[index].classList.remove('active');
      el_2[index].classList.remove('active');
      el_3[index].classList.remove('active');
      el_4[index].classList.remove('active');
      active[index] = false;
    });
  // }
};

function touch(){
  var d = document.getElementById("div1");
  var topPos = d.offsetTop;
}
</script>
