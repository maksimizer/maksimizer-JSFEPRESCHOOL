//бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('nav-open');
};


nav.addEventListener('click', closeMenu);
function closeMenu (event) {
    if (event.target.classList.contains('nav-link')) {
        burger.classList.toggle('open');
        nav.classList.toggle('nav-open');
    }
};


//смена кратинок в portfolio

const portfolioButtons = document.querySelector('.portfolio-buttons')
const portfolioImages = document.querySelectorAll('.portfolio-photo')

portfolioButtons.addEventListener('click', changeImage)

function changeImage(event) {
    if (event.target.classList.contains('button-black')) {
        const dataSet = event.target.dataset.season
        portfolioImages.forEach((img, index) => {
            img.src = `./assets/img/${dataSet}/${index+1}.jpg`
        })
    }
};


//кэширование картинок

const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach(elem => {
    function preloadImages() {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${elem}/${i}.jpg`;
        }
    }
  preloadImages();
});

//подсветка черной активной кнопки
const buttonsBlack = document.querySelectorAll('.button-black');

buttonsBlack.forEach(elem => {
    elem.addEventListener('click', changeClassActive)
});

function changeClassActive(event) {
    buttonsBlack.forEach(el => {
        el.classList.remove('button-black-active')
    })
    event.target.classList.add('button-black-active');
};

//активен язык

const langSwitch = document.querySelectorAll('.lang');
langSwitch.forEach(elem => {
    elem.addEventListener('click', changeLangActive)
});

function changeLangActive(event) {
    langSwitch.forEach(el => {
        el.classList.remove ('lang-active')
    })
    event.target.classList.add('lang-active')
};