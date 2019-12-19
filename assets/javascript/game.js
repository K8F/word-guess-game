// declare variables

var words = [
    "chestnuts",
    "santa",
    "snowflake",
    "sleigh"];

console.log(words); //works

//user guess
var keyInput;

var wins = 0;  // is for every game ///you can play several times and wins and losses increment based on when you win or lost
var losses = 0;

var guesses;
var chosenWord;

//array to store guessed letters
var correctGuess = [];
var incorrectGuess = [];

//diplay wins

document.getElementById("wins").innerHTML = wins;
console.log(wins); //works




//Number of dashes same length as random word. 
//broken:when letter is true, all dashes disappear


//Capture letters player presses on keyboard.
//Check to see if player presses a valid letter.


document.onkeyup = function (event) {
    keyInput = event.key.toLowerCase();
    console.log("key", keyInput)
    var found = false;
    for (i = 0; i < chosenWord.length; i++) {
        if (keyInput === chosenWord[i]) {
            correctGuess[i] = keyInput;
            found = true;
            console.log(found, correctGuess);
        }

    }
    document.getElementById("current-word").innerHTML = correctGuess.join(" ");

    if (found) {
        if (correctGuess.indexOf("__") < 0) {
            wins++
            document.getElementById("wins").innerHTML = wins;
            console.log("you won:", wins)
            init()
        }
    }
    else {
        if (incorrectGuess.indexOf(keyInput) < 0) {
            incorrectGuess.push(keyInput);
            document.getElementById("letters-guessed").innerHTML = incorrectGuess.join(" ");
            guesses--;
            document.getElementById("guesses").innerHTML = guesses;

            if (guesses === 0) {
                losses++
                document.getElementById("losses").innerHTML = losses;
                console.log("lost", losses)
                init()
            }
        }

    }

}




function init() {
    // new word
    // restart the guesses counter 12
    // show the guesses on the DOM


    //Pick Random Word from list (math.random)
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord)
    //When player wins, add to win score.
    guesses = 12;  // current round
    document.getElementById("guesses").innerHTML = guesses;


    console.log(chosenWord); //works

    for (i = 0; i < chosenWord.length; i++) {
        correctGuess[i] = "__";
    }
    document.getElementById("current-word").innerHTML = correctGuess.join(" ");

    incorrectGuess = []
    document.getElementById("letters-guessed").innerHTML = incorrectGuess.join(" ");

}


init()