// Global variables all functions can access

// List of words to be guessed
let wordList = ["red","orange","purple","black"];

let wins = 0;
let losses = 0;
let remainingGuesses = 10;
let selectedWord = "";
let lettersInSelectedWord =[];
let numBlanks = 0;
let blanksAndCorrectLetters = [];
let wrongGuesses = [];

// functions that operate the game 
function startGame(){
    remainingGuesses = 10;
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(`Word Chosen From Array: ${selectedWord}`);
    // Capture each letter of the selectedWord
    lettersInSelectedWord = selectedWord.split('');
    console.log(`Letters of selected word: ${lettersInSelectedWord}`);
    // Setting the number of blanks for the selected word
    numBlanks = lettersInSelectedWord.length;
    console.log(`Number of blanks for selected words: ${numBlanks}`);

    // Clearing the blanks and correct letters array, and the wrong Guesses Array for a fresh game reset
    blanksAndCorrectLetters = [];
    wrongGuesses = [];

    //Looping over numBlanks variable to push blanks to blanksAndCorrectLetters array
    for(let i = 0; i < numBlanks; i++){
        blanksAndCorrectLetters.push("_");
    }
    console.log(blanksAndCorrectLetters);

    // Display inital guesses left, new blanks for current selected word, and clearing wrong guesses
    document.getElementById("word").innerHTML = blanksAndCorrectLetters.join(" ");
    document.getElementById("guess-counter").innerHTML = remainingGuesses;
    document.getElementById("guessed-letters").innerHTML = wrongGuesses.join(" ");
};
// function to check letter in selectedWord
function checkLetters(letter){
  // initializing a false boolean value to "letterInWord" variable, we'll update if a letter is found in this word. 
  let letterInWord = false;
  
  //  Loop over the selected word and check if the letter is anywhere within the selected word. 
  for(let i = 0; i < numBlanks; i++){
        if(selectedWord[i] === letter){
            // If a letter is found we update the "lettersInword" variable
           letterInWord = true; 
        }
  }
  //  If a letter is within the selected word, Loop over the word again and update the blanks at every instance of that letter.  
  if(letterInWord){
      for(let j = 0; j < numBlanks; j++){
          if(selectedWord[j] === letter){
              blanksAndCorrectLetters[j] = letter;
          }
      }
      console.log(blanksAndCorrectLetters);
  } 
    //   If letter does not exsit push letter into wrongGuesses array and update the remaining guesses 
    else{
        wrongGuesses.push(letter);
        remainingGuesses--;
        console.log(`Remaining guesses: ${remainingGuesses} and wrongGuesses array: [${wrongGuesses}]`);
    }
};

// Cliffhanger: Left off needeing to start the functions that deals with round completion. 

startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      // Converts all key clicks to lowercase letters.
      var letterGuessed = event.key.toLowerCase();
      // Runs the code to check for correctness.
      checkLetters(letterGuessed);
      // Runs the code after each round is done.
      //roundComplete();
    }
  };