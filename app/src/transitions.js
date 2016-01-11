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
				// setTimeout(done, 4000);
				// done();
			}
		},
  });
};

module.exports = Transitions;
