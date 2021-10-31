const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const inputError = document.querySelector("#inputError");
const plusIcon = document.querySelectorAll("#plusIcon");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  if (input.value === "") {
    inputError.style.display = "block";
  }
  input.focus();
});

plusIcon.forEach((singlePlus) => {
  singlePlus.addEventListener("click", () => {
    singlePlus.classList.toggle("fa-plus");
    singlePlus.classList.toggle("fa-times");
  });
});
