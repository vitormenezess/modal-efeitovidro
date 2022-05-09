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

//Formulario
const form = document.getElementById("form");
const nome = document.getElementById("name");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const confirmeSenha = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const cpfValue = cpf.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const confirmeSenhaVlaue = confirmeSenha.value;
  //nome
  if (nomeValue === "") {
    setError(nome);
  } else {
    setSueccess(nome);
  }
  //cpf
  if (cpfValue === "") {
    setError(cpf);
  } else {
    setSueccess(cpf);
  }
  //email
  if (emailValue === "") {
    setError(email);
  } else if (!emailIsValid(emailValue)) {
    setError(email);
  } else {
    setSueccess(email);
  }
  //senha
  if (senhaValue === "") {
    setError(senha);
  } else if (senhaValue.length < 4) {
    setError(senha);
  } else {
    setSueccess(senha);
  }
  //confirmeSenha
  if (confirmeSenhaVlaue === "") {
    setError(confirmeSenha);
  } else if (confirmeSenhaVlaue != senhaValue) {
    setError(confirmeSenha);
  } else {
    setSueccess(confirmeSenha);
  }
  const formControls = document.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
  if (formIsValid) {
    alert("Cadastro feito");
  }
}

function setError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}
function setSueccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}
