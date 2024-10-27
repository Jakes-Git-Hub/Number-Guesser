let target: number;

const humanGuessInput = document.getElementById('human-guess') as HTMLInputElement;
const roundNumberDisplay = document.getElementById('round-number') as HTMLElement;
const computerGuessDisplay = document.getElementById('computer-guess') as HTMLElement;
const humanScoreDisplay = document.getElementById('human-score') as HTMLElement;
const computerScoreDisplay = document.getElementById('computer-score') as HTMLElement;
const targetNumberDisplay = document.getElementById('target-number') as HTMLElement;
const computerWinsDisplay = document.getElementById('computer-wins') as HTMLElement;

const guessButton = document.getElementById('guess') as HTMLButtonElement;
const nextRoundButton = document.getElementById('next-round') as HTMLButtonElement;

guessButton.addEventListener('click', () => {
  target = generateTarget();
  const currentHumanGuess: number = parseInt(humanGuessInput.value);
  const computerGuess: number = Math.floor(Math.random() * 10);

  computerGuessDisplay.innerText = computerGuess.toString();
  targetNumberDisplay.innerText = target.toString();

  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target);
  const winner = humanIsWinner ? 'human' : 'computer';

  updateScore(winner);

  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text');
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  humanScoreDisplay.innerText = humanScore.toString();
  computerScoreDisplay.innerText = computerScore.toString();

  guessButton.setAttribute('disabled', 'true');
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  advanceRound();
  roundNumberDisplay.innerText = currentRoundNumber.toString();

  nextRoundButton.setAttribute('disabled', 'true');
  guessButton.removeAttribute('disabled');

  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add') as HTMLButtonElement;
const subtractButton = document.getElementById('subtract') as HTMLButtonElement;

addButton.addEventListener('click', () => {
  humanGuessInput.value = (+humanGuessInput.value + 1).toString();
  handleValueChange(parseInt(humanGuessInput.value));
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = (+humanGuessInput.value - 1).toString();
  handleValueChange(parseInt(humanGuessInput.value));
});

const handleValueChange = (value: number) => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value > 9) {
    addButton.setAttribute('disabled', 'true');
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', 'true');
  }
};

humanGuessInput.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  handleValueChange(parseInt(target.value));
});