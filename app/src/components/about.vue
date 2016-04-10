<template>
<div class="about" transition="slide" transition-mode="out-in">
  <div class="row expanded align-middle">
    <div class="small-12 medium-5 column align-self-middle small-order-2 medium-order-1">
      <div class="aboutTxt">
        <div>
          <span>Hi my name is Michael Schade, I'm a interaction designer and creative technologist and I'm working at the cross boarders of Art, Design and Technology.
          Currently I'm a researcher and interaction designer at the CITEC institute in Bielfeld - Germany</span>
          <br><br>
          <span>I burn for</span>
          <div class="burn">
            <div class="words"><strong transition="wfade" v-if="show[0]"> {{word[0]}} </strong></div>
          </div>
          <span>, I like everthing related to</span>
          <div class="like">
            <div class="words"><strong transition="wfade" v-if="show[1]"> {{word[1]}} </strong></div>
          </div>
          <span>I can offere skillz in</span>
          <div class="offer">
            <div class="words"><strong transition="wfade" v-if="show[2]"> {{word[2]}} </strong></div>
          </div>
          <br><br>
          <strong class="list">
            <ul>
              <li>Seen at</li>
              <li>C-awards - Norrköping /2016</li>
              <li>Lindholm science park - Göteborg /2016</li>
              <li>Glassell gallery - Baton Rouge /2015</li>
              <li>Alibis for Interaction - Landskrona /2014</li>
              <li>Agera Digital - Göteborg /2014</li>
              <li>Inter arts center - Malmö /2014</li>
              <li>Maker Fair - Stockholm /2014</li>
              <li>Vetenskapfestivalen - Stockholm /2014</li>
              <li>SIDeR - Stockholm /2014</li>
              <li>Nordic larp talks - Göteborg /2014</li>
            </ul>
          </strong>
        </div>
      </div>
    </div>
    <div class="small-12 medium-7 columns small-order-1 medium-order-2">
      <div class="aboutPic">
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
      word: ['Art', 'Other Stuff', 'More'],
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


  ready: function() {
    document.getElementById('wrapper').style.height = 'auto';

    var _this = this;
    secOne = switchWords(_this, 'show[0]', 'word[0]', _this.about.burn)
    setTimeout(function () {
      secTwo = switchWords(_this, 'show[1]', 'word[1]', _this.about.like)
    }, 600);
    setTimeout(function () {
      secThree = switchWords(_this, 'show[2]', 'word[2]', _this.about.offer)
    }, 1200);

    _this.$set('show[0]',true);
    _this.$set('show[1]',true);
    _this.$set('show[3]',true);
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
