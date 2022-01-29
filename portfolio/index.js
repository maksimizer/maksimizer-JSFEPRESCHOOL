const burger = document.querySelector('.burger');
function toggleMenu() {
  burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);