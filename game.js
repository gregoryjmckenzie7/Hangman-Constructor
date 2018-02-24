const inquirer = require("inquirer");
var Word = require("./word.js");
var wordOptions = ["bubbliest", "revivified", "hobnobbing", "chumminess", "parallaxes", "beekeepers", "jaywalking", "squabbing"];
var lettersOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var gameWord;

function newGameWord () {
	var hangmanWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	gameWord = new Word(word);
	gameWord.popLetters();
};

function wordStatus() {
	var userWord = gameWord.runString();
	console.log(userWord + "\n");
	if (val === gameWord.selection) {
		console.log("\x1b[33m%s\x1b[0m", "You Win Hangman! Try another word...");
		return reset();
	};
};

function prompt() {
	inquirer.prompt([
		{
			type: "input",
			name: "userGuess",
			message: "Pick a letter."
		}
		]).then(function (answer) {
			var guess = answer.userGuess.toLowerCase();
			if (lettersOptions.indexOf(guess) >= 0)
		})
	}
}