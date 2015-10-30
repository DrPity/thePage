var Vue = require('vue');
var Preloader = require('./preloader');
var Graphics = require('./graphics');
var Scramble = require('./scramble');
var $ = require('jquery');
var scr = new Scramble();
var graphics = new Graphics();

app = {};

app.init = function (url){
  // console.log(url);
  $.when(app.readJson(url)).then(function(data) {
    console.log(data);
    var component = app.createComponent();
    app.mainView = app.newVue('#wrapper', data, component);

    var scrambleItems = ["0", "1", "2", "3"];
    scr.scramble(scrambleItems);
    Preloader.init();
  });
};

app.mainView = function (){
  return;
};

app.setVariable = function(vue, variable, value){
  vue.$set(variable,value);
};

app.getVariable = function(vue, variable){
  return vue.$get(variable);
};


app.setView = function(vue, view){
  vue.$set(view);
};

app.getView = function(vue){
  return vue.currentView;
};

app.readJson = function (url){
  return $.getJSON(url).then(function(data){
      console.log(JSON.stringify(data, null, 2));
    return data;
  });
};

app.createComponent = function(){
  return  {
          loader :require('./components/loadScreen/loader'),
          home : require('./components/homeScreen/home'),
          };
};

app.newVue = function(element, dataAtrributes, component){
  console.log(component);
  return new Vue({
    el: element,
    data: dataAtrributes,
    components: component
  });
};

app.transitions = function (){

};

console.log("LoadingModel");
app.init('./assets/model.json');
