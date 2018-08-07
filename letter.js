function Letter(letter){
    this.letter = letter;
    this.guessed = false;

    this.dispLetter = function(){
        if(this.guessed === false){
            return "-";
        }
        else{
            return this.letter;
        }
    }
    
    this.guessChecker = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            return true;
        }
        else{
            return false;
        }
    }

}

module.exports = Letter;