var Vue = require('vue');
var app = require('./index.js');

function Transitions() {
		console.log("Transitions Init");
    this.init();
}

Transitions.prototype.init = function () {
  Vue.transition('fade', {
    enter: function () {
		},
    leave: function () {console.log("Leaving current element with transition");},
    afterLeave: function(el){
			if (el.id == 'loader' && this.show === false){
				this.remove();
			}
    }
  });
};

module.exports = Transitions;
