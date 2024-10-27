var target;
var humanGuessInput = document.getElementById('human-guess');
var roundNumberDisplay = document.getElementById('round-number');
var computerGuessDisplay = document.getElementById('computer-guess');
var humanScoreDisplay = document.getElementById('human-score');
var computerScoreDisplay = document.getElementById('computer-score');
var targetNumberDisplay = document.getElementById('target-number');
var computerWinsDisplay = document.getElementById('computer-wins');
var guessButton = document.getElementById('guess');
var nextRoundButton = document.getElementById('next-round');
guessButton.addEventListener('click', function () {
    target = generateTarget();
    var currentHumanGuess = parseInt(humanGuessInput.value);
    var computerGuess = Math.floor(Math.random() * 10);
    computerGuessDisplay.innerText = computerGuess.toString();
    targetNumberDisplay.innerText = target.toString();
    var humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target);
    var winner = humanIsWinner ? 'human' : 'computer';
    updateScore(winner);
    if (humanIsWinner) {
        guessButton.innerText = 'You Win!!!!!';
        guessButton.classList.toggle('winning-text');
    }
    else {
        computerWinsDisplay.innerText = 'Computer Wins!!!';
    }
    humanScoreDisplay.innerText = humanScore.toString();
    computerScoreDisplay.innerText = computerScore.toString();
    guessButton.setAttribute('disabled', 'true');
    nextRoundButton.removeAttribute('disabled');
});
nextRoundButton.addEventListener('click', function () {
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
var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
addButton.addEventListener('click', function () {
    humanGuessInput.value = (+humanGuessInput.value + 1).toString();
    handleValueChange(parseInt(humanGuessInput.value));
});
subtractButton.addEventListener('click', function () {
    humanGuessInput.value = (+humanGuessInput.value - 1).toString();
    handleValueChange(parseInt(humanGuessInput.value));
});
var handleValueChange = function (value) {
    if (value > 0 && value <= 9) {
        subtractButton.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    }
    else if (value > 9) {
        addButton.setAttribute('disabled', 'true');
    }
    else if (value <= 0) {
        subtractButton.setAttribute('disabled', 'true');
    }
};
humanGuessInput.addEventListener('input', function (e) {
    var target = e.target;
    handleValueChange(parseInt(target.value));
});
