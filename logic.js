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
    console.log(selectedWord);
};

startGame();