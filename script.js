let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNum = Math.random();
    console.log(randomNum);
   
    if (randomNum > 0 && randomNum < .3) {

        computerChoice = "Rock";
        
    } else if (randomNum > .3 && randomNum < .6) {
       
        computerChoice = "Paper";

    } else computerChoice = "Scissors";
    return computerChoice;
}

let computer = getComputerChoice();

console.log(computerChoice);

function getHumanChoice() {
    humanChoice = prompt("Enter your choice: RemotePlayback, Paper or Scissors?");
    console.log(humanChoice);

    return humanChoice;
}

let human = getHumanChoice();


function playRound(human, computer) {

    let humanLowercase = human.toLowerCase();
    let computerLowercase = computer.toLowerCase();
    
    if ( humanLowercase==="rock" && computerLowercase === "scissors") {
        console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
        
    } else if ( humanLowercase==="rock" && computerLowercase === "paper") {
        console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
        
    } else if ( humanLowercase==="paper" && computerLowercase === "scissors") {
        console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
        
    } else if ( humanLowercase==="paper" && computerLowercase === "rock") {
        console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
        
    } else if ( humanLowercase==="scissors" && computerLowercase === "rock") {
        console.log(`You lose!, ${computerLowercase} beats ${humanLowercase}`);
        
    } else if ( humanLowercase==="scissors" && computerLowercase === "paper") {
        console.log(`You win!, ${humanLowercase} beats ${computerLowercase}`);
        
    } 

}


playRound(human, computer);