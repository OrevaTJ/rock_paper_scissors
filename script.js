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

//Check for first 5. Game over
function gameOver() {
    return playerScore === 5 || computerScore === 5
}


// Get computer choice and call playRound with player selection, 
// update score message and selected emoji
function game(playerSelection) {
    if (gameOver()) {
        endGameOpen()
        return
    }
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
    if (gameOver()) {
        endGameOpen()
        endGameMessage()
        return
    }
}


// Selectors and Add EventListeners to R/P/S buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScoreChange = document.getElementById('playerScore');
const computerScoreChange = document.getElementById('computerScore');
const setMessage = document.getElementById('setMessage');
const scoreMessage = document.getElementById('scoreMessage');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const gameEndMessage = document.getElementById('endgame-message');
const restartButton = document.getElementById('restart-btn');
const endgame = document.getElementById('endgame')
const face = document.getElementById('face');
const handShake = document.getElementById('hand-shake')

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
restartButton.addEventListener('click', restartGame)


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

function endGameOpen() {
    endgame.style.display = 'block'
}

function endGameClose() {
  endgame.style.display = 'none'
}

function endGameMessage() {
  if (playerScore > computerScore) {
    (gameEndMessage.textContent = 'You Won!')
    handShake.style.display = 'block'
  } else {
    (gameEndMessage.textContent = 'You Lost!')
    face.style.display = 'block'
  }
  return
}

function restartGame() {
    endGameClose();
    handShake.style.display = 'none'
    face.style.display = 'none'
    playerScore = 0;
    computerScore = 0;
    setWinner = '';
    playerChoice = '';
    computerChoice = '';
    setMessage.textContent = 'Take your Pick';
    scoreMessage.textContent = 'First to score 5 wins the game';
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    playerScoreChange.textContent = 'Player: 0'
    computerScoreChange.textContent = 'Computer: 0'
}