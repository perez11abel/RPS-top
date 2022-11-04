const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "Tie";
    } 
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
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
    else if (result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const getPlayerChoice = () => {
    let validatedInput = false;
    while(validatedInput === false) {
        const choice = prompt('Rock Paper Scissors');
        if (choice === null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

const game = () => {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('welcome');
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log('---------');
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            scorePlayer++;
        } 
        else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            scoreComputer++;
        }
    }
    console.log('Game Over');
    if (scorePlayer > scoreComputer) {
        console.log("YOU WIN!!!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("YOU LOSE!");
    }
    else {
        console.log('TIE!');
    }
}

game();


