//selecteer hamburgerknop in menu
const menuButton = document.querySelector("header > nav > button:nth-of-type(1)");
//selecteer label menu geopend
const menuTextOpen = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(1)");
//selecteer label menu gesloten 
const menuTextClosed = document.querySelector("header > nav > button:nth-of-type(1) > label:nth-of-type(2)");
//selecteer foto-slider eerste sectie
const fotoSlider = document.querySelector("section:nth-of-type(1) ul");




//scroll slider automatisch  halve schermbreedte 
fotoSlider.scrollBy(window.innerWidth / 2, 0);



const hetMenu = document.querySelector("header nav ul");

//zet class op label van menuTextOpen 
menuTextOpen.classList.toggle("active");
//klik-eventlistener hamburgerknop
menuButton.addEventListener("click", () => {
//toon of verberg het menu 
hetMenu.classList.toggle("toonMenu");
//wissel tussen het openen en sluiten menu
menuTextOpen.classList.toggle("active");
menuTextClosed.classList.toggle("active");
//open-class op hamburgerknop 
menuButton.classList.toggle("open");
});



/**drag-and-drop voor de slider **/
const slider = document.querySelector('section:nth-of-type(1) ul');
let isDown = false; // muisknop ingedrukt of niet
let startX; //start muis
let scrollLeft; //start scrollen

//indrukken van de muisknop op slider
slider.addEventListener('mousedown', (e) => {
  let rect = slider.getBoundingClientRect(); //bepaal sliderpositie
  isDown = true; // activeer dragmod3
  slider.classList.add('active'); //actieve class voor styling
  startX = e.pageX - rect.left; //bereken startpositie muis
  scrollLeft = slider.scrollLeft; //bewaar huidige positie

  console.log(startX, scrollLeft); 
});


// muis weg
slider.addEventListener('mouseleave', () => {
  isDown = false; // drag-modus uit
  slider.dataset.dragging = false; //reset drag status
  slider.classList.remove('active'); //verwijder actieve class
});

// Luister naar het loslaten van de muisknop op de slider
slider.addEventListener('mouseup', () => {
  isDown = false; // Deactiveer drag-modus
  slider.dataset.dragging = false; // Reset dragging-status
  slider.classList.remove('active'); // Verwijder de actieve class
});

// muisbewegingen over de slider
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Als drag-modus niet actief is, gebeurt niks
  let rect = slider.getBoundingClientRect(); //sliderpositie
  e.preventDefault(); 
  slider.dataset.dragging = true; //dragging-status actief
  const x = e.pageX - rect.left; // Bereken nieuwe muispositie
  const walk = (x - startX); // Bereken hoeveel muis beweegt
  slider.scrollLeft = scrollLeft - walk; // Update scrollpositie
});
