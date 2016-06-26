<template transition="fade">
  <div id="nav-box">
    <div class="nav-links-footer">
      <a v-link="{ name: project}">
        <span v-if="project === 'home'"></span>
        <span v-else>Go to the next project</span>
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
    project:{
      type: String,
      required: true
    },
  },
  // inherit: true,
  replace: true,
  name: "navfooter",

  data: function() {
    return {

    };

  },

  ready: function() {
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
