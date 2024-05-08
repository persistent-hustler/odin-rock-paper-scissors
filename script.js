let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = (randomNumber === 0) ? 'rock' :
    (randomNumber === 1) ? 'paper' : 'scissors';

    return computerChoice;
}

function getHumanChoice() {
    let input = prompt('Pick one: \n r : Rock \n p : Paper \n s : Scissors');
    input = input.charAt(0).toLowerCase();
    let humanChoice = (input === 'r') ? 'rock' :
    (input === 'p') ? 'paper' :
    (input === 's') ? 'scissors' :
    'invalid choice';

    return humanChoice;
}