/*
getComputerChoice

- Random number generated means either P, R or S
- Save Choice in var
*/

function getComputerChoice () {
    let randomNumber = Math.random();
    let computerChoice = "rock";
    if (randomNumber <= 0.33 ) {
        computerChoice = "rock"
    } else if ( randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = "paper"
    } else if (0.67 <= randomNumber) {
        computerChoice = "scissors"
    }
    console.log(computerChoice);
    console.log(randomNumber);
    return computerChoice;
}

/* 
getHumanChoice

- variable with default value
- Show message that tells user to input either R,P or S
- Get Input from human
- save in variable
- make sure it is written in lowercase
*/

function getHumanChoice () {
   let input = prompt("This is Rock, Paper Scissors. Please choose on of them and put in your choice");
   let humanChoice = input.toLowerCase();
   console.log(humanChoice);
   return humanChoice;
}

/* 
playGame

- move Scors and playfunction in here so it fits the scope
- after each round compare the amount of victories for each party
- repeat until first player has 5 victories to win the game
*/

function playGame () {

/* 
- create two variables humanScore and computerScore. Default value 0
*/
    let humanScore = 0;
    let computerScore = 0;

 /* 
playRound

- make Choices accessible
- Take Human and Computer choices as input
- compare their choices
- calculate who won
- print out what was chosen this round and who won
- increment human or computerScore by one for each victory
*/
    function playRound () {
    let hChoice = getHumanChoice();
    let cChoice = getComputerChoice();
    console.log("Human Choice:" + hChoice);
    console.log("PC Choice:" + cChoice);

    if ( hChoice == "rock" && cChoice == "scissors" ) {
        console.log("Good Job, You won this round!")
        humanScore++;
    } else if (hChoice == "rock" && cChoice == "paper" ){
        console.log("Oh no, you lost this round!")
        computerScore++;
    } else if (hChoice == "paper" && cChoice == "rock" ){
        console.log("Good Job, You won this round!")
        humanScore++;
    } else if (hChoice == "paper" && cChoice == "scissors" ){
        console.log("Oh no, you lost this round!")
        computerScore++;
    } else if (hChoice == "scissors" && cChoice == "paper" ){
        console.log("Good Job, You won this round!")
        humanScore++;
    } else if (hChoice == "scissors" && cChoice == "rock" ){
        console.log("Oh no, you lost this round!")
        computerScore++;
    } else if (hChoice == cChoice) {
        console.log("This was a draw. Try again!")
    }
    console.log("The overall Score is: You " + humanScore + " vs PC: " + computerScore)


    /* 
    Recursive version. Did not work the first time because i put it outside of playRound body.
    Keeping this here for future me to come back to this.
    */

    /* 
    if (humanScore < 5 && computerScore < 5) {
        playRound();
    } else if (humanScore === 5) {
        console.log("CONGRATS! You won the game!");
    } else if (computerScore === 5) {
        console.log("GAME OVER! The computer won.");
    } 
    */
}
  
    /* 
    Loop version. Chose a while loop because i wanted to have a winner.
    With for loop too many draws
     */

    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }

    if (humanScore === 5) {
        console.log("CONGRATS! You won the game!");
    } else {
        console.log("GAME OVER! The computer won.");
    }



}

playGame();
