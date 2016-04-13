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
    beforeEnter: function (el) {
			// if(app.getRouter().app.$data.redirect === false){
			// 	app.getRouter().go('/home');
			// }
		},
    leave: function (el) {
			if (el.id == 'loader'){
				var element = document.querySelectorAll('body');
	      element[0].style.overflowY = 'scroll';
			}
		},
		afterLeave: function(el){
			// console.log("After leave:",  el);
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

	Vue.transition('slideUp', {
		type: 'transition',
		enter: function (el) {
			console.log("In enter slideUp-transition: ", el);
		},
		leave: function (el) {
			console.log("In leave slideUp-transition: ", el);
		},
		afterLeave: function(el){
			console.log("After slideUp-transition leave:",  el);
		}
	});
};

module.exports = Transitions;
