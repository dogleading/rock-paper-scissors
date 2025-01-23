let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  result.textContent = "";
});

rock.addEventListener("click", function () {
  result.textContent = "";
  let humanSelection = "rock";
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

paper.addEventListener("click", function () {
  result.textContent = "";
  let humanSelection = "paper";
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

scissors.addEventListener("click", function () {
  result.textContent = "";
  let humanSelection = "scissors";
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    return "Invalid choice!";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Invalid choice!") {
    result.textContent = "Invalid choice!";
    return console.log("Invalid choice!");
  }

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      result.textContent = `Human wins the game! with a score of ${humanScore} to ${computerScore}`;
      return console.log(
        `Human wins the game! with a score of ${humanScore} to ${computerScore}`
      );
    } else if (humanScore < computerScore) {
      result.textContent = `Computer wins the game! with a score of ${computerScore} to ${humanScore}`;
      return console.log(
        `Computer wins the game! with a score of ${computerScore} to ${humanScore}`
      );
    } else {
      result.textContent = "Its a tie! No one wins!";
      return console.log("Its a tie! No one wins!");
    }
  }

  if (humanChoice === computerChoice) {
    result.textContent = "Its a tie!";
    return console.log("Its a tie!");
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      result.textContent = "Computer wins!";
      return console.log("Computer wins!");
    } else {
      humanScore++;
      humanScoreDisplay.textContent = humanScore;
      result.textContent = "Human wins!";
      return console.log("Human wins!");
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      result.textContent = "Computer wins!";
      return console.log("Computer wins!");
    } else {
      humanScore++;
      humanScoreDisplay.textContent = humanScore;
      result.textContent = "Human wins!";
      return console.log("Human wins!");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      result.textContent = "Computer wins!";
      return console.log("Computer wins!");
    } else {
      humanScore++;
      humanScoreDisplay.textContent = humanScore;
      result.textContent = "Human wins!";
      return console.log("Human wins!");
    }
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore > computerScore) {
//     console.log(
//       `Human wins the game! with a score of ${humanScore} to ${computerScore}`
//     );
//   } else if (humanScore < computerScore) {
//     console.log(
//       `Computer wins the game! with a score of ${computerScore} to ${humanScore}`
//     );
//   } else {
//     console.log("Its a tie! No one wins!");
//   }
// }

// playGame();
