const dropMenuEl = document.getElementById("dropMenu");
const asideEl = document.getElementById("aside");
const closeEl = document.getElementById("close");
const dropBtnEl = document.querySelector(".dropBtn");
const signupLoginEl = document.querySelector("#signupLogin");
const authCloseEl = document.getElementById("auth-close");

// ABOUT MODAL
const aboutModalEl = document.getElementById("modalAbout");
const aboutContainerEl = document.getElementById("about-container");

// STRENGTHS
const openModalBtnEl = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay")
const closeModalBtnEl = document.querySelector(".close-btn");




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
function openDropBtn() {
  signupLoginEl.style.display = "block";
  
  setTimeout(() => {
    signupLoginEl.classList.add('show');
  }, 10);
}

function authClose() {
  signupLoginEl.classList.remove("in-active");
  
  setTimeout(() => {
    signupLoginEl.style.display = "none";
  }, 10);
}

window.addEventListener("click", (e) => {
  if(e.target === signupLoginEl) {
    authClose();
  }
});

//Button on click
dropBtnEl.addEventListener("click", openDropBtn);
authCloseEl.addEventListener("click", authClose);

function contentsClose() {

}



//ABOUT MODAL
aboutModalEl.addEventListener("click", (e) => {
  e.preventDefault();
  aboutContainerEl.classList.add("show"); 
});

//STRENGTH MODAL
function openModal() {
  // Make it visible immediately (display: flex) so transition can start
  modalOverlay.style.display = 'flex';
  // Use a slight delay to ensure browser reisters the 'display' change
  //before adding the 'active' class to trigger the transition
  setTimeout(() => {
    modalOverlay.classList.add('active');
  }, 10);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  // wait for the transition to finish before hidding it (display: none;)
  setTimeout(() => {
    modalOverlay.style.display = 'none';
  }, 300); // Must match th CSS transition duration (0.3s or 300ms)
}

// Event Listeners
openModalBtnEl.addEventListener('click', openModal);
closeModalBtnEl.addEventListener('click', closeModal);

// Close the modal if the user clicks outside the modal content (on the overlay)
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) {
    closeModal();
  }
});



//Bootstap modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


