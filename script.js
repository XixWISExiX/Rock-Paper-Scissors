// VERSION 1.0

// Runs 5 Rounds of Rock Paper Scissors

// TODO 1) remove logic that plays 5 rounds.
// TODO 2) add event listener to buttons to rockPaperScissorsRound & playerSelection with console.logs.
// TODO 3) add a div for displaying results and change all console.logs from 2) to DOM methods.
// TODO 4) Display the running score and announce the winner once one player reaches 5 points.

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors': ");
    while (!isValid(playerSelection)) {
      playerSelection = prompt(
        "Please enter either 'rock, 'paper', or 'scissors': "
      );
    }
    let computerSelection = getComputerChoice();
    console.log(rockPaperScissorsRound(playerSelection, computerSelection));
  }
}

function isValid(string) {
  string = string.toLowerCase();
  if (string === "rock" || string === "paper" || string === "scissors")
    return true;
  else return false;
}

// The computer generates its choice of either picking
// rock, paper, or scissors.
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Completes a round of Rock Paper Scissors.
function rockPaperScissorsRound(playerSelection, computerSelection) {
  let playerWins;
  if (isRock(playerSelection) && isPaper(computerSelection)) {
    playerWins = false;
    return matchStatement(playerSelection, computerSelection, playerWins);
  }
  if (isRock(playerSelection) && isScissors(computerSelection)) {
    playerWins = true;
    return matchStatement(playerSelection, computerSelection, playerWins);
  }
  if (isPaper(playerSelection) && isRock(computerSelection)) {
    playerWins = true;
    return matchStatement(playerSelection, computerSelection, playerWins);
  }
  if (isPaper(playerSelection) && isScissors(computerSelection)) {
    playerWins = false;
    return matchStatement(playerSelection, computerSelection, playerWins);
  }
  if (isScissors(playerSelection) && isRock(computerSelection)) {
    playerWins = false;
    return matchStatement(playerSelection, computerSelection, playerWins);
  }
  if (isScissors(playerSelection) && isPaper(computerSelection)) {
    playerWins = true;
    return matchStatement(playerSelection, computerSelection, playerWins);
  } else {
    return "It's a Tie!";
  }
}

function isRock(play) {
  if (play.toLowerCase() === "rock") return true;
  else return false;
}
function isPaper(play) {
  if (play.toLowerCase() === "paper") return true;
  else return false;
}
function isScissors(play) {
  if (play.toLowerCase() === "scissors") return true;
  else return false;
}

function matchStatement(playerSelection, computerSelection, playerWins) {
  let decisionText;
  if (playerWins) decisionText = "Win";
  else decisionText = "Lose";
  return `You ${decisionText}! ${format(playerSelection)} beats ${format(
    computerSelection
  )}`;
}

function format(string) {
  let firstLetter = string[0];
  return (
    firstLetter.toUpperCase() + string.substring(1, string.length).toLowerCase()
  );
}

// Runs the game of Rock Paper Scissors.
game();
