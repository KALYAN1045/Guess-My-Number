'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  // Varibale declaration
  const inp = Number(document.querySelector('.guess').value);

  // No imput given
  if (!inp) {
    document.querySelector('.message').textContent = 'No Number ⛔';
  }

  // Found the answer!
  else if (inp === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed it right! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      // Greater input
      if (inp > secretNumber) {
        document.querySelector('.message').textContent = "It's too High ☝️";
      }
      // Smaller input
      else {
        document.querySelector('.message').textContent = "It's too Low 👇";
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Looser! 😂';
      document.querySelector('.number').textContent = secretNumber;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
