//activate lang button
const langBtns = document.querySelectorAll('.lang-button');

langBtns.forEach(element => {
    element.addEventListener('click', activateBtn);
});

function activateBtn(event) {
    langBtns.forEach(element => {
        element.classList.remove('active');
     });
     event.target.classList.add('active');
};

//randomise img
function randomiseImg() {
    document.querySelector('.main-img').style.backgroundImage = `url(./assets/img/${Math.ceil(Math.random() * 10)}.png)`;
}

randomiseImg();

