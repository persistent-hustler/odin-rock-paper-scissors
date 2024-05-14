

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
            'invalid human choice';
            break;
        
        case 'paper' :
            roundResult = (humanChoice === 'rock') ? 'lose' :
            (humanChoice === 'paper') ? 'tie' :
            (humanChoice === 'scissors') ? 'win' :
            'invalid human choice' ;
            break;
        
        case 'scissors' :
            roundResult = (humanChoice === 'rock') ? 'win' :
            (humanChoice === 'paper') ? 'lose' :
            (humanChoice === 'scissors') ? 'tie' :
            'invalid human choice' ;
            break;
        
        default : roundResult = 'computer choice error';
    }

    return roundResult;
}