//can only attach event listener to one item, queryselectorAll was returning full array list

//need to now create condition that checks if letter has already been used and deduct life point if reguessed OR dont allow user to click on already submitted guess

/*Random word to be chosen from below word bank. Game will start on click of 'start game' button*/
let wordBank = [
  "flexbox",
  "javascript",
  "github",
  "python",
  "coding",
  "terminal",
  "computer",
  "keyboard",
  "website",
  "machine",
];

let wordLength;
let word;
let wordInProgress = [];
let guess;
let guessNum;
let life = 10;

function startHangmanGame() {

  document.querySelector(".newGame").style.visibility = "visible";

  let word = Math.floor(Math.random() * wordBank.length); //chooses random word from bank to begin game
  word = wordBank[word];
  console.log(word);

  for (var i = 0; i <= word.length; i++) {
    //checks to see how many characters the word has
    wordLength = i;
  }

  document.querySelector(
    "span"
  ).innerHTML = `Your word contains ${wordLength} letters. Good luck!`;
  document.querySelector(".word").innerHTML = "_ ".repeat(
    wordLength
  );

  guess = document.querySelectorAll(".alphabet div"); 

  guess.forEach(function (letter) {
    //loop to single out letter when clicked
    letter.addEventListener("click", function () {
      guess = letter.getAttribute("class");
      isLetterCorrect(guess);
    });
  });

  
  function isLetterCorrect() {
    //takes input from user and checks to see if letter is present in chosen word
    console.log(guess);

    if (word.includes(guess)) {
      for (let i = 0; i < wordLength && guessNum !== 1; i++) {
        if (word.charAt(i).includes(guess)) {
          wordInProgress[i] = guess;
        } else {
          wordInProgress[i] = "_";
        }
      }

      for (let i = 0; i < wordLength && guessNum === 1; i++) {
        if (word.charAt(i).includes(guess)) {
          wordInProgress[i] = guess;
        }
        if (wordInProgress.join("") === word){
            document.querySelector(".win").style.visibility = "visible";
            window.setTimeout(reload, 5000);
        }
      }
      guessNum = 1;

      document.querySelector(".word").innerHTML = wordInProgress.join(""); //show parts of word/letters user has correctly guessed so far
    } else {
      life = life - 1;
    }

    if (life === 9) {
      //to show different parts of hangman as user incorrectly guesses
      document.querySelector(".deadman1").style.visibility = "visible";
    } else if (life === 8) {
      document.querySelector(".deadman2").style.visibility = "visible";
    } else if (life === 7) {
      document.querySelector(".deadman3").style.visibility = "visible";
    } else if (life === 6) {
      document.querySelector(".deadman4").style.visibility = "visible";
    } else if (life === 5) {
      document.querySelector(".deadman5").style.visibility = "visible";
    } else if (life === 4) {
      document.querySelector(".deadman6").style.visibility = "visible";
    } else if (life === 3) {
      document.querySelector(".deadman7").style.visibility = "visible";
    } else if (life === 2) {
      document.querySelector(".deadman8").style.visibility = "visible";
    } else if (life === 1) {
      document.querySelector(".deadman9").style.visibility = "visible";
    } else if (life === 0) {
      document.querySelector(".deadman10").style.visibility = "visible";
      document.querySelector(".lose").style.visibility = "visible";
      window.setTimeout(reload, 4000);
         //unsure of how to break out of main function. Have tried return, but cannot get it to act on startGame function
    }
  }
 
}

function reload(){
    window.location.reload();
}

function newGame() {
    window.location.reload();
}