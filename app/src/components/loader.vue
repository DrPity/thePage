<template>
  <div id="loader" transition="fade">
    <div class="loaderBg"></div>
    <div id="progress">{{preloadBar}}</div>
    <div id="progressbar">
      <div class="msg"></div>
    </div>
  </div>
</template>

<script>
'use strict';
var app = require('../index.js');
var Preloader = require('../preloader.js');

module.exports = {

  inherit: true,
  replace: true,
  name: "preloader",

  data: function() {
    return {
      id: app.getModel().preloader.id,
      preloadBar: app.getModel().preloader.preloadBar,
    };

  },
  route: {
    activate: function () {

    },
    canDeactivate: function (transition) {
      setTimeout(transition.next, 1000);
      // transition.from('*');
      // transition.to('/home');
      // transition.next();
    },
    data: function (){

    }
  },

  beforeEnter: function() {
    // document.getElementById('wrapper').style.height = 'auto';
  },

  ready: function() {
    console.log("preloader init");
    Preloader.init();
    app.getRouter().app.$data.redirect = false;
    // document.cookie="cached";
  },

  beforeDestroy: function(e) {
    console.log("Redirect test", this);
  },

  methods: {

    remove: function(){
      console.log("Remove this element: ", this);
      this.$remove(0,false);
    }

  },
  // setValue: setValue
};
</script>
