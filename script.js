const buttons = document.querySelector('.player-options');
let playerScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (e) => {
    let target = e.target;
    let playerChoice = target.classList[0];
    target.classList.toggle('active')
    setTimeout(() => {
        target.classList.toggle('active');
    }, 1000);


    if (validateChoice(playerChoice)) {
        playRound(playerChoice);
    }
});

function validateChoice(choice) {
    if (choice == 'rock'
        || choice == 'paper'
        || choice == 'scissors'
    ) return true;
    return false;
}

function playRound(playerChoice) {
    const result = document.querySelector('#result');
    result.textContent = '';
    const computerChoice = getComputerChoice();

    switch (determineWinner(playerChoice, computerChoice)) {
        case 'player':
            result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
            break;
        case 'computer':
            result.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;
            break;
        case 'tie':
            result.textContent = `It's a tie!`;
            break;
    }

    const score = document.querySelector('#score');
    score.textContent = `${playerScore} - ${computerScore}`;

}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    const computerChoice = choices[index];
    
    const choiceIcon = document.querySelector(`.computer-options .${computerChoice}`);
    choiceIcon.classList.toggle('activeRed')
    setTimeout(() => {
        choiceIcon.classList.toggle('activeRed');
    }, 1000);
    
    return computerChoice;
    
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) return 'tie';
    
    switch (playerChoice) {
        case 'rock':
            return computerChoice == 'scissors' ? 'player' : 'computer';
        case 'paper':
            return computerChoice == 'rock' ? 'player' : 'computer';
        case 'scissors':
            return computerChoice == 'paper' ? 'player' : 'computer';
    }
}