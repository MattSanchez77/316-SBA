const myInput = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.results');
const message = document.createElement('div');
output.append(message);
const btnStart = document.createElement('button');
output.append(btnStart);
btnStart.textContent = 'Begin Game';

const vals = {min:0,max:50}
const game = {score:0, randomNum:numberMaker(vals.min,vals.max)};
myInput.setAttribute('type','number');
myInput.style.display = 'none';
btn.style.display = 'none';
btn.textContent = 'Guess';


btnStart.addEventListener('click',starter);
messageOut('Click to Begin');


function starter(e){
  vals.min = numberMaker(0,1);
  vals.max = numberMaker(vals.min+10,vals.min+100);
  game.randomNum = numberMaker(vals.min,vals.max);
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
