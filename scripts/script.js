const menuButton = document.querySelector("header > nav > button:nth-of-type(1)");
// const navOverlay = document.querySelector(".nav-overlay");
const hetMenu = document.querySelector("header nav ul");


menuButton.addEventListener("click", () => {
  // Toggle de "toonMenu" class op de nav
  hetMenu.classList.toggle("toonMenu");

  // Toggle de "open" class op de hamburgerbutton
  menuButton.classList.toggle("open");
});







const carousel = document.querySelector('section ul');
let isMouseDown = false;
let startX;
let scrollLeft;

// Mouse down event to start dragging
carousel.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = 'grabbing';  // Change cursor to grabbing
});

// Mouse leave event to stop dragging
carousel.addEventListener('mouseleave', () => {
  isMouseDown = false;
  carousel.style.cursor = 'grab';  // Reset cursor to grab
});

// Mouse up event to stop dragging
carousel.addEventListener('mouseup', () => {
  isMouseDown = false;
  carousel.style.cursor = 'grab';  // Reset cursor to grab
});

// Mouse move event for dragging
carousel.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;  // Only trigger when dragging
  e.preventDefault();  // Prevent default behavior
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3;  // The multiplier controls the speed
  carousel.scrollLeft = scrollLeft - walk;  // Adjust the scroll position
});
