/* 
  Gets called by: playRound
  - takes a random number and saves it according to its value as rock, paper scissors
  - returns that value which then gets used as computer choice in playRound
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
  return computerChoice;
}

/* 
Main Function
- creates several variables which will later be processed
*/
function playGame() {
  let gameState = true;
  let humanScore = 0;
  let computerScore = 0;
  let container = document.querySelector("#container");
  let score = document.querySelector("#score");
  let list = document.createElement("ul");
  let scoreDisplay = document.querySelector("#running-score");
  list.id = "text";
  score.appendChild(list);

  /* 
  Gets called by: onClick-Listener for Rock/Paper/Scissor
  - takes input from onClick-Listener as hChoice
  - calls getComputerChoice and saves it as cChoice
  - has rules for rock,paper,scissors 
  - increments player score according to results
  - calls declareWinner after each round to see if a winner could be declared already  
  */
  function playRound(humanChoice) {
    let hChoice = humanChoice;
    let cChoice = getComputerChoice();

    /* 
    - ruleset for rock,paper, scissors
    - adds a <p> to the ul containing information about that round
    */
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

  /* 
  - onClick-Listener which locks in the Choice (rock, paper, scissors)
  - Checks what option was chosen   
    and then calls playRound with the chosen value as the input from the human
  */
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

  /* 
  Gets called by: startNewGame
  - checks if gameState is false (which means a winner was declared)
  - if it is false the hidden container with the Restart option gets shown
  */
  function toggleButton() {
    if (gameState === false) {
      let toggle = document.getElementById("restart");
      toggle.style.visibility = "visible";
    }
  }

  /* 
  Gets called by:startNewGame
  - disables the Rock/Paper/Scissors Buttons depending on the state
  */
  function setButtons(state) {
    document.getElementById("rock").disabled = !state;
    document.getElementById("paper").disabled = !state;
    document.getElementById("scissors").disabled = !state;
  }

  /* 
  Gets called by: declareWinner
  - calls toggle Button to show hidden Yes/No Buttons
  - If Yes-button is clicked clearPage is called to show blank Page,
    scores get reset to 0,
    setButtons is called to activate Rock/Paper/Scissors Button again
  */
  function startNewGame() {
    toggleButton();
    let yesChoice = document.getElementById("yes");

    /* 
    onClick Handler for "Yes" Button
    -if yes is clicked a new game will start (which means all the old 
      results will be gone and the buttons will work again)
    */
    yesChoice.addEventListener("click", (e) => {
      clearPage();
      humanScore = 0;
      computerScore = 0;
      gameState = true;
      scoreDisplay.textContent = `You: ${humanScore} PC: ${computerScore}`;
      setButtons(true);
    });

    /* TO-DO
    Add Logic for clicking no
    */

    /* 
    onClick Handler for "No" Button  
    */
    let noChoice = document.getElementById("no");
    noChoice.addEventListener("click", (e) => {
      console.log(
        "Ok. Soon there will be a button where you can start a new game whenever you want",
      );
    });
  }

  /* 
  Gets called by: clearPage
  - checks the document if an ul exists (created by playRound)
  - if no ul exists then it creates an ul on which the round results can be seen
  */
  function checkUl() {
    let ul = document.getElementById("text");
    if (!ul) {
      document.createElement("ul");
      list.id = "text";
      score.appendChild(list);
    } else {
    }
  }

  /* 
  Gets called by: startNewGame
  - removes the ul with ID "score" which contains all the
    paragraphs with the standings
  - calls checkUl
  */
  function clearPage() {
    let scoreDiv = document.getElementById("text");
    while (scoreDiv.firstChild) {
      scoreDiv.removeChild(scoreDiv.firstChild);
    }
    checkUl();
  }

  /* 
  Gets called by: playRound() (after each run)
  - Checks if one player has 5 wins and shows Messages according to info on Site
  - sets gameState to false
  - Disables Rock/Paper/Scissors Buttons by calling setButtons
  - Calls startNewGame
  */
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

/* 
Too lazy to translate xD
Funktionsweise:
- playGame wird aufgerufen
- Rock/Paper/Scissor wird gewählt
- input wird als menschliche Wahl für playRound benutzt
- playRound ruft getComputerChoice und nimmt Ergbenis als Computer Wahl für playRound
- playRound ruft am Ende declareWinner auf
- declareWinner checkt jedes Mal ob ein Spieler schon 5 Siege hat
- Falls nicht bleiben die Buttons aktiviert und man kann bis zum Ende spielen
- Sobald ein Spieler 5 Siege hat erklärt declareWinner den Sieger und deaktiviert
  die Buttons, damit kein Weiterspielen möglich ist
- declareWinner ruft startNewGame auf
- startNewGame ruft toggleButton auf
- toggleButton zeigt verstecktes Element mit Frage nach Weiterspielen
- onClick-Handler innerhalb startNewGame nimmt Input
- bei "No" -> TO-DO
- bei "Yes" wird clearPage aufgerufen, die Scores zurückgesetzt und 
  die Buttons wieder aktiviert, um wieder ein Spiel von vorne zu beginnen
*/
playGame();
