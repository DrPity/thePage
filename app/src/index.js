
loaderValue = "...";
var Vue = require('vue');
var Preloader = require('./preloader');

app = {};

app.mainView = function (){
  return;
};

app.setVariable = function(vue, variable, value){
  vue.$set(variable,value);
};

app.getVariable = function(vue, variable){
  return view.$get(variable);
};


app.setView = function(vue, view){
  vue.$set('currentView', view);
};

app.getView = function(vue){
  return vue.currentView;
};



app.newVue = function(element, dataAtrributes, component){
  console.log(component);
  return new Vue({
    el: element,
    data: dataAtrributes,
    components: component
  });
};


var dataAtrributes = {text: '...'};
var component = { loader :require('./components/loadScreen/loader'),
                  home : require('./components/homeScreen/home'), };

app.mainView = app.newVue('#wrapper', dataAtrributes, component);
console.log(app.mainView);
Preloader.init();
