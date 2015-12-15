

module.exports = {
  getModel: function () {
    return startApp.model;
  },

  getRouter: function(){
    return startApp.router;
  }
};

var $ = require('jquery');
var Vue = require('vue');
var _ = require('./helpers');
var Router = require('vue-router');
window.p5 = require('p5');
require ('./tiles.js');
Vue.use(Router);

//start component and root data
var RoutedApp = Vue.extend({
  // component: require('./components/wrapper/wrapper'),
});


function App(url){
  this.Graphics = require('./graphics');
  this.mainView = null;
  this.Scramble = require('./scramble');
  this.ScrollTriggers = require('./scrollTrigger');
  this.Transitions = require('./transitions');
  this.trans = new this.Transitions();
  this.scr = new this.Scramble();
  this.router = new Router({
    history: false,
    transitionOnLoad: true,
    saveScrollPosition: true,
  });
  this.model = {};
  this.init(url);
}

App.prototype.init = function (url) {
  var _this = this;
  $.when(_this.readJson(url)).then(function(data) {
    console.log(data);
    _this.model = data;
    // var component = _this.createComponent();
    // _this.mainView = _this.newVue('#wrapper', data.currentView);
    _this.createRouterMap();
    _this.router.start(RoutedApp, '#wrapper');
    window.graphics = new _this.Graphics();
    // var scroll = new ScrollTriggers();
    // var scrambleItems = ["0", "1", "2"];
    // _this.scr.scramble(scrambleItems);
    // Preloader.init();
  });
};


App.prototype.getView = function () {
  return this.mainView.currentView;
};

App.prototype.readJson = function (url) {
  console.log("In read Json");
  return $.getJSON(url).then(function(data){
      console.log(JSON.stringify(data, null, 2));
    return data;
  });
};


App.prototype.createComponent = function () {
  return  {
          'preloader': require('./components/loadScreen/loader'),
          'home': require('./components/homeScreen/home'),
          };
};

App.prototype.createRouterMap = function () {
    this.router.map({
    '*':{
      component: require('./components/loadScreen/loader'),
    },
    '/': {
      component: require('./components/loadScreen/loader'),
      },
    '/home': {
      component: require('./components/homeScreen/home'),
    },
    '/bar': {
      component: require('./components/homeScreen/home')
    }
  });

};


var test = function () {
  console.log("This is a test");
};


App.prototype.newVue = function (element, dataAtrributes) {
  Vue.config.debug = true;
  return new Vue({
    el: element,
    data: {
      currentView: dataAtrributes
    },
    // components: component,
  });
};


console.log("LoadingModel");

//remove global Variable after finsihed debugging
window.startApp = new App('./assets/model.json');
