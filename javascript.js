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


function playGame () {


    let humanScore = 0;
    let computerScore = 0;
    let container = document.querySelector('#container');
    let score = document.querySelector('#score');
    let list = document.createElement('ul');
    let scoreDisplay = document.querySelector('#running-score');
    list.id = 'text';
    score.appendChild(list);


    function playRound (humanChoice) {
    let hChoice = humanChoice;
    let cChoice = getComputerChoice();
    
    /* console.log("Human Choice:" + hChoice);
    console.log("PC Choice:" + cChoice); */

    if (hChoice == cChoice) {
        const p = document.createElement('p');
        p.textContent = "This was a draw. Try again!";
        p.id = "text";
        list.appendChild(p); 
        //console.log("This was a draw. Try again!")
    }else if ( (hChoice == "rock" && cChoice == "scissors") || (hChoice == "paper" && cChoice == "rock" ) || (hChoice == "scissors" && cChoice == "paper" )) {
        //console.log("Good Job, You won this round!")
        humanScore++;
        const p = document.createElement('p');
        p.textContent = "Good Job, You won this round!";
        p.id = "text";
        list.appendChild(p);
    } else  {
        //console.log("Oh no, you lost this round!")
        computerScore++;
        const p = document.createElement('p');
        p.textContent = "Oh no, you lost this round!";
        p.id = "text";
        list.appendChild(p);
    } 
    console.log("The overall Score is: You " + humanScore + " vs PC: " + computerScore)
    const p = document.createElement('p');
    p.textContent = "The overall Score is: You " + humanScore + " vs PC: " + computerScore;
    scoreDisplay.textContent = `You: ${humanScore} PC: ${computerScore}`;
    list.appendChild(p);
    declareWinner();


}
  
let choice = container.addEventListener('click', (e) => {
        let target = e.target;
        // let humanChoice ="";

        switch(target.id) {
            case 'rock':
                choice ="rock";
                break;
            case 'paper':
                choice ="paper";
                break;
            case 'scissors':
                choice = "scissors"
                break;
        }
        return playRound(choice);
    }
    
)
    
function startNewGame (input){
    if (input == "yes") {
        alert("Great Choice! The scores have been reset. Just go ahead and play!")
        clearPage();
        humanScore = 0;
        computerScore = 0;
        
    
    } else {
        alert("Ok, see you next time!")
    }
} 


function checkUl (){
    let ul = document.getElementById('text');
    if (!ul ) {
        document.createElement('ul')
    list.id = 'text';
    score.appendChild(list)
    } else {}
}    

 function clearPage(){
    let scoreDiv = document.getElementById('text');
    while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild)
    }
    checkUl();
  
}

function declareWinner (){
    if (humanScore === 5) {
        const p = document.createElement('p');
        p.textContent ="CONGRATS! You won the game!";
        p.id = "text";
        list.appendChild(p);
        setTimeout(() => {
            let input = prompt("Want to start a new game?");
            startNewGame(input);
        }, 2000); 
    } else if (computerScore === 5) {
        const p = document.createElement('p');
        p.textContent ="GAME OVER! The computer won.";
        p.id = "text";
        let input = prompt("Want to start a new game?");
        list.appendChild(p);
        startNewGame(input);
}
}
}

// let abc = getHumanChoice();
// console.log(() => getHumanChoice);
playGame();
