const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.offscreen-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  mobileNav.classList.toggle('open');
  accessible();
});
