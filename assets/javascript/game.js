// declare variables

var words = [
    "chestnuts",
    "santa",
    "snowflake",
    "sleigh"];

    console.log(words); //works

//user guess
var keyInput;    

var wins=0;

var guesses= 12;

//array to store guessed letters
var correctGuess = [];
var incorrectGuess = [];

//diplay wins

document.getElementById("wins").innerHTML= wins;
console.log(wins); //works

//Pick Random Word from list (math.random)
var chosenWord = words[Math.floor(Math.random() * words.length)];

console.log(chosenWord); //works


//Number of dashes same length as random word. 
var dashes = " ";
for (i = 0; i <= chosenWord.length; i++) {
    if (chosenWord.charAt(i) == " ") {
      dashes += " ";
    } else {
      dashes += "__ ";
    }
    //display dashes
    document.getElementById("current-word").innerHTML=dashes;
    console.log(dashes); //works

}


//Capture letters player presses on keyboard.

function checkLetter(){
document.onkeyup = function(event){
    keyInput = event.key.toLowerCase();
    var found = false;
    for (i=0; i <= chosenWord.length; i++){
        if (keyInput === chosenWord[i]) {
            correctGuess[i] = keyInput;
            document.getElementById("current-word").innerHTML=keyInput =correctGuess.join(" ");
            found=true;
console.log(found);
        }

    }
    if (found) return;

    console.log(found);


    if(incorrectGuess.indexOf(keyInput) <0) {
        incorrectGuess.push(keyInput);
        document.getElementById("letters-guessed").innerHTML = incorrectGuess.join(" ");

}
}
}
checkLetter();



//Check to see if player presses a valid letter.

//Keep track of letters guessed.

//If player guesses valid letter, replace dash with correct letter.


//If player guesses invalid letter, remove number of tries by 1 (12 tries total).


//When player wins, add to win score.


