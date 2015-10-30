// random letter effect
var $ = require('jquery');
function Scr() {
		this.intervalID = -1;
		this.countDown = 6.00;
		this.fillCharInterval = 0.08;
		this.beat = 0.00;
		this.step = 0.00;
		this.div = null;
		this.orig = []; // char array
		this.origTemp = null;
		this.doneCallback = null;
		console.log("SCR Init");
}


Scr.prototype.randomLetter = function() {
	return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

Scr.prototype.scramble = function(__id) {
  console.log("In Scramble");
	console.log(__id.length);
	var id = [];
	var path = [];
	for (var items = 0; items < __id.length; items++) {
		id[items] = '#' + __id[items];
		path[items] = 'links.link[' + __id[items] + '].linkName';
		this.orig[items] = app.getVariable(app.mainView, path[items]);
		$(id[items]).empty();

		for (var i = 0; i < this.orig[items].length; i++) {
			if (this.orig[i] != ' ') {
				$(id[items]).append('<span>' + this.randomLetter() + '</span>').fadeIn("slow");
			} else {
				$(id[items]).append('<span> </span>');
			}
		}
	}
};

module.exports = Scr;
