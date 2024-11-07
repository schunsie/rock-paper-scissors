console.log("Hello, world!");

// INIT game variables
let humanScore = 0;
let computerScore = 0;

// SET computer choice to random choice of rock, paper or scissor
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// GET choice between rock, paper or scissors from human
function getHumanChoice() {
    while (true) {
        try {
            let choice = prompt('Rock, paper or scissors?').toLowerCase()
            switch (choice) {
                case 'rock':
                    return 'Rock';
                case 'paper':
                    return 'Paper';
                case 'scissors':
                    return 'Scissors';
                default:
                    console.error(`"${choice}" is not a valid choice.`);
            }
        } catch (e) {
            console.error('Choice cannot remain empty');
        }
    }
}

// Determine winner
function playRound (humanChoice, computerChoice) {
    let humanWin;
    if (humanChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            humanWin = false;
        } else if (computerChoice == 'Scissors') {
            humanWin = true;
        } 
    } else if (humanChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            humanWin = false;
        } else if (computerChoice == 'Rock') {
            humanWin = true;
        }
    } else if (humanChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            humanWin = false;
        } else if (computerChoice == 'Rock') {
            humanWin = true;
        }
    }
    displayRoundWinner(humanWin, humanChoice, computerChoice)
}

// Display and track winner
function displayRoundWinner(humanWin='Tie', humanChoice, computerChoice) {
    if (humanWin == 'Tie') {
        console.log('It\'s a tie! ');
    } else if (humanWin) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);