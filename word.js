var letter = require("./letter.js");

function Word() {

    var letters = [];
    var wordArr = ["cat", "apple", "pie", "bootcamp", "Javascript", "NodeJS"];
    var randomIndex = Math.floor(Math.random() * wordArr.length);
    var randomWord = wordArr[randomIndex].toLowerCase();
    var word = randomWord
    this.word = word;
    var splitWord = word.split("");

    splitWord.forEach(function (let) {
        var temp = new letter(let);
        letters.push(temp);
    });

    this.letters = letters;


    this.showLetters = function () {
        var display = "";
        this.letters.forEach(function (letter) {
            display += letter.dispLetter() + " ";
        });

        display = display.slice(0, -1);

        console.log(display);
    }

    this.guessChecker = function (guess) {
        var guessMatch = 0;
        this.letters.forEach(function (letter) {
            if (letter.guessed === false && letter.guessChecker(guess) === true) {
                letter.guessed = true;
                guessMatch++;
            }
        });

        return guessMatch;

    }
}

module.exports = Word;