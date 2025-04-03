const myInput = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.results');
const message = document.createElement('div');
output.append(message);
const btnStart = document.createElement('button');
output.append(btnStart);
btnStart.textContent = 'Begin Game';

document.body.prepend(output);

const vals = {min:0,max:50}
const game = {guess:0,score:0, randomNum:numberMaker(vals.min,vals.max)};
myInput.setAttribute('type','number');
myInput.style.display = 'none';
btn.style.display = 'none';
btn.textContent = 'Guess';


btnStart.addEventListener('click',starter);
btn.addEventListener('click',guesser);
messageOut('Click to Begin');

function guesser(){
  console.log(myInput.value);
  const val = myInput.value;
  myInput.value = '';
  game.guess++;
  console.log(game.randomNum == val);
  
  if(game.randomNum == val ){
    console.log('correct');
    gameOver()
    } else if (game.randomNum > val){
      console.log('Too Low');
      vals.min = val;
    insetUp();
    } else{
      console.log('Too High');
      vals.mix = val;
    insetUp();
    }

}

function gameOver(v){
  const rep = game.guess == 1 ? 'guess' : 'guesses';
  messageOut(`You Won! ${v} it took ${game.guess} ${rep}`);
game.score++;
game.guess = 0;
myInput.style.display = 'none';
btn.style.display = 'none';
  btnStart.style.display = 'block'
  btnStart.textContent = 'Play Again!'
}

function insetUp(){
  messageOut(`Guess a number between ${vals.min} to ${vals.max}`);
  myInput.setAttribute('min',vals.min);
  myInput.setAttribute('max',vals.max);
}

function starter(e){
  vals.min = numberMaker(0,1);
  vals.max = numberMaker(vals.min+10,vals.min+100);
  game.randomNum = numberMaker(vals.min,vals.max);
  insetUp();
  myInput.style.display = 'block';
  btn.style.display = 'block';
  btnStart.style.display = 'none'
  console.log('start');
  
}

function messageOut(mes){
  message.innerHTML = mes;
}

function numberMaker(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
