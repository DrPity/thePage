var Vue = require('vue');
var Preloader = require('./preloader');
var THREE = require('three');

app = {};

app.init = function (url){
  $.when(app.readJson(url)).then(function(data) {
    console.log(data);
    var component = app.createComponent();
    app.mainView = app.newVue('#wrapper', data, component);
    console.log(app.mainView);
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
  return view.$get(variable);
};


app.setView = function(vue, view){
  vue.$set(view);
};

app.getView = function(vue){
  return vue.currentView;
};

app.readJson = function (url){
  console.log(url);
  return $.getJSON(url).then(function(data){
    console.log(data);
    return data;
  });
};

app.createComponent = function(){
  return  {loader :require('./components/loadScreen/loader'),
          home : require('./components/homeScreen/home'),};
};

app.newVue = function(element, dataAtrributes, component){
  console.log(component);
  return new Vue({
    el: element,
    data: dataAtrributes,
    components: component
  });
};

console.log("Before Init");
app.init('./assets/model.json');




var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;


function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();
