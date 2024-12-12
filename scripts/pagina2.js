const menuButton = document.querySelector("header > nav > button:nth-of-type(1)");
const menuTextOpen = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(1)");
const menuTextClosed = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(2)");



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


