 let randomNumber = parseInt(Math.random() * 100 + 1)

 const userInput = document.getElementById('guessField')

 const submit = document.getElementById('submit')

 const guessSlot = document.querySelector('#guesses')
 
 const RemainingGuess = document.querySelector('#Remaining')

 const LowOrHi = document.querySelector('.LowOrHi')

 const StartOver = document.querySelector('.resultParas')

 const p = document.createElement('p')

 let prevGuess = []
 let numGuess  = 1;

 let playGame = true

 if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        validGuesse(guess)
    })
 }

//  valid Guesses 

function validGuesse(guess) {
     if(isNaN(guess)){
        alert('Please Enter A valid Number')
     }else if(guess < 1) {
        alert('Please Enter A Positive Number')
     }else if (guess > 101){
        alert('Please Enter A Number That is Less Than 100')
     } else{
         prevGuess.push(guess) 
         if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Numbver Was:  ${randomNumber}`)
            Endgame()
         }
         else{
            displayGuess(guess)
            checkGuess(guess)
         }

     }
  
}

// check gusse 

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        Endgame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }


}

// display guess 

function displayGuess (guess){
   userInput.value = ''
   guessSlot.innerHTML += `${guess},` 
   numGuess ++;
   RemainingGuess.innerHTML = `${11 - numGuess}`
}

// Display message 
 function displayMessage(message){
    LowOrHi.innerHTML = `<h2>${message}<h2/>`

 }

//  Endgame 
 function Endgame(){
   userInput.value = ''
   userInput.setAttribute ('disabled', '')
   p.classList('button')
   p.innerHTML = `<h3 id='newGame'> Start New Game</h3>`
   StartOver.appendChild(p);
   playGame =false;
   
   displayMessage(p)
   StartGame();
 }

//  StartGame
function StartGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    RemainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disable');
    StartOver.removeChild(p);
    playGame = true;

})
}
