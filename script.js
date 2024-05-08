playGame();


function playGame() {
    let roundResult;
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        roundResult = playRound(humanChoice, computerChoice);
        switch(roundResult) {
            case 'win' : humanScore++;
                alert(`You win the round! You: ${humanScore}  Computer: ${computerScore}`);
                break;

            case 'lose' : computerScore++;
                alert(`You lose the round. You: ${humanScore}  Computer: ${computerScore}`);
                break;

            case 'tie' : 
                alert(`Round tied! You: ${humanScore}  Computer: ${computerScore}`);
                break;

            case 'invalid human choice' : 
                alert('Invalid Choice. Pick one of rock, paper or scissors.');
                break;
            
            default :
                alert('There was an error in the game.');
        }
    }
    if(humanScore > computerScore) {
        alert(`You win the game! You: ${humanScore}  Computer: ${computerScore} \nRefresh to play again.`)
    } else if(humanScore < computerScore) {
        alert(`Computer won the game. You: ${humanScore}  Computer: ${computerScore} \nRefresh to play again.`)
    } else {
        alert(`The game was tied. You: ${humanScore}  Computer: ${computerScore} \nRefresh to play again.`)
    }
}

function getHumanChoice() {
    let input = prompt('Pick one: \n r : Rock \n p : Paper \n s : Scissors');
    input = input.charAt(0).toLowerCase();
    let humanChoice = (input === 'r') ? 'rock' :
    (input === 'p') ? 'paper' :
    (input === 's') ? 'scissors' :
    'invalid human choice';

    return humanChoice;
}

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