const login = document.querySelector(".login");
const modalClose = document.querySelector(".close");
const modalContainer = document.querySelector(".modal-container");
const enviar = document.querySelector(".enviar");

login.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
const saveUser = () => {
  const user = {
    nome: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirm-password").value,
  };
 
};

enviar.addEventListener("click", saveUser());

