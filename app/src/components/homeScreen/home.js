'use strict';
var app = require('../../index.js');
var _ = require('../../helpers');
var $ = require('jquery');
var scale = require('../../perfectScale.js');
var scramble = require('../../scramble');
var scr = new scramble();
// var Masonry = require ('masonry-layout');

module.exports = {

  inherit: true,
  replace: true,
  name: "Home",
  template: require('./home.html'),



  route: {
    activate: function () {
      if (app.getRouter().app.$data.redirect === true){
        app.getRouter().go('/');
      }
    },
    canDeactivate: function (transition) {
      console.log('You are not allowed to leave.');
      transition.next();
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

  components: {
    'navigation': require('../navigation/navigation'),
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

    $('ul').on('click',function(){
      $('ul').toggleClass('open');
    });
    //
    // var msnry = new Masonry( '.grid', {
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });
    //
    // msnry.imagesLoaded().progress( function() {
    //   msnry.masonry();
    // });

    // $('.grid').masonry({
    //   // set itemSelector so .grid-sizer is not used in layout
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });
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

  },

  // setValue: setValue
};
