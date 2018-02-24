var Letter = require("./letter.js")

function Word(wrd) {
	this.word = wrd;
	this.letters = [];
	this.popLetters = function() {
		var array = this.word.split("");
		var letters = this.letters
		array.forEach(function (x) {
			letters.push(new Letter(x))
		});
	}
	this.returnWord = function() {
		var current = "";
		var letters = this.letters;
		var word = this.word;
		for (var x = 0; x < letters.length; i++) {
			current += letters[x].popChar();
		}
		return current;
	};
	this.wordCheck = function (character) {
		this.letters.forEach(x => x.check(character));
	};
}

module.exports = Word;