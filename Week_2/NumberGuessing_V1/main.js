/*eslint-env browser*/
function playGame(){
alert("First enter a low number, then a high number. Then, guess a random number between them.");

// get the low and high bounds 
//uses paresInt() to make sure we have numbers not strings
var from = parseInt(prompt("Enter the lower bound"));

var to = parseInt(prompt("Enter the higher bound"));

//get an integer between from and to, 
//Math.random gets you random number between 0-1 and math converts it to our needed rage
//Math.round gets you whole integer and not decimal
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + "and" + to));

var totalGuesses = 1;

while(currentGuess != target){
    if (currentGuess < target) {
    currentGuess = parseInt(prompt("Enter a higher number"));
    totalGuesses++;

}

else if(currentGuess > target) {
    currentGuess = parseInt(prompt("Enter a lower number"));
    totalGuesses++;
}
    
    
}
alert("It took " + totalGuesses + "tries to get the correct number");
}