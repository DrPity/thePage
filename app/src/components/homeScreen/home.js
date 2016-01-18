'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');
var $ = require('jquery');
var scale = require('../../perfectScale.js');
var scramble = require('../../scramble');
var scr = new scramble();

module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  template: require('./home.html'),



  route: {
    activate: function () {
      console.log('activated');
      // var rescale = new scale();
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().go('/');
        console.log(true);
      }
    },
    canDeactivate: function (transition) {
      console.log('You are not allowed to leave.');
      transition.next();
      this.$remove(0,false);
    }
  },

  data: function() {
    return {
      id: app.getModel().home.id,
      links: app.getModel().home.links,
      description: app.getModel().home.description,
      introText: require("../text/intro.html"),
      work: require("../work/work.html"),
    };

  },


  ready: function() {
    var index = 0;
    var scrambleItems = ["0", "1", "2"];
    scr.scramble(scrambleItems, this);
    for (var key in this.description) {
      if (this.description.hasOwnProperty(key)) {
        var orig = this.description[key];
        $("#" + index).decrypt_effect({
          speed: _.randomInt(100,700),
          decrypted_text: orig,
        });
        index++;
      }
    }
    // for (var item = 0; item < scrambleItems.length; item++) {
    //   var wordList = this.description;
    //   console.log("wordList: ", wordList[0]);
      // var orig = linkArray.links[item].linkName;
      // console.log("orig:", orig.length);
      // $("#" + item).decrypt_effect({
      //   speed: _.randomInt(100,700),
      //   decrypted_text: orig,
      // });
    // }
    // $( ".bg" ).fadeIn( 1000, function() {
    //
    // });


    //use this to remove a element
    // console.log("Children", app.getMainView().$children);
    // app.getMainView().$children[0].$remove(function(){
    //   console.log("Bla");
    // },this);
  },

  afterLeave: function(){
    console.log("after Leave");
    // console.log("Children", app.getMainView().$children);
    // app.getMainView().$children[0].$remove(function(){
    //   console.log("Bla");
    // },this);
  },

  enter: function (el) {
    // console.log("Enter Home");
    // if (app.getRouter().app.$data.redirect === true){
    //   app.getRouter().go('/');
    // }
  },

  leave: function (el) {
    console.log("leave");
  },

  beforeDestroy: function() {

  },

  methods: {

  },

  // setValue: setValue
};
