var Vue = require('vue');
var app = require('./index.js');
var $ = require('jquery');

function Transitions() {
		console.log("Transitions Init");
    this.init();
}

Transitions.prototype.init = function () {
  Vue.transition('fade', {
    enter: function (el, done) {
		},
    leave: function (el) {
			if (el.id == 'loader'){
				var element = document.querySelectorAll('body');
	      console.log(el[0]);
	      element[0].style.overflowY = 'scroll';
			}
		},
		afterLeave: function(el){
			console.log("After leave:",  el);
		}
  });
	Vue.transition('hfade', {
    enter: function (el, done) {
		},
    leave: function (el) {
			console.log("In hfade: ", el);
		},
		afterLeave: function(el){
			console.log("After leave:",  el);
		}
  });
};

module.exports = Transitions;
