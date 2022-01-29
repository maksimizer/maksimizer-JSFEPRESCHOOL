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
}


//кэширование картинок



