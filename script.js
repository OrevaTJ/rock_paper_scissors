
let list = ["rock", "paper", "scissors" ]

function getComputerChoice() {
    return (list[Math.floor(Math.random() * list.length)])
}

function playRound(player, computer) {
    let message = `You win! ${player} beats ${computer}`
    if (player === "rock" && computer === "scissors"){
        console.log(message)
    } else if (player === "scissors" && computer === "paper"){
        console.log(message)
    } else if (player === "paper" && computer === "rock"){
        console.log(message)
    } else if (player === computer){
        console.log("A Tie")
    } else {
        console.log(`You Lose! ${computer} beats ${player}`)
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))