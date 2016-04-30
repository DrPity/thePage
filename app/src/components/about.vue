<template>
<div class="about" transition="slide" transition-mode="out-in">
  <div class="row expanded align-middle">
    <div class="small-12 medium-5 columns align-self-middle small-order-2 medium-order-1">
      <div class="aboutTxt">
        <div>
          <span>Hi my name is <strong>Michael Schade</strong>, I'm a interaction designer and creative technologist and I'm working at the cross boarders of Art, Design and Technology.
          Currently I'm a researcher and interaction designer at the CITEC institute in Bielefeld - Germany</span>
          <br><br>
          <span>I burn for</span>
          <div class="burn">
            <div class="words" id="one" ><strong transition="wfade" v-if="show[0]">{{word[0]}}</strong></div>
          </div>
          <span>, I like everthing related to</span>
          <div class="like">
            <div class="words" id="two" ><strong transition="wfade" v-if="show[1]">{{word[1]}}</strong></div>
          </div>
          <span>I can offere skillz in</span>
          <div class="offer" id="three" >
            <div class="words"><strong transition="wfade" v-if="show[2]">{{word[2]}}</strong></div>
          </div>
          <br><br>
          <br><br>
          <div class="list">
            <ul>
              <li><strong>Seen at</strong> </li>
              <li>C-awards - Norrköping Y-2016</li>
              <li>Lindholm science park - Göteborg Y-2016</li>
              <li>Glassell gallery - Baton Rouge Y-2015</li>
              <li>Alibis for Interaction - Landskrona Y-2014</li>
              <li>Agera Digital - Göteborg Y-2014</li>
              <li>Inter arts center - Malmö Y-2014</li>
              <li>Maker Fair - Stockholm Y-2014</li>
              <li>Vetenskapfestivalen - Stockholm Y-2014</li>
              <li>SIDeR - Stockholm Y-2014</li>
              <li>Nordic larp talks - Göteborg Y-2014</li>
            </ul>
          </div>
          <div class="about-footer">
            <p>FEEL FREE TO DROP ME A LINE</p>
            <p>Mail - Github - Vimeo - Behanced - LinkedIn</p>
          </div>
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


  ready: function() {
    // document.getElementById('wrapper').style.height = 'auto';
    // document.getElementById('wrapper').style.height = 'auto';
    var index = 0;
    // var scrambleItems = ["0", "1", "2", "3"];
    // scr.scramble(scrambleItems, this);
    // for (var key in this.home.description) {
    //   if (this.home.description.hasOwnProperty(key)) {
    //     var orig = this.home.description[key];
    //     $("#" + index).decrypt_effect({
    //       speed: _.randomInt(500,700),
    //       decrypted_text: orig,
    //     });
    //     index++;
    //   }
    // }

    var _this = this;
    secOne = switchWords(_this, 'show[0]', 'word[0]', _this.about.burn)
    setTimeout(function () {
      secTwo = switchWords(_this, 'show[1]', 'word[1]', _this.about.like)
    }, 2000);
    setTimeout(function () {
      secThree = switchWords(_this, 'show[2]', 'word[2]', _this.about.offer)
    }, 1000);

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
