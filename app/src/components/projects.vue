<template>
  <section class="work" id="first">
    <div class="cont-list-work">
      <template v-for="item in work.grid_items_title">
        <article class="wk color-10" style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" v-on:mouseleave="mouseleave($el, $index)">
          <div class="wrapper-link">
            <a v-link="{ name: 'coded'}" class="link-project title" v-on:mouseenter="mouseenter($el, $index)"><h6 v-text="item | uppercase"></h6></a>
            <div class="wrapper-work">
              <div class="info-work">
                <span class="mono-title">.08</span>
                <h6>RSP Magazine</h6>
              </div>
              <div class="link-detail">
                <div class="cont-link-detail">
                  <span class="year mono-title">Y–2014</span>
                  <span class="mono-title arrow-section" href="#">
                    <span class="label">View Project</span>
                    <span class="arrow">
                      <span>Go to link</span>
                    </span>
                  </span>
                </div>
              </div>
              <div class="info-work-detail" style="height: 0px;">
                <div class="cont-info-work-detail">
                  <div class="thetitle">
                    <h4>RSP Magazine</h4>
                  </div>
                  <div class="info-detail">
                    <div class="detail">
                      <span class="mono-title">Category</span>
                      <span class="name">Website</span>
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
      var el = item.getElementsByClassName('wk');
      var el_2 = item.getElementsByClassName('info-work-detail');
      // console.log("mouseenter: ", el, "index: ", index);
      window.requestAnimationFrame(function() {
        // el[index].style.height = '100%';
        el[index].classList.add('active');
        el[index].addEventListener("transitionend", outHandler(el, index));
      });
      window.requestAnimationFrame(function() {
        el_2[index].style.height = '100%';
        el_2[index].addEventListener("transitionend", outHandler(el_2));
      });

    },
    mouseleave: function(item, index){
      var el = item.getElementsByClassName('wk');
      var el_2 = item.getElementsByClassName('info-work-detail');
      window.requestAnimationFrame(function() {
        el[index].classList.remove('active');
        el[index].addEventListener("transitionend", outHandler(el));
      });
      window.requestAnimationFrame(function() {
        el_2[index].style.height = '0%';
        el_2[index].addEventListener("transitionend", outHandler(el_2));
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
  // el[index].removeEventListener("transitionend", outHandler);
};
</script>
