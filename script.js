let computerChoice = null;
let humanChoice = null;
let human = null;
let computer = null;

let humanScore = 0;
let computerScore = 0;

let i = 1;

let hScore = document.querySelector(".humanScore");
let cScore = document.querySelector(".computerScore");
let displayWinner = document.querySelector(".display");
let displayHuman = document.querySelector(".col1");
let displayComputer = document.querySelector(".col3");

let rockDiv = document.createElement("div");
let rockImage = document.createElement("img");
rockImage.src = "./images/rock.webp";
rockImage.alt = "rock";
rockDiv.appendChild(rockImage);

let paperDiv = document.createElement("div");
let paperImage = document.createElement("img");
paperImage.src = "./images/paper.webp";
paperImage.alt = "paper";
paperDiv.appendChild(paperImage);

let scissorsDiv = document.createElement("div");
let scissorsImage = document.createElement("img");
scissorsImage.src = "./images/scissors.webp";
scissorsImage.alt = "scissors";
scissorsDiv.appendChild(scissorsImage);


let choices = document.querySelector(".choices");
choices.addEventListener("click", playGame);


function getComputerChoice() {

    let randomNum = Math.random();
  
    if (randomNum > 0 && randomNum < .33) {
        computerChoice = "Rock";
    } else if (randomNum > .33 && randomNum < .66) {
        computerChoice = "Paper";
    } else computerChoice = "Scissors";

    return computerChoice;
}

function getHumanChoice(event) {
    
    switch (event.target.alt) {
        case "rock":
            console.log("You chose rock.");
            return "rock";
            case "paper":
            console.log("You chose paper.");
            return "paper";
        case "scissors":
            console.log("You chose scissors.");
            return "scissors";
    }
}
    function displayScore (display) {

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        hScore.innerText = humanScore;
        cScore.innerText = computerScore;
        displayWinner.innerText = display;


    }

    function deleteLastChild() {
        if (displayHuman.lastChild) {
            displayHuman.removeChild(displayHuman.lastChild);
         }
    }

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        if ( humanChoice==="rock" && computerChoice === "scissors") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            display = `You win!, ${humanChoice} beats ${computerChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(rockDiv);
            displayScore(display);
        } else if ( humanChoice==="rock" && computerChoice === "paper") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            display = `You lose!, ${computerChoice} beats ${humanChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(rockDiv);
            displayScore(display);
        } else if ( humanChoice==="paper" && computerChoice === "scissors") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            display = `You lose!, ${computerChoice} beats ${humanChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(paperDiv);
            displayScore(display);
        } else if ( humanChoice==="paper" && computerChoice === "rock") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            display = `You win!, ${humanChoice} beats ${computerChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(paperDiv);
            displayScore(display);
        } else if ( humanChoice==="scissors" && computerChoice === "rock") {
            console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            display = `You lose!, ${computerChoice} beats ${humanChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(scissorsDiv);
            displayScore(display);
        } else if ( humanChoice==="scissors" && computerChoice === "paper") {
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            display = `You win!, ${humanChoice} beats ${computerChoice}.`;
            deleteLastChild();
            displayHuman.appendChild(scissorsDiv);
            displayScore(display);
        } else { 
            console.log(`Draw!, Both of you chose ${computerChoice}.`); 
            display = `Draw!, Both of you chose ${computerChoice}.`;
            if (computerChoice === "rock") {
                deleteLastChild();
                displayHuman.appendChild(rockDiv);
                displayScore(display);

            } else if (computerChoice === "paper") {
                deleteLastChild();
                displayHuman.appendChild(paperDiv);
                displayScore(display);

            } else if (computerChoice === "scissors") {
                deleteLastChild();
                displayHuman.appendChild(scissorsDiv);
                displayScore(display);

            } 
          
        };

   

       
        if (humanScore===3) {
            console.log("You win!");
            gameReset()
        } else if (computerScore===3) {
            console.log("You lose :( The computer wins!");
            gameReset()
        } else if (i===7 && humanScore > computerScore) {
            console.log("You win!");
            gameReset()
            
        } else if (i===7 && humanScore < computerScore) {
            console.log("You lose :( The computer wins!");
            gameReset()
            
        } else if (i===7 && humanScore === computerScore) {
            console.log("It's a draw!");
            gameReset()
            
        }
                      

    }   

    function gameReset() {
        humanScore = 0;
        computerScore = 0;
        i=1;

    }

        function playGame(event) {
            console.log(`Game Number: ${i}`);

            i=i+1;
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice(event);
            playRound(humanChoice, computerChoice);
            
            
        }