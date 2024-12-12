const menuButton = document.querySelector("header > nav > button:nth-of-type(1)");
const menuTextOpen = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(1)");
const menuTextClosed = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(2)");



const fotoSlider = document.querySelector("section:nth-of-type(1) ul");


fotoSlider.scrollBy(window.innerWidth/2,0)

// const navOverlay = document.querySelector(".nav-overlay");
const hetMenu = document.querySelector("header nav ul");

menuTextOpen.classList.toggle("active");

menuButton.addEventListener("click", () => {
  // Toggle de "toonMenu" class op de nav
  hetMenu.classList.toggle("toonMenu");


menuTextOpen.classList.toggle("active");
menuTextClosed.classList.toggle("active");


  // Toggle de "open" class op de hamburgerbutton
  menuButton.classList.toggle("open");
});



/** Drag and drop **/
const slider = document.querySelector('section:nth-of-type(1) ul');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  let rect = slider.getBoundingClientRect();
  isDown = true;
  slider.classList.add('active');
  // Get initial mouse position
  startX = e.pageX - rect.left;
  // Get initial scroll position in pixels from left
  scrollLeft = slider.scrollLeft;
  console.log(startX, scrollLeft);
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.dataset.dragging = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.dataset.dragging = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  let rect = slider.getBoundingClientRect();
  e.preventDefault();
  slider.dataset.dragging = true;
  // Get new mouse position
  const x = e.pageX - rect.left;
  // Get distance mouse has moved (new mouse position minus initial mouse position)
  const walk = (x - startX);
  // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
  slider.scrollLeft = scrollLeft - walk;
  // console.log(x, walk, slider.scrollLeft);
});