let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win!";
    } else if (computerMove === "Paper") {
      result = "It is a tie!";
    } else if (computerMove === "Scissors") {
      result = "You lose!";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "It is a tie!";
    } else if (computerMove === "Scissors") {
      result = "You win!";
    } else if (computerMove === "Paper") {
      result = "You lose!";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose!";
    } else if (computerMove === "Paper") {
      result = "You win!";
    } else if (computerMove === "Scissors") {
      result = "It is a tie!";
    }
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "It is a tie!") {
    score.ties += 1;
  }

  updateScoreElement();

  document.querySelector(".js-results").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `<p>YOU</p>
  <img src="images/${playerMove}.png" class="move-icon">
  <img src="images/${computerMove}.png" class="move-icon">
  <p>COMPUTER</p>`

  localStorage.setItem("score", JSON.stringify(score));
}