let record = JSON.parse(localStorage.getItem('record')) || {
    win: 0,
    lose: 0,
    tie: 0
}

updateScore();


function pickComputerMove() {
    const randomNumber = Math.random();
    
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors'
    }

    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
        result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win.';
        }
    } else if  (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You win.') {
        record.win += 1;
    } else if (result === 'You lose.') {
        record.lose += 1;
    } else if (result === 'Tie.') {
        record.tie += 1;
    }
    
    localStorage.setItem('record', JSON.stringify(record));

    updateScore();

    document.querySelector('.js-result').innerHTML = result

    document.querySelector('.js-move').innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class="icon"> Computer 
    <img src="images/${computerMove}-emoji.png" class="icon">`
}

function updateScore() {
    document.querySelector('.js-score')
.innerHTML = `Wins: ${record.win}, Losses: ${record.lose}, Ties: ${record.tie}`;
}

function reset() {
    record.win = 0;
    record.lose = 0;
    record.tie = 0;
    localStorage.removeItem('record');
    updateScore()
}