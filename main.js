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

const btnFirst = document.querySelector(".btnFirst");
const btnSecond = document.querySelector(".btnSecond");
const btnThird = document.querySelector(".btnThird");
const btnFourth = document.querySelector(".btnFourth");
const btnFifth = document.querySelector(".btnFifth");
const btnSixth = document.querySelector(".btnSixth");

const answerFirst = document.querySelectorAll(".answerFirst");
const answerSecond = document.querySelector(".answerSecond");
const answerThird = document.querySelectorAll(".answerThird");
const answerFourth = document.querySelector(".answerFourth");
const answerFifth = document.querySelector(".answerFifth");
const answerSixth = document.querySelectorAll(".answerSixth");

btnFirst.addEventListener("click", () => {
  answerFirst.forEach((sigleFirst) => {
    sigleFirst.classList.toggle("hide");
  });
});

btnSecond.addEventListener("click", () => {
  answerSecond.classList.toggle("hide");
});

btnThird.addEventListener("click", () => {
  answerThird.forEach((sigleThird) => {
    sigleThird.classList.toggle("hide");
  });
});

btnFourth.addEventListener("click", () => {
  answerFourth.classList.toggle("hide");
});

btnFifth.addEventListener("click", () => {
  answerFifth.classList.toggle("hide");
});

btnSixth.addEventListener("click", () => {
  answerSixth.forEach((singleSixth) => {
    singleSixth.classList.toggle("hide");
  });
});
