<template>
  <section class="work" id="first">
    <div class="right"></div>
    <div class="cont-list-work">
      <template v-for="item in work.grid_items_title">
        <article class="wk color-10" style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" v-on:mouseleave="mouseleave($el, $index)">
          <div class="wrapper-link">
            <a v-link="{ name: 'coded'}" class="link-project" v-on:mouseenter="mouseenter($el, $index)"></a>
            <div class="wrapper-work">
              <div class="info-work">
                <span class="mono-title">.0{{$index+1}}</span>
                <h6 v-text="item"></h6>
                <div class="link-detail">
                  <span class="year">Year–2014</span>
                  <span class="mono-title arrow-section" href="#">

                  </span>
                </div>
              </div>
              <div class="info-work-detail">
                <div class="cont-info-work-detail">
                  <div class="thetitle">
                    <h2 v-text="item | uppercase"></h2>
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
      title: 'some title'
    };
  },


  ready: function() {
    setTimeout(function(){ $('.work').addClass('transform'); }, 500);
    // var el = document.querySelectorAll('.work:'),':before';
    // console.log("The element: ", str);
    // el.style.transform = 'rotate(-4deg)';
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
    mouseenter: function(item, index){
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
      });

    },
    mouseleave: function(item, index){
      var el = item.getElementsByClassName('wk'),
          el_2 = item.getElementsByClassName('info-work-detail'),
          el_3 = item.getElementsByClassName('link-project'),
          el_4 = item.getElementsByClassName('thetitle');
      window.requestAnimationFrame(function() {
        el[index].classList.remove('active');
        el_2[index].classList.remove('active');
        el_3[index].classList.remove('active');
        el_4[index].classList.remove('active');
      });

    },
    link: function(index){
      console.log("link: ", this.work.links[index]);
      return this.work.links[index+1];
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
</script>
