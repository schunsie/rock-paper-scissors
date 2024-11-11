const buttons = document.querySelector('.player-options');
let playerScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (e) => {
    let target = e.target;
    let choice = target.classList[0];
    target.classList.toggle('active')


    if (validateChoice(choice)) {
        playRound(choice);
    }
});

function validateChoice(choice) {
    if (choice == 'rock'
        || choice == 'paper'
        || choice == 'scissors'
    ) return true;
    return false;
}

function playRound(choice) {
    const result = document.querySelector('#result');
    result.textContent = '';
    const computerChoice = getComputerChoice();

    switch (determineWinner(choice, computerChoice)) {
        case 'player':
            
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function determineWinner(choice, computerChoice) {
}