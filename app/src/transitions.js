var Vue = require('vue');
var app = require('./index.js');
var $ = require('jquery');

function Transitions() {
		console.log("Transitions Init");
    this.init();
}

Transitions.prototype.init = function () {
  Vue.transition('fade', {
		type: 'transition',
    enter: function (el) {
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
		type: 'transition',
    enter: function (el) {
		},
    leave: function (el) {
			console.log("In hfade: ", el);
		},
		afterLeave: function(el){
			console.log("After leave:",  el);
		}
  });

	Vue.transition('slide', {
		type: 'transition',
		enter: function (el) {
			console.log("In enter slide-transition: ", el);
		},
		leave: function (el) {
			console.log("In leave slide-transition: ", el);
		},
		afterLeave: function(el){
			console.log("After slide-transition leave:",  el);
		}
	});
};

module.exports = Transitions;
