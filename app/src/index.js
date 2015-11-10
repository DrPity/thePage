// var Vue = require('vue');
// var Preloader = require('./preloader');
// var Graphics = require('./graphics');
// var Scramble = require('./scramble');
// var ScrollTriggers = require('./scrollTrigger');
// var $ = require('jquery');
// var scr = new Scramble();
// var model = {};
// var app = {};

module.exports = {
  getModel: function () {
    return startApp.model;
  },

  getVariable: function (variable) {
    return startApp.mainView.$get(variable);
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

// app.init = function (url){
//   // console.log(url);
//   $.when(app.readJson(url)).then(function(data) {
//     console.log(data);
//     model = data;
//     console.log("model set", model);
//     var component = app.createComponent();
//     console.log('component', component);
//     app.mainView = app.newVue('#wrapper', data, component);
//     console.log("vue: ", app.mainView);
//     console.log("loader: ", app.mainView.preload);
//     var graphics = new Graphics();
//     // var scroll = new ScrollTriggers();
//     var scrambleItems = ["0", "1", "2"];
//     scr.scramble(scrambleItems);
//     Preloader.init();
//   });
// };


// app.setVariable = function(vue, variable, value){
//   vue.$set(variable,value);
// };

App.prototype.getVariable = function () {
    return app.mainView.$get(variable);
};

// app.getVariable = function(vue, variable){
//   return vue.$get(variable);
// };


// app.setView = function(vue, view){
//   vue.$set(view);
// };

App.prototype.getView = function () {
  return this.mainView.currentView;
};

// app.getView = function(vue){
//   return vue.currentView;
// };

// app.getModel = function(){
//   return model;
// };

App.prototype.readJson = function (url) {
  console.log("In read Json");
  return $.getJSON(url).then(function(data){
      console.log(JSON.stringify(data, null, 2));
    return data;
  });
};

// app.readJson = function (url){
//   return $.getJSON(url).then(function(data){
//       console.log(JSON.stringify(data, null, 2));
//     return data;
//   });
// };


App.prototype.createComponent = function () {
  return  {
          'loader': require('./components/loadScreen/loader'),
          'home': require('./components/homeScreen/home')
          };
};

// app.createComponent = function(){
//   return  {
//           'loader': require('./components/loadScreen/loader'),
//           'home': require('./components/homeScreen/home'),
//           };
// };

App.prototype.newVue = function (element, dataAtrributes, component) {
  return new Vue({
    el: element,
    data: {currentView: dataAtrributes},
    components: component
  });
};

// app.newVue = function(element, dataAtrributes, component){
//   // console.log(component);
//   return new Vue({
//     el: element,
//     data: dataAtrributes,
//     components: component
//   });
// };

console.log("LoadingModel");
// app.init('./assets/model.json');
window.startApp = new App('./assets/model.json');
