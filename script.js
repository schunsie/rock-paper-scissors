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
                    console.error(`"${choice}" is not a valid choice.`)
            }
        } catch (e) {
            console.error('Choice cannot remain empty')
        }
    }
}



