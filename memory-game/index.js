//flipping cards
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard; 
let secondCard;
let lockBoard = false;
let moveCount = 0;
let winMovesCount = 0;
const gameContainer = document.querySelector('.game-container');
const win = document.querySelector('.win'); 
let lastGame = Number(localStorage.getItem('last game'))
let game = 1 + lastGame;
resetScore();
function resetScore() {
    if (game > 11) {
        game = 1;
        localStorage.clear();
    };
}


cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true; 
        firstCard = this;
        return;
    };
    secondCard = this;
    lockBoard = true;
    checkForMatch();
};

// checking for matches
function checkForMatch() {
    firstCard.dataset.card === secondCard.dataset.card ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    moveCount ++;
    winMovesCount ++;
};

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
    moveCount ++;
}; 

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
};

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.ceil(Math.random() * 12);
        card.style.order = randomPos;
    });
};

shuffle();

//check for win
function checkForWin() {
    if (winMovesCount === 6) {
        setTimeout(() => {
            gameContainer.classList.add('hidden');
            win.classList.remove('hidden');
            document.querySelector('.congrat').textContent = `Congratulations! You made it in ${moveCount} moves.`;
        }, 1000);
    };
};

cards.forEach(card => card.addEventListener('click', checkForWin));

//new game
function startNewGame() {
    document.location.reload();
}

document.querySelector('.new-game').addEventListener('click', startNewGame);

//last 10 games score in local storage



window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
    if (gameContainer.classList.contains('hidden')) {
        localStorage.setItem(`Game ${game}`, `Game ${game}: ${moveCount} moves.`); 
        localStorage.setItem('last game', `${game}`);       
    };
    
};



const gameScores = document.querySelectorAll('.game-number');

function getLocalStorage() {
    gameScores.forEach((element, i) => {
        if (localStorage.getItem(`Game ${i + 1}`) !== null) {
            element.textContent = localStorage.getItem(`Game ${i+1}`)};
    });
};

