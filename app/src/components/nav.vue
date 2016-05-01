<template transition="fade">
  <div id="nav-box">
    <div class="nav-links">
      <a v-link="{ name: 'home'}" v-if="showhome">
        <span>home</span>
        <div class="nav-line"></div>
      </a>
      <a v-link="{ name: 'about'}" v-if="showabout">
        <span> about </span>
        <div class="nav-line"></div>
      </a>
    </div>
   </div>
</template>

<script>
'use strict';
var app = require('../index.js');
var _ = require('../helpers');


module.exports = {
  props: {
    showhome:{
      type: Boolean,
      required: true
    },
    showabout:{
      type: Boolean,
      required: true
    },
  },
  // inherit: true,
  replace: true,
  name: "navigation",

  data: function() {
    return {

    };

  },

  ready: function() {
    // if(this.$parent.$route.name === 'home'){
    //   var el = this.$el.getElementsByClassName('the-project-list');
    //   var _this = this;
    //   var eloffset = _.getOffset(el[0]).top;
    //   console.log(eloffset);
    // }
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
</script>
