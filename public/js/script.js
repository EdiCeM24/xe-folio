const dropMenuEl = document.getElementById("dropMenu");
const asideEl = document.getElementById("aside");
const closeEl = document.getElementById("close");
const dropBtnEl = document.querySelector(".dropBtn");
const contentsEl = document.querySelector(".contents");




dropMenuEl.addEventListener('click', () => {
  asideEl.style.display = "block";
});

closeEl.addEventListener('click', () => {
  closeMenu();
});

function closeMenu() {
  asideEl.style.display = "none";
}

//Login Btn on Navbar
dropBtnEl.addEventListener("click", () => {
  contentsEl.style.display = "block";
});

function contentsClose() {

}


// About Page
const aboutModalEl = document.getElementById("modalAbout");
const aboutContainerEl = document.getElementById("about-container");

aboutModalEl.addEventListener("click", (e) => {
  e.preventDefault();
  aboutContainerEl.classList.add("show"); 
});



//Bootstap modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


