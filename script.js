let randomNumber;
let attempts = 0;
const maxAttempts = 10;
let gameOver = false;
const rangeStart = 1;
const rangeEnd = 100;


document.getElementById('range').textContent = `${rangeStart} and ${rangeEnd}`;

function startNewGame() {
  randomNumber = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
  attempts = 0;
  gameOver = false;
  document.getElementById('attempts').textContent = `Attempts: 0`;
  document.getElementById('feedback').textContent = '';
  document.getElementById('submit').disabled = false;
  document.getElementById('restart').style.display = 'none';
}

document.getElementById('game-form').addEventListener('submit', function(event) {
  event.preventDefault();
  if (gameOver) return;

  const guess = parseInt(document.getElementById('guess').value);

  if (isNaN(guess)) {
    alert('Please enter a valid number.');
    return;
  }

  attempts++;
  document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    document.getElementById('feedback').textContent = `Correct! You guessed the number in ${attempts} attempts.`;
    document.getElementById('feedback').style.color = 'green';
    gameOver = true;
  } else if (guess > randomNumber) {
    document.getElementById('feedback').textContent = `Too high! Try a smaller number.`;
    document.getElementById('feedback').style.color = 'red';
  } else {
    document.getElementById('feedback').textContent = `Too low! Try a higher number.`;
    document.getElementById('feedback').style.color = 'red';
  }

  if (attempts >= maxAttempts && !gameOver) {
    document.getElementById('feedback').textContent = `Game over! The number was ${randomNumber}.`;
    gameOver = true;
  }

  if (gameOver) {
    document.getElementById('submit').disabled = true;
    document.getElementById('restart').style.display = 'inline-block';
  }


  document.getElementById('guess').value = '';
});

document.getElementById('restart').addEventListener('click', startNewGame);


startNewGame();
