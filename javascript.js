/*
getComputerChoice

- Random number generated means either P, R or S
- Save Choice in var
*/

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = "rock";
  if (randomNumber <= 0.33) {
    computerChoice = "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    computerChoice = "paper";
  } else if (0.67 <= randomNumber) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  console.log(randomNumber);
  return computerChoice;
}

/* TO-DO
Reset button einfügen. Verstecken bis Game durch ist.
*/

function playGame() {
  let gameState = true;
  // let toggle = document.getElementById('restart').style.visibility='hidden'
  let humanScore = 0;
  let computerScore = 0;
  let container = document.querySelector("#container");
  let score = document.querySelector("#score");
  let list = document.createElement("ul");
  let scoreDisplay = document.querySelector("#running-score");
  list.id = "text";
  score.appendChild(list);

  function playRound(humanChoice) {
    let hChoice = humanChoice;
    let cChoice = getComputerChoice();

    if (hChoice == cChoice) {
      const p = document.createElement("p");
      p.textContent = "This was a draw. Try again!";
      p.id = "text";
      list.appendChild(p);
    } else if (
      (hChoice == "rock" && cChoice == "scissors") ||
      (hChoice == "paper" && cChoice == "rock") ||
      (hChoice == "scissors" && cChoice == "paper")
    ) {
      humanScore++;
      const p = document.createElement("p");
      p.textContent = "Good Job, You won this round!";
      p.id = "text";
      list.appendChild(p);
    } else {
      computerScore++;
      const p = document.createElement("p");
      p.textContent = "Oh no, you lost this round!";
      p.id = "text";
      list.appendChild(p);
    }
    console.log(
      "The overall Score is: You " + humanScore + " vs PC: " + computerScore,
    );
    const p = document.createElement("p");
    p.textContent =
      "The overall Score is: You " + humanScore + " vs PC: " + computerScore;
    scoreDisplay.textContent = `You: ${humanScore} PC: ${computerScore}`;
    list.appendChild(p);
    declareWinner();
  }

  let choice = container.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
      case "rock":
        choice = "rock";
        break;
      case "paper":
        choice = "paper";
        break;
      case "scissors":
        choice = "scissors";
        break;
    }
    return playRound(choice);
  });

  function toggleButton() {
    if (gameState === false) {
      let toggle = document.getElementById("restart");
      toggle.style.visibility = "visible";
    }
  }

  function setButtons(state) {
    document.getElementById("rock").disabled = !state;
    document.getElementById("paper").disabled = !state;
    document.getElementById("scissors").disabled = !state;
  }

  function startNewGame() {
    toggleButton();
    let yesChoice = document.getElementById("yes");

    yesChoice.addEventListener("click", (e) => {
      clearPage();
      humanScore = 0;
      computerScore = 0;
      gameState = true;
      scoreDisplay.textContent = `You: ${humanScore} PC: ${computerScore}`;
      setButtons(true);
    });

    /* TO-DO */

    let noChoice = document.getElementById("no");
    noChoice.addEventListener("click", (e) => {
      console.log(
        "Ok. Soon there will be a button where you can start a new game whenever you want",
      );
    });
  }

  function checkUl() {
    let ul = document.getElementById("text");
    if (!ul) {
      document.createElement("ul");
      list.id = "text";
      score.appendChild(list);
    } else {
    }
  }

  function clearPage() {
    let scoreDiv = document.getElementById("text");
    while (scoreDiv.firstChild) {
      scoreDiv.removeChild(scoreDiv.firstChild);
    }
    checkUl();
  }

  function declareWinner() {
    if (humanScore === 5) {
      const p = document.createElement("p");
      p.textContent = "CONGRATS! You won the game!";
      p.id = "text";
      list.appendChild(p);
      gameState = false;
      setButtons(false);
      startNewGame();
    } else if (computerScore === 5) {
      const p = document.createElement("p");
      p.textContent = "GAME OVER! The computer won.";
      p.id = "text";
      list.appendChild(p);
      gameState = false;
      setButtons(false);
      startNewGame();
    }
  }
}

playGame();
