// WORKING GAME without functions
// const gameChoices = ["rock", "scissors", "paper"];
// let playerScore = 0;
// let computerScore = 0;

// for (let i = 0; i < 5; i++) {
//     let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
//     console.log(computerChoice);

//     let playerChoice = prompt("Rock, Paper, or Scissors?");
//     console.log(playerChoice);

//     if (playerChoice === computerChoice) {
//         console.log("It's a tie!");
//     } else if (
//         playerChoice === "rock" && computerChoice === "scissors" ||
//         playerChoice === "paper" && computerChoice === "rock" ||
//         playerChoice === "scissors" && computerChoice === "paper"
//     ) {
//         playerScore++;
//         console.log("You win!");
//     } else {
//         computerScore++;
//         console.log("You lose!");
//     }
// }

// if (playerScore > computerScore) {
//     console.log(`Player has ${playerScore} points! Computer has ${computerScore}!  Player wins!`);
// } else if (playerScore < computerScore) {
//     console.log(`Player has ${playerScore} points! Computer has ${computerScore}!  Computer wins!`);
// } else {
//     console.log("It's a tie?!");
// }

let rockBtn = document.querySelector("#rock-el").addEventListener("click", playRound);
let paperBtn = document.querySelector("#paper-el").addEventListener("click", playRound);
let scissorsBtn = document.querySelector("#scissors-el").addEventListener("click", playRound);
let resultEl = document.querySelector("#result-el");
let playerScoreEl = document.querySelector("#player-score-el");
let computerScoreEl = document.querySelector("#computer-score-el");
let finalScoreEl = document.querySelector("#final-score-el");

const gameChoices = ["ROCK", "SCISSORS", "PAPER"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

// function getPlayerChoice() {

// };

function playRound(e) {

    let computerChoice = getComputerChoice();
    let playerChoice;

    console.log(computerChoice);

    if (e.target.id === "rock-el") {
        playerChoice = "ROCK";
    } else if (e.target.id === "paper-el") {
        playerChoice = "PAPER";
    } else {
        playerChoice = "SCISSORS";
    }

    console.log(playerChoice);

    if (playerChoice === computerChoice) {
        resultEl.textContent = `${playerChoice} and ${computerChoice} make a tie!`;
    } else if (
        playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice === "ROCK" ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER"
    ) {
        playerScore++;
        resultEl.textContent = `${playerChoice} beats ${computerChoice}! You win!`;
    } else {
        computerScore++;
        resultEl.textContent = `${computerChoice} beats ${playerChoice}! Computer wins!`;
    }

    playerScoreEl.textContent = `Player: ${playerScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
};

function endGame() {

    if (playerScore > computerScore) {
        finalScoreEl.textContent = `Player has ${playerScore} points! Computer has ${computerScore}!  Player wins!`;
    } else if (playerScore < computerScore) {
        finalScoreEl.textContent = `Player has ${playerScore} points! Computer has ${computerScore}!  Computer wins!`;
    } else {
        finalScoreEl.textContent = "It's a tie?!";
    }
};

// game();