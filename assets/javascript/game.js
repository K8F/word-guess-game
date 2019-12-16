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
document.getElementById("guesses").innerHTML=guesses;

//array to store guessed letters
var correctGuess = [];
var incorrectGuess = [];

//diplay wins

document.getElementById("wins").innerHTML= wins;
console.log(wins); //works

//Pick Random Word from list (math.random)
var chosenWord = words[Math.floor(Math.random() * words.length)];
//When player wins, add to win score.


console.log(chosenWord); //works


//Number of dashes same length as random word. 
//broken:when letter is true, all dashes disappear
function hideWord() {
var dashes = " ";
for (i = 0; i <= chosenWord.length; i++) {
    if (chosenWord.charAt(i) == " ") {
      dashes += " ";
    } 
    else {
      dashes += "__ ";
    }
    //display dashes
    document.getElementById("current-word").innerHTML=dashes;
    console.log(dashes);
}

}
hideWord();


//Capture letters player presses on keyboard.
//Check to see if player presses a valid letter.

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

//Keep track of incorrect letters guessed.

    if(incorrectGuess.indexOf(keyInput) <0) {
        incorrectGuess.push(keyInput);
        document.getElementById("letters-guessed").innerHTML = incorrectGuess.join(" ");    
    }
    
    //If player guesses invalid letter, remove number of tries by 1 (12 tries total).

    if (found = false){
        guesses--;
        console.log(guesses);
    }//broken

}
}
checkLetter();

//coded out because it's broken function win(){
  //  if (correctGuess===chosenWord.length){
  //game resets  
  //    wins++;
    //}
//}
//win();


