module.exports = {
  getModel: function () {
    return startApp.model;
  },

  getMainView: function () {
    return startApp.mainView;
  }
};

var $ = require('jquery');
var Vue = require('vue');
var Preloader = require('./preloader');

function App(url){
  this.Graphics = require('./graphics');
  this.mainView = null;
  this.Scramble = require('./scramble');
  this.ScrollTriggers = require('./scrollTrigger');
  this.scr = new this.Scramble();
  this.model = {};
  this.init(url);
}

App.prototype.init = function (url) {
  var _this = this;
  $.when(_this.readJson(url)).then(function(data) {
    console.log(data);
    _this.model = data;
    var component = _this.createComponent();
    _this.mainView = _this.newVue('#wrapper', data.currentView, component);
    var graphics = new _this.Graphics();
    // var scroll = new ScrollTriggers();
    var scrambleItems = ["0", "1", "2"];
    _this.scr.scramble(scrambleItems);
    Preloader.init();
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
          'loader': require('./components/loadScreen/loader'),
          'home': require('./components/homeScreen/home')
          };
};


App.prototype.newVue = function (element, dataAtrributes, component) {
  return new Vue({
    el: element,
    data: {currentView: dataAtrributes},
    components: component
  });
};


console.log("LoadingModel");

//remove global Variable after finsihed debugging
window.startApp = new App('./assets/model.json');
