<template transition="fade">
  <div id="nav-box">
    <div class="nav-links-footer">
      <a v-link="{ name: 'home'}">
        <span>GO TO NEXT PROEJECT</span>
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
