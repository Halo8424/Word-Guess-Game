// Global variables all functions can access

// List of words to be guessed
let wordList = [
    "homer",
    "bart",
    "marge",
    "lisa",
    "apu",
    "milhouse",
    "moe",
    "nelson",
    "barney",
    "skinner",
    "willie",
    "allison",
    "krusty",
    "ralph",
    "abraham",
    "herbert",
    "patty",
    "lenny",
    "martin",
    "maggie"
];

let winsCounter = 0;
let lossesCounter = 0;
let userRemainingGuessCounter = 10;
let randomSelectedWord = "";
let lettersOfRandomSelectedWordsArray =[];
let blanksPlaceHolderCounter = 0;
let blanksAndCorrectLettersArray = [];
let incorrectGuessedLettersArray = [];

// functions that operate the game 
function startGame(){
    selectsRandomWord();
    resetGameVariables();
    setNewBlanks();
    resetsUserDisplay();
};

function selectsRandomWord(){
    randomSelectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(`Word Chosen From Array: ${randomSelectedWord}`);
    lettersOfRandomSelectedWordsArray = randomSelectedWord.split('');
    blanksPlaceHolderCounter = lettersOfRandomSelectedWordsArray.length;
};

function resetGameVariables(){
    userRemainingGuessCounter = 10;
    blanksAndCorrectLettersArray = [];
    incorrectGuessedLettersArray = [];
};

function setNewBlanks(){
    for(let i = 0; i < blanksPlaceHolderCounter; i++){
        blanksAndCorrectLettersArray.push("_");
    }
};

function resetsUserDisplay(){
    document.getElementById("word").innerHTML = blanksAndCorrectLettersArray.join(" ");
    document.getElementById("guess-counter").innerHTML = userRemainingGuessCounter;
    document.getElementById("guessed-letters").innerHTML = incorrectGuessedLettersArray.join(" ");
};




function checkLetters(userLetterInput){
  let letterInWord = false;
    for(let i = 0; i < blanksPlaceHolderCounter; i++){
        if(randomSelectedWord[i] === userLetterInput){
           letterInWord = true; 
        }
  }
    
  if(letterInWord){
      for(let j = 0; j < blanksPlaceHolderCounter; j++){
          if(randomSelectedWord[j] === userLetterInput){
              blanksAndCorrectLettersArray[j] = userLetterInput;
          }
      }
  }
    else{
        incorrectGuessedLettersArray.push(userLetterInput);
        userRemainingGuessCounter--;
        console.log(`Remaining guesses: ${userRemainingGuessCounter} and incorrectGuessedLettersArray array: [${incorrectGuessedLettersArray}]`);
    }
};


//  Function to deal with the ending of a round. 
    function endOfRound(){
        // Feed back on the status of the game
        console.log(`Wins: ${winsCounter} Losses: ${lossesCounter} Remaining Guesses: ${userRemainingGuessCounter}`);

        resetsUserDisplay();
        
        // Conditional Checking User Guessed The Word. 
        if(lettersOfRandomSelectedWordsArray.toString() === blanksAndCorrectLettersArray.toString()){
            // update Win counter
            winsCounter++;
            // update html win counter. 
            document.getElementById("wins").innerHTML = winsCounter;
            //  alert user they won the round
            alert("You Have Won This Round");

            // ReStart the game
            startGame();

        }else{
            // Check to see if remaining guess have reach zero
            if(userRemainingGuessCounter === 0){
                // update lossesCounter counter and update lossesCounter on html 
                lossesCounter++;
                document.getElementById("loses").innerHTML = lossesCounter;

                // alert the user they lost the round.
                alert("Sorry You Lost This Round");

                // restart the game.
                startGame();
            }
        }
    };

// Initial Start Of The Game
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    // Check if the key pressed is a userLetterInput.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      // Converts all key clicks to lowercase letters.
      let letterGuessed = event.key.toLowerCase();
      // Runs the code to check for correctness.
      checkLetters(letterGuessed);
      // Runs the code after each round is done.
      endOfRound();
    }
  };