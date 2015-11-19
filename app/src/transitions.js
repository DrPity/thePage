var Vue = require('vue');
var app = require('./index.js');

function Transitions() {
		console.log("Transitions Init");
    this.init();

}

Transitions.prototype.init = function () {
  Vue.transition('fade', {
    enter: function () {},
    leave: function () {console.log("Leeeaaaavee");},
    afterLeave: function(){
      console.log("This", this);
      // console.log("mainView", app.getMainView().$children[0]);
    }
  });
};

module.exports = Transitions;
