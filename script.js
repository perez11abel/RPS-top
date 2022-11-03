const options = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "Tie";
    } 
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

const playRound = (playerSelection, computerSelection) => {
    const result = checkWinner(playerSelection, computerSelection)
    if (result === 'Tie'){
        return `It's a tie!`;
    }
    else if (result === "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    } 
    else{
        return `You lost! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))




// write function that plays one round
// function recieves 2 parameters: (playerSelection, computerSelection)
//return string that sais either 'you lose' or 'you win'.