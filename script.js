
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    return choiceNum === 0 ? "rock" : choiceNum === 1 ? "paper" : "scissors"
}

function getHumanChoice() {
    let choice = prompt("What do you want to play (rock, scissors, paper)?");
    return choice
}

function playGame(numGames){
    console.log("Welcome to the game!")

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice === "rock" && humanChoice === "paper") {
            return "You win! Paper beats rock"
            humanScore += 1;
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

    for (let i = 1; i <= numGames; i++){
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i}: ${roundResult}`);
        console.log(`Score: Computer = ${computerScore}, Human = ${humanScore}`);
    }

    if (computerScore > humanScore){
        console.log("Looser. Computer beated you.");
    } else if (computerScore < humanScore){
        console.log("Winner. You beat the computer.");
    } else {
        console.log("It's a tie between computer and you.")
    }
    console.log("End of game");
}

playGame(5);