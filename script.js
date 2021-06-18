'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 🎉Correct Number';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 5;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🙏 please enter a Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Guess is high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷‍♀️ Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Guess is low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷‍♀️ Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK
let score1 = 20;
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
