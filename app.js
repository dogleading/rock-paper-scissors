let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
  let humanSelection = "rock";
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

paper.addEventListener("click", function () {
  let humanSelection = "paper";
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

scissors.addEventListener("click", function () {
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
    return console.log("Invalid choice!");
  }

  if (humanChoice === computerChoice) {
    return console.log("Its a tie!");
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return console.log("Computer wins!");
    } else {
      humanScore++;
      return console.log("Human wins!");
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return console.log("Computer wins!");
    } else {
      humanScore++;
      return console.log("Human wins!");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return console.log("Computer wins!");
    } else {
      humanScore++;
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
