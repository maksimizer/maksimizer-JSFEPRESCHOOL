const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('nav-open');
}


nav.addEventListener('click', closeMenu);
function closeMenu (event) {
    if (event.target.classList.contains('nav-link')) {
        burger.classList.toggle('open');
        nav.classList.toggle('nav-open');
    }
}


