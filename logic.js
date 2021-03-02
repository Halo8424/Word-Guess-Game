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
let lettersOfRandomSelectedWords =[];
let numBlanks = 0;
let blanksAndCorrectLetters = [];
let wrongGuesses = [];

// functions that operate the game 
function startGame(){
    userRemainingGuessCounter = 10;
    randomSelectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(`Word Chosen From Array: ${randomSelectedWord}`);
    // Capture each letter of the randomSelectedWord
    lettersOfRandomSelectedWords = randomSelectedWord.split('');
    console.log(`Letters of selected word: ${lettersOfRandomSelectedWords}`);
    // Setting the number of blanks for the selected word
    numBlanks = lettersOfRandomSelectedWords.length;
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
    document.getElementById("guess-counter").innerHTML = userRemainingGuessCounter;
    document.getElementById("guessed-letters").innerHTML = wrongGuesses.join(" ");
};
// function to check letter in randomSelectedWord
function checkLetters(letter){
  // initializing a false boolean value to "letterInWord" variable, we'll update if a letter is found in this word. 
  let letterInWord = false;
 
  
  //  Loop over the selected word and check if the letter is anywhere within the selected word. 
  for(let i = 0; i < numBlanks; i++){
        if(randomSelectedWord[i] === letter){
            // If a letter is found we update the "lettersInword" variable
           letterInWord = true; 
        }
  }
  //  If a letter is within the selected word, Loop over the word again and update the blanks at every instance of that letter.  
  if(letterInWord){
      for(let j = 0; j < numBlanks; j++){
          if(randomSelectedWord[j] === letter){
              blanksAndCorrectLetters[j] = letter;
          }
      }
      console.log(blanksAndCorrectLetters);
  }
    
    //   If letter does not exsit push letter into wrongGuesses array and update the remaining guesses 
    else{
        wrongGuesses.push(letter);
        userRemainingGuessCounter--;
        console.log(`Remaining guesses: ${userRemainingGuessCounter} and wrongGuesses array: [${wrongGuesses}]`);
    }

};

//  Function to deal with the ending of a round. 
    function endOfRound(){
        // Feed back on the status of the game
        console.log(`Wins: ${winsCounter} Losses: ${lossesCounter} Remaining Guesses: ${userRemainingGuessCounter}`);

        // Update html on guesses reamining 
        document.getElementById("guess-counter").innerHTML = userRemainingGuessCounter;
        // Update html with corrct letters on screen
        document.getElementById("word").innerHTML = blanksAndCorrectLetters.join(" ");
        // Display the wrong guesses letters to the user.
        document.getElementById("guessed-letters").innerHTML = wrongGuesses.join(" ");

        // Conditional Checking User Guessed The Word. 
        if(lettersOfRandomSelectedWords.toString() === blanksAndCorrectLetters.toString()){
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
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      // Converts all key clicks to lowercase letters.
      let letterGuessed = event.key.toLowerCase();
      // Runs the code to check for correctness.
      checkLetters(letterGuessed);
      // Runs the code after each round is done.
      endOfRound();
    }
  };