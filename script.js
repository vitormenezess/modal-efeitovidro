const login = document.querySelector(".login");
const modalClose = document.querySelector(".close");
const modalContainer = document.querySelector(".modal-container");

login.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
