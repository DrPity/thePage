'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');
var $ = require('jquery');
var scale = require('../../perfectScale.js');

module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  template: require('./home.html'),



  route: {
    activate: function () {
      console.log('activated');
      var rescale = new scale();
    },
    canDeactivate: function (transition) {
      console.log('You are not allowed to leave.');
      transition.to('/');
    }
  },

  data: function() {
    return {
      id: app.getModel().home.id,
      links: app.getModel().home.links,
      description: app.getModel().home.description,
      introText: require("../text/intro.html"),
      work: require("../work/work.html"),
      redirect: app.getModel().redirect
    };

  },


  ready: function() {
    console.log("Before data: ", app.getModel().redirect);
    this.redirect = "new";
    console.log("Before data: ", app.getModel().redirect);
    // var scrambleItems = ["0", "1", "2"];
    // for (var item = 0; item < scrambleItems.length; item++) {
    //   var wordList = this.description;
    //   console.log("wordList: ", wordList);
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
    console.log("enter");
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
