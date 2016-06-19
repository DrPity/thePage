'use strict';
var $ = require('jquery');
var app = require('./index.js');
var _ = require('./helpers');

function Scr() {
		this.orig = [];
		// console.log("SCR Init");
}


Scr.prototype.randomLetter = function() {
	return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

Scr.prototype.scramble = function(elements, currentObject) {
	var index = 0;
	for (var key in currentObject) {
		if (currentObject.hasOwnProperty(key)) {
			var orig = currentObject[key];
			$('#' + index).empty();
			// console.log("orig index", orig[index].length);
			for (var i = 0; i < orig.length; i++) {
				if (orig[i] != ' ') {
					$('#' + index).append('<span>' + this.randomLetter() + '</span>').fadeIn("slow");
				} else {
					$('#' + index).append('<span> </span>');
				}
			}
			index++;
		}
	}
};

module.exports = Scr;
