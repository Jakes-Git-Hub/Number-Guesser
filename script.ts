let humanScore: number = 0;
let computerScore: number = 0;
let currentRoundNumber: number = 1;

// Write your code below:

function generateTarget(): number {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1: number, num2: number): number {
    return Math.abs(num1 - num2);
}

function compareGuesses(humanGuess: number, computerGuess: number, target: number) {
    const humanDistance = getAbsoluteDistance(humanGuess, target);
    const computerDistance = getAbsoluteDistance(computerGuess, target);
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess is out of range! Please choose a number between 0 and 9.");
    } else if (humanDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner: string) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

const targetNumber: number = generateTarget();
const humanGuess: number = 5;
const computerGuess: number = 9;

function playGame(humanGuess: number, computerGuess: number, targetNumber: number) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess is out of range! Please choose a number between 0 and 9.");
    } else {
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

