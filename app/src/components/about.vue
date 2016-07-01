<template>
<div class="root" transition="slide">
<navigation
:showhome="true"
:showabout="false"
transition="fade"
></navigation>
<div class="about">
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
        <div class="small-12 columns align-self-middle">
          <div class="text-stuff">
            <div class="description">My name is <b style="font-weight: 900;">Michael Schade</b>.<br>I am an interaction designer and creative technologist and I work at the borders of art, design and technology. Currently I am a researcher and interaction designer at the CITEC Institute in Bielefeld, Germany.</div>
            <div class="extra mediumLargeFont">
              <div class="abox">
                <span>I BURN FOR</span>
                <br>
                <br>
                <div class="spanner">
                  <span class="words" transition="wfade" v-if="show[0]"><strong>{{word[0]}}</strong></span><br>
                  <span class="words" transition="wfade" v-if="show[1]"><strong>{{word[1]}}</strong></span><br>
                  <span class="words" transition="wfade" v-if="show[2]"><strong>{{word[2]}}</strong></span><br>
                </div>
                <br><br>
              </div>
              <div class="abox">
                <br><br>
                <span>I CAN OFFER SKILLS IN</span>
                <br><br>
                <div class="spanner">
                  <span class="words" transition="wfade" v-if="show[3]"><strong>{{word[3]}}</strong></span><br>
                  <span class="words" transition="wfade" v-if="show[4]"><strong>{{word[4]}}</strong></span><br>
                  <span class="words" transition="wfade" v-if="show[5]"><strong>{{word[5]}}</strong></span><br>
                </div>
              </div>
              <!-- <span>]</span> -->
              <div class="list extra mediumFont">
                <ul>
                  <li><strong style="color: #000">SEEN AT</strong> </li>
                  <li><span class="about-year">[2016]</span><br>C-Awards - Norrköping</li>
                  <li>Lindholm Science Park - Göteborg</li>
                  <li><span class="about-year">[2015]</span><br>Glassell Gallery - Baton Rouge</li>
                  <li><span class="about-year">[2014]</span><br>Alibis for Interaction - Landskrona</li>
                  <li>Agera Digital - Göteborg</li>
                  <li>Inter Arts Center - Malmö</li>
                  <li>Maker Fair - Stockholm</li>
                  <li>Science Festival - Göteborg</li>
                  <li>SIDeR - Stockholm</li>
                  <li>Nordic Larp Talks - Göteborg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="small-12 columns small-centered">
      <div class="row align-center">
        <div class="small-12 columns">
          <div class="about-footer">
            <div class="mediumFont">Feel free to contact me</div>
            <p class="mediumFont">
              <a v-bind:href=" 'mailto:' + contact.mail">Mail</a> -
              <a v-bind:href="'https://vimeo.com/user34465232'">Vimeo</a> -
              <a v-bind:href="'https://github.com/DrPity'">Github</a> -
              <a v-bind:href="'https://www.linkedin.com/in/michael-schade-b44b6077'">LinkedIn</a>
            </p>
          </div>
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

var  secOne, secTwo, secThree, secFour, secFive, secSix;

module.exports = {

  inherit: true,
  replace: true,
  name: "about",

  props: {
    about:{
      type: Object,
      required: true
    },
    home:{
      type: Object,
      required: true
    },
    work:{
      type: Object,
      required: true
    },
    codedreality:{
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
      word: [],
      show: [],
      contact: app.getRouter().app.$data.contact
    };
  },

  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().app.$data.nextRoute = "about";
        app.getRouter().go({ name: 'loader' })
      }
    },
    canDeactivate: function (transition) {
      transition.next();
    }
  },


  components: {
    'navigation': require('./nav.vue'),
  },

  ready: function() {
    if (app.getRouter().app.$data.redirect === false){
      var _this = this;
      document.getElementById('wrapper').style.height = 'auto';
      // document.body.style.overflowY = 'scroll';
      window.scrollTo(0,0);

      //make this generic and non redundant when there is the time!!!
      secOne = switchWords(_this, 'show[0]', 'word[0]', _this.about[0])
      setTimeout(function () {
        secTwo = switchWords(_this, 'show[1]', 'word[1]', _this.about[1])
      }, 1000);
      setTimeout(function () {
        secThree = switchWords(_this, 'show[2]', 'word[2]', _this.about[2])
      }, 2000);

      secFour = switchWords(_this, 'show[3]', 'word[3]', _this.about[3])
      setTimeout(function () {
        secFive = switchWords(_this, 'show[4]', 'word[4]', _this.about[4])
      }, 1000);
      setTimeout(function () {
        secSix = switchWords(_this, 'show[5]', 'word[5]', _this.about[5])
      }, 2000);

      _this.$set('show[0]',true);
      _this.$set('show[1]',true);
      _this.$set('show[2]',true);
      _this.$set('show[3]',true);
      _this.$set('show[4]',true);
      _this.$set('show[5]',true);
    }
  },

  afterLeave: function(){

  },

  enter: function (el) {

  },

  leave: function (el) {
    clearInterval(secOne);
    clearInterval(secTwo);
    clearInterval(secThree);
    clearInterval(secFour);
    clearInterval(secFive);
    clearInterval(secSix);
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
  word = word.trim();
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
