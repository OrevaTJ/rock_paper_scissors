let scores = document.querySelector('#scores')
let score = Array.from(document.querySelectorAll('.score'));
let playerScore = Number(score[0].textContent)
console.log(playerScore + 1)
let compScore = Number(score[1].textContent)
console.log(compScore + 3)


// Play round compare player choice with computer choice
function playRound(player, computer) {
    let message = `You win! ${player} beats ${computer}`
    if (player === "rock" && computer === "scissors" 
    || player === "scissors" && computer === "paper"
    || player === "paper" && computer === "rock"){
        playerScore += 1
        console.log(message)
    } else if (player === computer){
        score = score
        console.log("A Tie")
    } else {
        compScore += 1
        console.log(`You Lose! ${computer} beats ${player}`)
    }
}

// Get computer choice and call playRound with player selection
function game(e) {
    function getComputerChoice() {
        let list = ["rock", "paper", "scissors" ]
        return (list[Math.floor(Math.random() * list.length)])
    }
    const computerSelection = getComputerChoice();
    console.log(playRound(e.target.textContent.toLowerCase(), computerSelection))
}

// Add EventListeners to R/P/S buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', function(e) {
    game(e)
})
paper.addEventListener('click', function(e) {
    game(e)
})
scissors.addEventListener('click', function(e) {
    game(e)
})
