<template>
<div>
  <navigation
  :showhome="true"
  :showabout="true"
  ></navigation>
  <div class="coverScreen">
    <div class="project-layout">
      <div class="absoluteCentering header" style="top: 45%">
        {{projectdata.title | uppercase}}
      </div>
      <div class="project-overlay" v-if="show" transition="slideUp"></div>
    </div>
    <div class="project-coverup" style="transform: matrix(1, 0, 0, 1, 0, 0); transform: translateZ(0); -webkit-transform: translateZ(0);">
      <div class="absoluteCentering">
        <div class="circle">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <image xlink:href="images/down_arrow.svg" x="0" y="0" height="100" width="100" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="project-header mediumWithHeadline">
    <div class="row align-center noMargin">
      <div class="small-12 large-1 columns">
      </div>
      <div class="small-12 large-4 columns">
        <span><h3>{{projectdata.title | uppercase}}</h3></span>
      </div>
      <div class="small-12 large-7 columns">
      </div>
      <div class="small-12 large-1 columns">
      </div>
      <div class="small-12 large-5 columns">
        <span><p>{{{description}}}</p></span>
      </div>
      <div class="small-12 large-6 columns">
      </div>
    </div>
  </div>
  <div class="row align-center noMargin project-description">
    <div class="small-12 columns">
      <template v-for="section in projectdata.sections">
        <div class="project-section" transition="fade" :style="{'backgroundColor': section.sectionColor, 'backgroundImage': section.sectionBg}">
          <template v-for="media in section.media">
            <template v-if="media.type === 'VIDEO'">
              <div class="row noMargin align-center small-collapse">
                <div class="small-12 large-7 columns margin-iframe">
                  <div class="flex-video widescreen vimeo">
                    <iframe class="b-lazy" data-src="{{media.src}}" width="640" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="media.type === 'IMAGE'">
              <div class="row noMargin align-center small-collapse">
                <div class="small-12 large-7 columns small-centered margin">
                  <img class="b-lazy"
                	 src="../images/load.gif"
                	 data-src="{{media.src}}"
                	 alt="Image description" />
                </div>
              </div>
            </template>
            <template v-if="media.type === 'FOOTER'">
              <div class="project-text row noMargin align-center small-collapse">
                <div class="small-12 large-8 columns margin">
                  <div class="row noMargin align-center small-collapse">
                    <div class="small-12 large-12 columns margin">
                      <h6>Credits</h6><p>{{media.credits}}</p>
                      <h6>Special thanks to</h6>
                      <span v-for="items in media.thanks">
                        <span v-if="items.src">
                          <a href="{{items.src}}">{{items.name}}</a>
                        </span>
                        <span v-else>
                          {{items.name}}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="media.type === 'TEXT'">
              <div class="project-text row noMargin align-center small-collapse">
                <div class="small-12 large-8 columns margin mediumWithHeadline">
                  <p class="text-content" v-if="media.content">
                    {{media.content}}
                  </p>
                </div>
              </div>
            </template>
          </template>
          <navfooter style="position: relative!important;"
            :project="projectdata.nextRoute">
          </navfooter>
        </div>
      </template>
    </div>
  </div>
</div>
</template>


<script>
'use strict';

module.exports = {

  // inherit: true,
  replace: true,
  name: "projectBase",

  props: {
    work:{
      type: Object,
      required: true
    },
    projectdata:{
      type: Object,
      required: true
    },
    description:{
      type: String,
      required: true,
    }
  },


  data: function() {
    return {
      show: true,
    };
  },

  components: {
    'navigation': require('./nav.vue'),
    'navfooter': require('./navFooter.vue'),
  },

  ready: function() {
    var _this = this;
    setTimeout(function () {
      _this.show = false;
    }, 1000);
  },

};


</script>
