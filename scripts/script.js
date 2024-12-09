const menuButton = document.querySelector("header > nav > button:nth-of-type(1)");
// const navOverlay = document.querySelector(".nav-overlay");
const hetMenu = document.querySelector("header nav ul");


menuButton.addEventListener("click", () => {
  // Toggle de "toonMenu" class op de nav
  hetMenu.classList.toggle("toonMenu");

  // Toggle de "open" class op de hamburgerbutton
  menuButton.classList.toggle("open");
});