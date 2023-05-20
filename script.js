// Default player/computer score and winner of each set
let playerScore = 0
let computerScore = 0
let setWinner = ''
let playerChoice = ''
let computerChoice = ''


// Play round compare player choice with computer choice
function playRound(player, computer) {
    if (player === "✊" && computer === "✌" 
    || player === "✌" && computer === "✋"
    || player === "✋" && computer === "✊"){
        setWinner = 'player'
        playerScore += 1
        console.log(`You Won! ${player} beats ${computer}`)
    } else if (player === computer){
        setWinner = 'tie'
        console.log("A Tie")
    } else {
        setWinner = 'computer'
        computerScore += 1
        console.log(`You Lose! ${computer} beats ${player}`)
    }

    updateScore()
}

// Get computer choice and call playRound with player selection, 
// update score message and selected emoji
function game(playerSelection) {
    function getComputerChoice() {
        let list = ["✊", "✋", "✌" ]
        return (list[Math.floor(Math.random() * list.length)])
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateSign(playerSelection, computerSelection);
    if (playerSelection === '✊') {
        playerChoice = 'Rock'
      } else if (playerSelection === '✋') {
        playerChoice = 'Paper'
      } else {
        playerChoice = 'Scissors'
      }
    if (computerSelection === '✊') {
        computerChoice = 'Rock'
      } else if (computerSelection === '✋') {
        computerChoice = 'Paper'
      } else {
        computerChoice = 'Scissors'
      }
    updateMessage(playerChoice, computerChoice);
}

// Selectors and Add EventListeners to R/P/S buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScoreChange = document.getElementById('playerScore')
const computerScoreChange = document.getElementById('computerScore')
const setMessage = document.getElementById('setMessage')
const scoreMessage = document.getElementById('scoreMessage')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')

rock.addEventListener('click', function(e) {
    const r = e.target.textContent 
    game(r);
})
paper.addEventListener('click', function(e) {
    const p = e.target.textContent 
    game(p)
})
scissors.addEventListener('click', function(e) {
    const s = e.target.textContent 
    game(s)
})


// Function to Updates scores and score info
function updateScore() {
    if (setWinner === 'tie') {
      setMessage.textContent = "It's a Tie!"
    } else if (setWinner === 'player') {
      setMessage.textContent = 'You won!'
    } else if (setWinner === 'computer') {
      setMessage.textContent = 'You lost!'
    }
  
    playerScoreChange.textContent = `Player: ${playerScore}`
    computerScoreChange.textContent = `Computer: ${computerScore}`
  }

// Function to Update score message
function updateMessage(playerSelection, computerSelection) {
    if (setWinner === 'tie') {
        scoreMessage.textContent = `${playerSelection} Tie's ${computerSelection}`
      } else if (setWinner === 'player') {
        scoreMessage.textContent = `${playerSelection} Beats ${computerSelection}`
      } else {
        scoreMessage.textContent = `${computerSelection} Beats ${playerSelection}`
      }
  }

// Function to change signs to selected emojis
function updateSign(playerSelection, computerSelection) {
    switch (playerSelection) {
        case '✊':
            playerSign.textContent = '✊'
            break;
        case '✋':
            playerSign.textContent = '✋'
            break;
        case '✌':
            playerSign.textContent = '✌'
            break;
    }

    switch (computerSelection) {
        case '✊':
            computerSign.textContent = '✊'
            break;
        case '✋':
            computerSign.textContent = '✋'
            break;
        case '✌':
            computerSign.textContent = '✌'
            break;
    }
}