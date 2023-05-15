// VERSION 2.0

// Runs 5 Rounds of Rock Paper Scissors

function game() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", choose);
  });
}

// TODO 4.1) First input doesn't work
// TODO 4.2) abstrace out the choose function
function choose() {
  choice = this.className;
  console.log(choice); // Logs "rock", "paper", or "scissors" based on which button is clicked
  let computerChoice = getComputerChoice();
  console.log(rockPaperScissorsRound(choice, computerChoice));
  console.log(winHandler.counter);
  console.log(loseHandler.counter);
  let playerDisplay = document.getElementsByClassName("playerScore");
  let computerDisplay = document.querySelector(".computerScore");
  playerDisplay[0].textContent = `Player Score: ${winHandler.counter}`;
  computerDisplay.textContent = `Computer Score: ${loseHandler.counter}`;
  isWinner();
}

function isWinner() {
  let screen = document.querySelector(".winnerScreen");
  if (winHandler.counter == 5) {
    screen.textContent = "You Win!";
    winHandler.counter = 0;
    loseHandler.counter = 0;
  }
  if (loseHandler.counter == 5) {
    screen.textContent = "You Lose...";
    winHandler.counter = 0;
    loseHandler.counter = 0;
  }
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
  if (playerWins) {
    decisionText = "Win";
    winHandler.counter++;
  } else {
    decisionText = "Lose";
    loseHandler.counter++;
  }
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

// async function isWinner() {
//   // const response = await fetch("http://127.0.0.1:5500/");
//   await delay(100);
//   if (winHandler.counter == 5) {
//     alert("YOU WIN");
//     winHandler.counter = 0;
//   }
//   if (loseHandler.counter == 5) {
//     alert("YOU LOSE");
//     loseHandler.counter = 0;
//   }
// }

// Runs the game of Rock Paper Scissors.
// game();

var winHandler = (function () {
  var counter = 0; // this is not in global scope!
  return function () {
    counter++;
  };
})();

var loseHandler = (function () {
  var counter = 0; // this is not in global scope!
  return function () {
    counter++;
  };
})();

winHandler.counter = 0;
loseHandler.counter = 0;
window.addEventListener("click", game);
