module.exports = {
  getModel: function () {
    return startApp.model;
  },

  getRouter: function () {
    return startApp.router;
  },
};

var $ = require('jquery');
var Vue = require('vue');
var _ = require('./helpers');
var Router = require('vue-router');
var foundation = require('foundation-sites');
var loader = require('./components/loader.vue');
var home = require('./components/home.vue');
var codedreality = require('./components/codedreality.vue');
var musicalcubes = require('./components/musicalcubes.vue');
var humanandmachine = require('./components/humanandmachine.vue');
var thewall = require('./components/thewall.vue');
var lightminers = require('./components/lightminers.vue');
var mubrace = require('./components/mubrace.vue');
var cucumbis = require('./components/cucumbis.vue');
var goldmann = require('./components/goldmann.vue');
var thepictures = require('./components/pictures.vue');
var about = require('./components/about.vue');
var attachFastClick = require('fastclick');
window.PIXI = require('pixi.js');
// var VueTouch = require('vue-touch');


Vue.use(require('vue-image-loader'),{
  loadInfo: 'Loading',
  timeout:100
});

// window.p5 = require('p5');
// Vue.use(VueTouch);
Vue.use(Router);

function App(url) {
  this.mainView = null;
  this.Transitions = require('./transitions');
  this.trans = new this.Transitions();
  this.router = new Router({
    hashbang: true,
    history: false,
    abstract: false,
    transitionOnLoad: true,
    saveScrollPosition: false,
  });
  this.model = {};

  this.init(url);
}

App.prototype.init = function (url) {
  // _.preloadImage("../images/logoNegative.png");
  var _this = this;
  $.when(_this.readJson(url)).then(function (data) {
    // console.log(data);

    _this.model = data;

    //start component and root data
    var RoutedApp = Vue.extend({
      data: function () {
        return data;
      },

      created: function () {
        $(document).foundation();
      },
    });

    _this.createRouterMap();
    _this.redirectionMap();
    _this.router.start(RoutedApp, '#wrapper');
  });
};

App.prototype.readJson = function (url) {
  // console.log('In read Json');
  return $.getJSON(url).then(function (data) {
    // console.log(JSON.stringify(data, null, 2));
    return data;
  });
};

App.prototype.createRouterMap = function () {
  this.router.map({
    '*':{
      component: home,
    },
    '/': {
      name: 'home',
      component: home,
    },
    '/loader': {
      name: 'loader',
      component: loader,
    },
    '/home': {
      name: 'home',
      component: home,
    },
    '/musicalcubes': {
      name: 'musicalcubes',
      component: musicalcubes,
    },
    '/codedreality': {
      name: 'codedreality',
      component: codedreality,
    },
    '/humanandmachine': {
      name: 'humanandmachine',
      component: humanandmachine,
    },
    '/thewall': {
      name: 'thewall',
      component: thewall,
    },
    '/lightminers': {
      name: 'lightminers',
      component: lightminers,
    },
    '/mubrace': {
      name: 'mubrace',
      component: mubrace,
    },
    '/cucumbis': {
      name: 'cucumbis',
      component: cucumbis,
    },
    '/goldmann': {
      name: 'goldmann',
      component: goldmann,
    },
    '/thepictures': {
      name: 'thepictures',
      component: thepictures,
    },
    '/about': {
      name: 'about',
      component: about,
    },
  });
};

App.prototype.redirectionMap = function () {

  this.router.redirect({
    '*': '/',
  });

};

App.prototype.newVue = function (element, dataAtrributes) {
  Vue.config.debug = true;
  return new Vue({
    el: element,
    data: {
      redirect: dataAtrributes,
    },
  });
};


//remove global Variable after finsihed debugging
attachFastClick(document.body);
window.startApp = new App('./assets/model.json');
