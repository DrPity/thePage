'use strict';
var $ = require('jquery');
var app = require('./index.js');
var _ = require('./helpers');

function Scr() {
		this.orig = [];
		console.log("SCR Init");
}


Scr.prototype.randomLetter = function() {
	return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

Scr.prototype.scramble = function(__id) {
	var id = [];
	var path = _.arrayFilter(app.getRouter()._children, 'home', 'id');
	console.log("path", path);
	for (var items = 0; items < __id.length; items++) {
		id[items] = '#' + __id[items];
		// path[items] = 'home.links[' + __id[items] + '].linkName';
		this.orig[items] = path.links[__id[items]].linkName;
		console.log("items:",this.orig[items]);
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
