const myInput = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.results');
const message = document.createElement('div');
output.append(message);
const vals = {min:0,max:50}
const game = {score:0, randomNum:numberMaker(vals.min,vals.max)};
myInput.setAttribute('type','number');
myInput.style.display = 'none';
btn.textContent = 'Guess';
btn.addEventListener('click',starter);
messageOut('Click to Begin');


function starter(e){
  console.log('start');
  
}

function messageOut(mes){
  message.innerHTML = mes;
}

function numberMaker(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// function checkGuess() {
//     const userGuess = parseInt(document.getElementById("guess").value);
//     const message = document.getElementById("message");

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         message.textContent = "Please enter a valid number between 1 and 100.";
//         return;
//     }

//     if (userGuess === randomNumber) {
//         message.textContent = "Congratulations! You guessed the correct number!";
//     } else if (userGuess < randomNumber) {
//         message.textContent = "Too low! Try again.";
//     } else {
//         message.textContent = "Too high! Try again.";
//     }
// }