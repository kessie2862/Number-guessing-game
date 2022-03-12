'use strict';

// Get a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Listening to events on the CHECK button
function checkNumber() {
  // Get the guessed value from the input field
  const guess = Number(document.querySelector('.guess').value);

  // if No Number is entered in the input field
  if (!guess) {
    displayMessage('No number!');

    // When guess is same as secretNumber
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess');
    // Display guessed number
    document.querySelector('.number').textContent = secretNumber;

    // Change the backgroundColor of the body
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Set the hignscore value
    document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
      // Update the highscore
      document.querySelector('.highscore').textContent = highscore;
    } else if (score < highscore) {
      highscore;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is different from secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('Too low');
    score--;
    document.querySelector('.score').textContent = score;
  }
}
document.querySelector('.check').addEventListener('click', checkNumber);

function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';

  // The value of the input placeholder should be null
  document.querySelector('.guess').value = '';
}

// Listening to events on the AGAIN button
document.querySelector('.again').addEventListener('click', resetGame);
