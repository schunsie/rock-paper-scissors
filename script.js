const buttons = document.querySelector('.player-options');

buttons.addEventListener('click', (e) => {
    let target = e.target;
    let choice = target.classList[0];
    target.classList.toggle('active')


    switch (choice) {
        case 'rock':
            console.log('Player picked rock');
            break;
        case 'paper':
            console.log('Player picked paper');
            break;
        case 'scissors':
            console.log('Player picked scissors');
            break;
    }
})