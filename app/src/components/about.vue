<template>
<div class="about" transition="slide" transition-mode="out-in">
  <navigation
  :showhome="true"
  :showabout="false"
  ></navigation>
  <div class="row expanded align-middle" style="margin-top: 5rem">
    <div class="small-12 medium-5 columns align-self-middle small-order-2 medium-order-1">
      <div class="aboutTxt">
        <div>
          <span>Hi my name is <strong>Michael Schade</strong>, I'm a interaction designer and creative technologist and I'm working at the cross boarders of Art, Design and Technology.
          Currently I'm a researcher and interaction designer at the CITEC institute in Bielefeld - Germany</span>
          <br><br>
          <span>I burn for [</span>
          <div class="burn">
            <span class="line-fix">.</span>
            <div class="words" id="one"  transition="wfade" v-if="show[0]" keep-alive><strong>{{word[0]}}</strong></div>
            <span class="line-fix">.</span>
          </div>
          <span>] , I like everthing related to [</span>
          <div class="like">
            <span class="line-fix">.</span>
            <div class="words" id="two"  transition="wfade" v-if="show[1]"><strong>{{word[1]}}</strong></div>
            <span class="line-fix">.</span>
          </div>
          <span>] and I can offere greate skillz in [</span>
          <div class="offer" id="three" >
            <span class="line-fix">.</span>
            <div class="words" transition="wfade" v-if="show[2]"><strong>{{word[2]}}</strong></div>
            <span class="line-fix">.</span>
          </div> ]
          <br><br>
          <br><br>
          <div class="list">
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
          <div class="about-footer">
            <div>FEEL FREE TO DROP ME A LINE</div>
            <p>Mail - Github - Vimeo - LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
    <div class="small-12 medium-7 columns small-order-1 medium-order-2 small-centered">
        <div class="aboutPic"></div>
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
