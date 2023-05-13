
// let list = ["rock", "paper", "scissors" ]

// function getComputerChoice() {
//     return (list[Math.floor(Math.random() * list.length)])
// }
// const computerSelection = getComputerChoice();

// const playerSelection = prompt("Pick Rock, Paper or Scissors").toLowerCase();
// console.log(playRound(playerSelection, computerSelection))

let score = [0, 0]

function playRound(player, computer) {
    let message = `You win! ${player} beats ${computer}`
    if (player === "rock" && computer === "scissors" 
    || player === "scissors" && computer === "paper"
    || player === "paper" && computer === "rock"){
        score[0] += 1
        console.log(message)
    } else if (player === computer){
        score = score
        console.log("A Tie")
    } else {
        score[1] += 1
        console.log(`You Lose! ${computer} beats ${player}`)
    }
}

function game() {
    for (let i = 1; i <=5; i++) {
        let list = ["rock", "paper", "scissors" ]

        function getComputerChoice() {
            return (list[Math.floor(Math.random() * list.length)])
        }
        const computerSelection = getComputerChoice();

        const playerSelection = prompt("Pick Rock, Paper or Scissors").toLowerCase();
        console.log(playRound(playerSelection, computerSelection))
    }
}

// function record() {
//     if (player === "rock" && computer === "scissors" 
//     || player === "scissors" && computer === "paper"
//     || player === "paper" && computer === "rock") {
//         score[0] += 1
//     } else if (player === computer){
//         score = score
//     } else {
//         score[1] += 1
//     }
// }

game()
console.log(score)

if (score[0] > score[1]) {
    console.log( "Player Defeats Computer")
} else if (score[0] === score[1]) {
    console.log("A Draw Game")
} else {
    console.log("Computer Defeats Player")
}



