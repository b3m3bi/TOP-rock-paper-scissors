
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    return choiceNum === 0 ? "rock" : choiceNum === 1 ? "paper" : "scissors"
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

let humanBtns = document.querySelector(".humanBtns");
let resultsContainer = document.querySelector(".resultsContainer");
let humanScoreConatiner = document.querySelector("#humanScore");
let computerScoreContainer = document.querySelector("#computerScore");
let endOfGameMessage = document.querySelector(".endOfGameMessage");
let restartBtn = document.querySelector("#restartGame");

function playRound(humanChoice, computerChoice){
    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1;
        return "You win! Paper beats rock"
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1;
        return "You win! Scissors beats paper";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1;
        return "You win! Rock beats Scissors";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1;
        return "You lose! Rock beats scissors";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;
        return "You lose! Paper beats rock";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1;
        return "You lose! Scissors beats paper";
    } else {
        return "Tie!"
    }
}

function playGame(humanChoice, computerChoice){
    let roundResult = playRound(humanChoice, computerChoice);

    let divResult = document.createElement("p");
    divResult.textContent = `Round ${round}: ${roundResult}`;
    round += 1;
    resultsContainer.appendChild(divResult);

    computerScoreContainer.textContent = computerScore;
    humanScoreConatiner.textContent = humanScore;
       
    if (computerScore === 5 || humanScore === 5){
        let message = computerScore === 5 ? "Looser. Computer beated you." : "Winner. You beat the computer.";
        endOfGameMessage.textContent = message;
        let = divResult = document.createElement("p");
        divResult.textContent = "End of Game";

        for (const btn of humanBtns.children) {
            btn.setAttribute("disabled", "");
        }     
    }
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    round = 1;

    resultsContainer.textContent = "";
    endOfGameMessage.textContent = "";
    computerScoreContainer.textContent = computerScore;
    humanScoreConatiner.textContent = humanScore;

    for (const btn of humanBtns.children) {
            btn.removeAttribute("disabled");
    }
}

humanBtns.addEventListener("click", (event) => playGame(event.target.id, getComputerChoice()));
restartBtn.addEventListener("click", () => restartGame());