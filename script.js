let computerChoice = "";
let humanChoice = "";


function getComputerChoice() {

    let randomNum = Math.random();
  
    if (randomNum > 0 && randomNum < .33) {
        computerChoice = "Rock";
    } else if (randomNum > .33 && randomNum < .66) {
        computerChoice = "Paper";
    } else computerChoice = "Scissors";

    return computerChoice;
}

function getHumanChoice() {

    humanChoice = prompt("Enter your choice: Rock, Paper or Scissors?", "Rock/Paper/Scissors");
    return humanChoice;
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;
    let human = null;
    let computer = null;
    
    function displayScore () {

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

    }

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        if ( humanChoice==="rock" && computerChoice === "scissors") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++
           displayScore();
        } else if ( humanChoice==="rock" && computerChoice === "paper") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++
            displayScore();
        } else if ( humanChoice==="paper" && computerChoice === "scissors") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++
            displayScore();
        } else if ( humanChoice==="paper" && computerChoice === "rock") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++
            displayScore();
        } else if ( humanChoice==="scissors" && computerChoice === "rock") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++
            displayScore();
        } else if ( humanChoice==="scissors" && computerChoice === "paper") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++
            displayScore();
        } else { console.log(`Draw!, Both of you chose ${computerChoice}.`); displayScore()};

    }   

  
    for (let i=1; i<=7; i++) {

        console.log(`Game Number: ${i}`);
        human = getHumanChoice();
        computer = getComputerChoice();
        playRound(human, computer);
       
        if (humanScore===3) {
            console.log("You win!");
            break;
        } else if (computerScore===3) {
            console.log("You lose :( The computer wins!");
            break;
        } else if (i===7 && humanScore > computerScore) {
            console.log("You win!");
            
        } else if (i===7 && humanScore < computerScore) {
            console.log("You lose :( The computer wins!");
            
        } else if (i===7 && humanScore === computerScore) {
            console.log("It's a draw!");
            
        }
                
    }
       
}


playGame();