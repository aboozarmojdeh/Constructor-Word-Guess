var wordGet = require("./word.js");
var inquirer = require("inquirer");
var gameOver = false;
var guessedLetters = new Set();
var word = new wordGet();
var totalGuess = word.letters.length + 5; //10;
var remainedLetters = word.letters.length;

function runGame() {
    
    word.showLetters();
    inquirer.prompt([
               {
            type: "input",
            name: "letter",
            message: "Game Started - Guess a letter"
        }
    ]).then(function (response) {
       
        guess(response.letter.toLowerCase());
        if (!gameOver) {
            runGame();
        } else {
            restartGame();
        }
    })
}


runGame();


function guess(letter) {
    if (letter.length === 1) {
        if (!guessedLetters.has(letter)) {
            guessedLetters.add(letter);
        }
        else {
            console.log("Letter has already been guessed!\n");
            return;
        }
        var rightGuess = word.guessChecker(letter);
        console.log(rightGuess);
        if (rightGuess > 0) {
            console.log("Perfect, Right Letter\n");
            console.log(totalGuess + " guesses remaining\n");
            remainedLetters -= rightGuess;
        }
        else {
            totalGuess--;
            console.log("Incorrect!  " + totalGuess + " guesses remaining\n");
        }

        if (remainedLetters === 0) {
            console.log("\n------------\n");
            console.log("You win!");
            console.log("\n------------\n");
            word.showLetters();
            gameOver = true;
        }

        if (totalGuess === 0) {
            console.log("\n------------\n");
            console.log("You lose!");
            console.log("Word was " + word.word)
            console.log("\n------------\n");
            gameOver = true;

        }

    }
    else {
        console.log("Only guess one letter\n");
    }


}



function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                gameOver = false;
                guessedLetters = new Set();
                word = new wordGet();
                totalGuess = word.letters.length + 5; 
                remainedLetters = word.letters.length;
                runGame();
            } else {
                console.log("\n------------\n");
                console.log("Very Glad playing with you - Come Back Soon!")
                console.log("Regards!")
                console.log("Aboozar Mojdeh")
                console.log("\n------------\n");
                return
            }
        })
}