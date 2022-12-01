function getComputerChoice() {
  let seed = Math.floor(Math.random() * 3 + 1);

  switch (seed) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function rpsPlay(playerSelection, computerSelection) {
  const playerSelectionCaseInsensitive = playerSelection.toLowerCase();
  const computerSelectionCaseInsensitive = computerSelection.toLowerCase();

  if (computerSelectionCaseInsensitive === "rock") {
    if (playerSelectionCaseInsensitive === "paper") {
      return "You Win! Paper beats Rock";
    } else if (playerSelectionCaseInsensitive === "scissors") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "Draw!";
    }
  } else if (computerSelectionCaseInsensitive === "paper") {
    if (playerSelectionCaseInsensitive === "scissors") {
      return "You Win! Scissors beats Paper";
    } else if (playerSelectionCaseInsensitive === "rock") {
      return "You Lose! Paper beats Rock";
    } else {
      return "Draw!";
    }
  } else {
    if (playerSelectionCaseInsensitive === "rock") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelectionCaseInsensitive === "paper") {
      return "You Lose! Scissors beat Paper";
    } else {
      return "Draw!";
    }
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let draws = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter a choice: ", "Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();

    let result = rpsPlay(playerSelection, computerSelection);

    console.log(result);

    if (rpsResult(result) === "draw") {
      draws++;
    } else if (rpsResult(result) === "win") {
      playerWins++;
    } else {
      computerWins++;
    }
  }
}

function rpsResult(result) {
  let words = result.split(" ");

  if (words.length === 1) {
    return "draw";
  } else if (words[1] === "Win!") {
    return "win";
  } else {
    return "lose";
  }
}
