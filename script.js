let computerChoice = "";
let humanChoice = "";


function getComputerChoice() {

    let randomNum = Math.random();
  
    if (randomNum > 0 && randomNum < .3) {
        computerChoice = "Rock";
    } else if (randomNum > .3 && randomNum < .6) {
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

    function playRound(human, computer) {

        let humanLowercase = human.toLowerCase();
        let computerLowercase = computer.toLowerCase();
        
        if ( humanLowercase==="rock" && computerLowercase === "scissors") {
            console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
            humanScore++
           displayScore();
        } else if ( humanLowercase==="rock" && computerLowercase === "paper") {
            console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
            computerScore++
            displayScore();
        } else if ( humanLowercase==="paper" && computerLowercase === "scissors") {
            console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
            computerScore++
            displayScore();
        } else if ( humanLowercase==="paper" && computerLowercase === "rock") {
            console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
            humanScore++
            displayScore();
        } else if ( humanLowercase==="scissors" && computerLowercase === "rock") {
            console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
            computerScore++
            displayScore();
        } else if ( humanLowercase==="scissors" && computerLowercase === "paper") {
            console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
            humanScore++
            displayScore();
        } else { console.log(`Draw!, Both of you chose ${computerLowercase}.`); displayScore()};

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