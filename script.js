/* prompt user for letter. instead of lines for letters tell user how many letters. need loop that will continuously
prompt user for letters until word is completed. can have bank of words to randomly select from. prompt user if theyd like to play*/

/*Random word to be chosen from below word bank. Game will start on click of 'start game' button*/
let wordBank = ['Flexbox', 'Javascript', 'Github', 'Python', 'Coding', 'Terminal', 'Computer', 'Keyboard', 'Website', 'Machine'];

let wordLength;
let word;
let life = 10;
let wordInProgress = [];

function startHangmanGame(){
    let word = Math.floor(Math.random() * wordBank.length); //chooses random word from bank to begin game
    word = wordBank[word];
    console.log(word);

    for (var i = 0; i <= word.length; i++){ //checks to see how many characters the word has
         wordLength = i; 
    }

    document.querySelector('span').innerHTML = `Your word contains ${wordLength} letters. Good luck!`;
    document.querySelector('.word').innerHTML = ('_ '.repeat(wordLength)); 


    document.querySelector('.alphabet').onclick = isLetterCorrect;
    //let guess = document.querySelector('.alphabet').getAttribute("data-value").onclick;

    //console.log(guess);

    function isLetterCorrect(){ //takes input from user and checks to see if letter is present in word variable
        let i = 0;
        let guess = document.querySelector('.b').getAttribute("data-value");
        if (word.includes(guess)){ 

            while (i < wordLength){

                if (word.charAt(i).includes(guess)){
                    console.log('true');
                    wordInProgress[i] = guess;
                }
                i++;
            }

            console.log(wordInProgress);

        } else {
            life = (life-1);
        }

        console.log(life);
    
    }
   
}




