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

startGame();