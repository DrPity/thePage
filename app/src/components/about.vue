<template>
<div class="about" transition="slide" transition-mode="out-in">
  <navigation
  :showhome="true"
  :showabout="false"
  ></navigation>
  <div class="row expanded align-middle">
    <div class="small-12 columns" style="margin-top: 5rem;">
      <div class="row align-center">
        <div class="small-12 medium-6 columns">
          <div class="aboutPic"></div>
        </div>
      </div>
    </div>
    <div class="small-12 columns align-self-middle">
      <div class="aboutTxt">
        <div>
          <h1 class="text-stuff">
            <span>Hi my name is <strong>Michael Schade</strong>, I'm a interaction designer and creative technologist and I'm working at the cross boarders of Art, Design and Technology.
            Currently I'm a researcher and interaction designer at the CITEC institute in Bielefeld - Germany</span>
            <br><br>
            <div class="extra">
              <span>I burn for </span>
              <br>
              <br>
              <span>[</span>
              <div class="spanner">
                <span class="line-fix">.</span>
                <div class="words" transition="wfade" v-if="show[0]" keep-alive><strong>{{word[0]}}</strong></div>
                <span class="line-fix">.</span>
              </div>
              <span>]</span>
              <br>
              <br>
              <span>, I like everthing related to</span>
              <br>
              <br>
              <span>[</span>
              <div class="spanner">
                <span class="line-fix">.</span>
                <div class="words" transition="wfade" v-if="show[1]"><strong>{{word[1]}}</strong></div>
                <span class="line-fix">.</span>
              </div>
              <span>]</span>
              <br>
              <br>
              <span> and I can offere skillz in </span>
              <br>
              <br>
              <span>[</span>
              <div class="spanner"  >
                <span class="line-fix">.</span>
                <div class="words" transition="wfade" v-if="show[2]"><strong>{{word[2]}}</strong></div>
                <span class="line-fix">.</span>
              </div>
              <span>]</span>
              <div class="list extra">
                <ul>
                  <li><strong>SEEN AT</strong> </li>
                  <li>C-awards - Norrköping <span class="about-year">2016</span></li>
                  <li>Lindholm science park - Göteborg <span class="about-year">2016</span></li>
                  <li>Glassell gallery - Baton Rouge <span class="about-year">2015</span></li>
                  <li>Alibis for Interaction - Landskrona <span class="about-year">2014</span></li>
                  <li>Agera Digital - Göteborg <span class="about-year">2014</span></li>
                  <li>Inter arts center - Malmö <span class="about-year">2014</span></li>
                  <li>Maker Fair - Stockholm <span class="about-year">2014</span></li>
                  <li>Vetenskapfestivalen - Stockholm <span class="about-year">2014</span></li>
                  <li>SIDeR - Stockholm <span class="about-year">2014</span></li>
                  <li>Nordic larp talks - Göteborg <span class="about-year">2014</span></li>
                </ul>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
    <div class="small-12 columns small-centered">
      <div class="row align-center">
        <div class="small-6 columns">
          <div class="about-footer">
            <div>FEEL FREE TO DROP ME A LINE</div>
            <p>Mail - Github - Vimeo - LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');
var $ = require('jquery');
var scramble = require('../scramble');
var scr = new scramble();

var  secOne, secTwo, secThree;

module.exports = {

  inherit: true,
  replace: true,
  name: "about",

  props: {
    about:{
      type: Object,
      required: true
    },
  },

  data: function() {
    return {
      word: ['Creative Thinking', 'Creative Thinking', 'Creative Thinking'],
      show: [false,false,false]
    };
  },

  route: {
    activate: function () {

    },
    canDeactivate: function (transition) {
      transition.next();
    }
  },


  components: {
    'navigation': require('./nav.vue'),
  },

  ready: function() {
    document.body.style.overflowY = 'scroll';
    // style="transform: skewX(4.37785deg) skewY(0.125deg) rotateX(6.254deg) translate3d(0px, -7.2px, 0px);"

    var _this = this;
    secOne = switchWords(_this, 'show[0]', 'word[0]', _this.about.burn)
    setTimeout(function () {
      secTwo = switchWords(_this, 'show[1]', 'word[1]', _this.about.like)
    }, 1000);
    setTimeout(function () {
      secThree = switchWords(_this, 'show[2]', 'word[2]', _this.about.offer)
    }, 2000);

    _this.$set('show[0]',true);
    _this.$set('show[1]',true);
    _this.$set('show[2]',true);
  },

  afterLeave: function(){

  },

  enter: function (el) {

  },

  leave: function (el) {
    clearInterval(secOne);
    clearInterval(secTwo);
    clearInterval(secThree);
    clearInterval(switchWords);
  },

  beforeDestroy: function() {

  },

  methods: {
    mouseenter: function(index){

    },
    mouseleave: function(index){

    }
  },

  // setValue: setValue
};


function switchWords(_this, show, word, list){
  // var counter = 0;
  // console.log(list[counter]);
  // setInterval(function(){
  //   if(counter%2 == 0){
  //     counter=0;
  //   }
  //   $("#" + index).decrypt_effect({
  //     speed: 200,
  //     decrypted_text: list[counter],
  //   });
  //   counter++;
  // }, 5000);

  var counter = 0;
  var lenght = Object.keys(list).length;
  setInterval(function(){
      _this.$set(show,false);
      setTimeout(function () {
        _this.$set(show,true);
        if(counter%lenght == 0){
          counter=0;
          _this.$set(word,list[counter+1]);
        }else{
          _this.$set(word,list[counter+1]);
        }
        // console.log(_this.word[0]);
        counter++;
      }, 1000);
  }, 4000);
}
</script>
