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
    leave: function (el, done) {
			if (el.id == 'loader'){
				var element = document.querySelectorAll('body');
	      console.log(el[0]);
	      element[0].style.overflowY = 'scroll';
			}
		},
  });
};

module.exports = Transitions;
