//flipping cards
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard; 
let secondCard;
let lockBoard = false;
let moveCount = 0;
let winMovesCount =0;

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
            document.querySelector('.game-container').textContent = `Вы справились за ${moveCount} ходов! Примите мои поздравлния! Если хотите начать новую игру, нажмите клавишу F5.`;
        }, 1000);
    };
};

cards.forEach(card => card.addEventListener('click', checkForWin));




