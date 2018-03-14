// Here we are provided an initial array of letters.
// Use this array to dynamically create buttons on the screen.
var wordsList = ["red", "yellow", "green", "blue", "pink", "purple", "orange", "white", "brown"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randomWord;
//var randomWord = chosenWords[Math.floor(Math.random() * words.length)];


//Function
//=========================================================================================

function startGame()
{
  randomWord = wordsList[Math.floor(math.random() * wordsList.length)];
  
  for (var i =0; i< randomWord.length; i++)
//Printing underscores to the screen
    {
      underScores.push("_");
    }
    document.getElementById("wordBlanks").textContent = underScores.join("");

    //reset
    wrongLetter = [];
    guessesLeft = 10;

    document.getElementById("guesses-left").textContent = guessesLeft;
}
//User guesses

document.onkeyup = function(event)
{
    userGuesses = event.key;
//Checking if letter inside of the word
    if(randomWord.indexOf(userGuesses) > -1)
    {
        

    }

    else
    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(guessesLeft);
    }
}