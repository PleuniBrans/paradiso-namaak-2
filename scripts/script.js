const menuButton = document.querySelector('button[data-menu]');
const navOverlay = document.querySelector('.nav-overlay');
const closeButton = document.querySelector('.nav-close');


menuButton.addEventListener('click', () => {
  navOverlay.classList.add('open');
});


closeButton.addEventListener('click', () => {
  navOverlay.classList.remove('open');
});
