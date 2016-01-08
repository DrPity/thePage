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
				setInterval(function () {
					done();
				}, 300);
			}
		},
    afterLeave: function(el){

    }
  });
};

module.exports = Transitions;
