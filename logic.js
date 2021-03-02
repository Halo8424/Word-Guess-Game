
// List of Simpson Characters
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
  "maggie",
];

let winsCounter = 0;
let lossesCounter = 0;
let userRemainingGuessCounter = 10;
let randomSelectedWord = "";
let lettersOfRandomSelectedWordsArray = [];
let blanksPlaceHolderCounter = 0;
let blanksAndCorrectLettersArray = [];
let incorrectGuessedLettersArray = [];


function startGame() {
  selectsRandomWord();
  resetGameVariables();
  setNewBlanks();
  resetsUserDisplay();
}

function selectsRandomWord() {
  randomSelectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(`Word Chosen From Array: ${randomSelectedWord}`);
  lettersOfRandomSelectedWordsArray = randomSelectedWord.split("");
  blanksPlaceHolderCounter = lettersOfRandomSelectedWordsArray.length;
}

function resetGameVariables() {
  userRemainingGuessCounter = 10;
  blanksAndCorrectLettersArray = [];
  incorrectGuessedLettersArray = [];
}

function setNewBlanks() {
  for (let i = 0; i < blanksPlaceHolderCounter; i++) {
    blanksAndCorrectLettersArray.push("_");
  }
}

function resetsUserDisplay() {
  document.getElementById("randomSelectedWordText").innerHTML = blanksAndCorrectLettersArray.join(
    " "
  );
  document.getElementById(
    "guessesRemainingCounter"
  ).innerHTML = userRemainingGuessCounter;
  document.getElementById(
    "usersGuessedLetters"
  ).innerHTML = incorrectGuessedLettersArray.join(" ");
}

function checkLetters(userLetterInput) {
  let letterInWord = false;
  for (let i = 0; i < blanksPlaceHolderCounter; i++) {
    if (randomSelectedWord[i] === userLetterInput) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (let j = 0; j < blanksPlaceHolderCounter; j++) {
      if (randomSelectedWord[j] === userLetterInput) {
        blanksAndCorrectLettersArray[j] = userLetterInput;
      }
    }
  } else {
    incorrectGuessedLettersArray.push(userLetterInput);
    userRemainingGuessCounter--;
  }
}

function endOfRound() {
  resetsUserDisplay();

  if (
    lettersOfRandomSelectedWordsArray.toString() ===
    blanksAndCorrectLettersArray.toString()
  ) {
    winsCounter++;
    document.getElementById("wins").innerHTML = winsCounter;
    alert("You Have Won This Round");

    startGame();
  } else {
    if (userRemainingGuessCounter === 0) {
      lossesCounter++;
      document.getElementById("loses").innerHTML = lossesCounter;

      alert("Sorry You Lost This Round");

      startGame();
    }
  }
}

// Initial Start Of The Game
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    let userInput = event.key.toLowerCase();
    checkLetters(userInput);
    endOfRound();
  }
};
