// declare variables

var words = [
    "chestnuts",
    "santa",
    "snowflake",
    "sleigh"];
    
var wins=0;

var guesses= 12;

//array to store guessed letters
var lettersGuessed = [];

//diplay wins

document.getElementById("wins").innerHTML= wins;


//Pick Random Word from list (math.random)
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord)


//Number of dashes same length as random word. 
var dashes = "";
for (i = 0; i < chosenWord.length; i++) {
    if (chosenWord.charAt(i) == " ") {
      dashes += " ";
    } else {
      dashes += "__ ";
    }
  }
//display dashes
  document.getElementById("current-word").innerHTML=dashes;

console.log(dashes);

//Check to see if player presses a valid letter.

//Keep track of letters guessed.

//If player guesses valid letter, replace dash with correct letter.


//If player guesses invalid letter, remove number of tries by 1 (12 tries total).
document.getElementById("guesses").innerHTML=guesses
console.log(guesses);

//When player wins, add to win score.



//Capture letters player presses on keyboard.

document.onkeyup = function keyPress(event){
    var keyInput = event.key;
    var lettersGuessed=keyInput.split(" ");

document.getElementById("current-word").innerHTML=lettersGuessed;
console.log(lettersGuessed);

    console.log(keyInput);
}






