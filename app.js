function playGame(playerSelection) {
  clearBoard();
  const computerSelection = generateComputerSelection();
  displayComputerSelection(computerSelection);
  const result = getResult(playerSelection, computerSelection);
  displayResult(result);
}

function generateComputerSelection() {
  return Math.floor(Math.random() * MAX_OPTIONS);
}

function getResult(player, computer) {
  switch (player) {
    case 0:
      if (computer === Game.ROCK) {
        return Result.TIE;
      } else if (computer === Game.PAPER) {
        return Result.LOSE;
      } else {
        return Result.WIN;
      }
    case 1:
      if (computer === Game.ROCK) {
        return Result.WIN;
      } else if (computer === Game.PAPER) {
        return Result.TIE;
      } else {
        return Result.LOSE;
      }
    case 2:
      if (computer === Game.ROCK) {
        return Result.LOSE;
      } else if (computer === Game.PAPER) {
        return Result.WIN;
      } else {
        return Result.TIE;
      }
    default:
      return -1;
  }
}

function displayComputerSelection(computerSelection) {
  let selectionText = "";
  switch (computerSelection) {
    case 0:
      selectionText = "ROCK";
      break;
    case 1:
      selectionText = "PAPER";
      break;
    case 2:
      selectionText = "SCISSORS";
      break;
    default:
      selectionText = "";
  }
  computerDiv.innerHTML = `<h1>Computer chooses ${selectionText}</h1>`;
}

function displayResult(result) {
  switch (result) {
    case 0:
      resultDiv.innerHTML = `<h1>You won!</h1>`;
      break;
    case 1:
      resultDiv.innerHTML = `<h1>You lost!</h1>`;
      break;
    case 2:
      resultDiv.innerHTML = `<h1>It's a tie!</h1>`;
      break;
  }
}

function clearBoard() {
  computerDiv.innerHTML = "";
  resultDiv.innerHTML = "";
}

// Constants
const computerDiv = document.getElementById("computer");
const resultDiv = document.getElementById("result");

const Game = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
};

const Result = {
  WIN: 0,
  LOSE: 1,
  TIE: 2
};

const MAX_OPTIONS = 3;