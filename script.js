let choices = document.querySelector('.choices');
let computerChoiceDisplay = document.querySelector('#computer-choice')
let roundResultDisplay = document.querySelector('#round-result');
let computerScoreDisplay = document.querySelector('#computer-score');
let playerScoreDisplay = document.querySelector('#player-score');
let playerScore = 0;
let computerScore = 0;

choices.addEventListener('click', (event) => {
    let playerChoice = event.target;
    let computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    
    let roundResult = playRound(playerChoice.id, computerChoice);
    roundResultDisplay.textContent = roundResult;

    if (roundResult === 'win') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if(roundResult === 'lose') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = (randomNumber === 0) ? 'rock' :
    (randomNumber === 1) ? 'paper' : 'scissors';

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let roundResult;
    switch(computerChoice) {
        case 'rock' :
            roundResult = (humanChoice === 'rock') ? 'tie' :
            (humanChoice === 'paper') ? 'win' :
            (humanChoice === 'scissors') ? 'lose' :
            'did not choose in';
            break;
        
        case 'paper' :
            roundResult = (humanChoice === 'rock') ? 'lose' :
            (humanChoice === 'paper') ? 'tie' :
            (humanChoice === 'scissors') ? 'win' :
            'did not choose in' ;
            break;
        
        case 'scissors' :
            roundResult = (humanChoice === 'rock') ? 'win' :
            (humanChoice === 'paper') ? 'lose' :
            (humanChoice === 'scissors') ? 'tie' :
            'did not choose in' ;
            break;
        
        default : roundResult = 'computer choice error';
    }

    return roundResult;
}