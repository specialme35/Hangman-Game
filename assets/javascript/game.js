// Here we are provided an initial array of letters.
// Use this array to dynamically create buttons on the screen.
var chosenWords = ["red", "yellow", "green", "blue", "pink", "purple", "orange", "white", "brown"];

var randomWord = chosenWords[Math.floor(Math.random() * words.length)];
//var chosenWords = "";

//var blanksandsuccesses = [];

//var wrongGuesses = [];

//GAME COUNTERS 
var s;
var Count = 0;
var answerWord=[];

// MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
// =================================================================================
//Here we fill the answer array with underline
function startUp()
{
  for(var i=0; i< randomWord.length; i++)
  {
    answerWord[i] = "__"; 
  }
//Put them in a string
  s = answerWord.join(" ");
  document.getElementById("answer").innerHTML = s;
//$('#blanks').text(blanksandsuccesses.join(' '))
}
function Word ()
{
//Here we get the word that the user type in the box
  var word = document.getElementById("word").value;
//Make sure we have a guess
  if (word.length >0)
  {
    for (var i=0; i< randomWord.length; i++)
    {
//Now, if the randomWord contains a letter the user typeed in
      if(randomWord[i] === word)
      {
        answerWord[i] = word;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of Clicks: " + count;
    document.getElementById("answer").innerHTML = answerWord.join(" ");
  }

//Here is how many times it takes to guess

  if (count>3)
  {
    document.getElementById("stat").innerHTML = "You can do it, try again.";
  }
}
// 1. Create a for-loop to iterate through the words array.

  // Inside the loop...

// 2. Create a variable named "wordBtn" equal to $("<button>");
  // var wordBtn = $("<button>");

// 3. Then give each "wordBtn" the following classes: "word-button" "word" "word-button-color".
  //wordBtn.addClass("word-button word word-button-color");

// 4. Then give each "wordBtn" a data-attribute called "data-word".
  //wordBtn.attr("data-word", words[i]);

// 5. Then give each "wordBtns" a text equal to "words[i]".
  //wordBtn.text(words[i]);

// 6. Finally, append each "wordBtn" to the "#buttons" div (provided).
  //$("#buttons").append(wordBtn);
  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "WORD" BUTTONS
  // =================================================================================

// 7. Create an "on-click" event attached to the ".word-button" class.
  //$(".word-button").on("click", function() {

  // Inside the on-click event...

// 8. Create a variable called "hangmanWord" and set the variable equal to a new div.
  //var hangmanWord = $("<div>");

// 9. Give each "hangmanWord" the following classes: "word hangman-color".
  //hangmanWord.addClass("word hangman-color");

// 10. Then chain the following code onto the "hangmanWord" variable: .text($(this).attr("data-word"))
  // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
  // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
  //hangmanWord.text($(this).attr("data-word"));

// 11. Lastly append the hangmanWord variable to the "#display" div (provided);
  //$("#display").append(hangmanWord);});

  //function checkLetters(letter){
  //var letterGood = false;

  //for(var i=0; i<numBlanks; i++){
    //if(chosenWords[i] == letter){
      //letterGood=true;
    //}
  //}
  //if(letterGood){
    //for(var i = 0;i<numBlanks;i++){
      //if( chosenWords[i] == letter)
    //blanksandsuccesses[i]=letter
      //console.log("LETTER: " + letter);
    //}
  //}else{
    //console.log('Wrong letter')
  //}

  //}

// Be sure to test that your code works for this major task, before proceeding to the next one!

// MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
// =================================================================================

// 12. Create an "on-click" event attached to the "#clear" button id.
  //$("#clear").on("click", function() {

  // Inside the on-click event...

// 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
  //$("#display").empty();

  //});
  //document.onkeyup = function(event){

  //var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
  //console.log("LETTER GUESSES: " + letterGuess)
  //checkLetters(letterGuess)
  //}  
     
  
