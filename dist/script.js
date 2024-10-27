"use strict";
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}
function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}
function compareGuesses(humanGuess, computerGuess, target) {
    const humanDistance = getAbsoluteDistance(humanGuess, target);
    const computerDistance = getAbsoluteDistance(computerGuess, target);
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess is out of range! Please choose a number between 0 and 9.");
    }
    else if (humanDistance <= computerDistance) {
        return true;
    }
    else {
        return false;
    }
}
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}
function advanceRound() {
    currentRoundNumber++;
}
const targetNumber = generateTarget();
const humanGuess = 5;
const computerGuess = 9;
function playGame(humanGuess, computerGuess, targetNumber) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess is out of range! Please choose a number between 0 and 9.");
    }
    else {
        const humanWins = compareGuesses(humanGuess, computerGuess, targetNumber);
        updateScore(humanWins ? 'human' : 'computer');
        advanceRound();
        console.log(`Target number: ${targetNumber}`);
        console.log(`Human guess: ${humanGuess}`);
        console.log(`Computer guess: ${computerGuess}`);
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Current round: ${currentRoundNumber}`);
    }
}
//# sourceMappingURL=script.js.map