//flipping cards
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard; 
let secondCard;
let lockBoard = false;

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
};

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
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




