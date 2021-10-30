const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const inputError = document.querySelector("#inputError");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  if (input.value === "") {
    inputError.style.display = "block";
  }
  input.focus();
});
