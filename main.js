const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const inputError = document.querySelector("#inputError");

const btnFirst = document.querySelector(".btnFirst");
const btnSecond = document.querySelector(".btnSecond");
const btnThird = document.querySelector(".btnThird");
const btnFourth = document.querySelector(".btnFourth");
const btnFifth = document.querySelector(".btnFifth");
const btnSixth = document.querySelector(".btnSixth");

const answerFirst = document.querySelector(".answerFirst");
const answerSecond = document.querySelector(".answerSecond");
const answerThird = document.querySelector(".answerThird");
const answerFourth = document.querySelector(".answerFourth");
const answerFifth = document.querySelector(".answerFifth");
const answerSixth = document.querySelector(".answerSixth");

const plusIconFirst = document.querySelector("#plusIconFirst");
const plusIconSecond = document.querySelector("#plusIconSecond");
const plusIconThird = document.querySelector("#plusIconThird");
const plusIconFourth = document.querySelector("#plusIconFourth");
const plusIconFifth = document.querySelector("#plusIconFifth");
const plusIconSixth = document.querySelector("#plusIconSixth");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  if (input.value === "") {
    inputError.style.display = "block";
  }
  input.focus();
});

btnFirst.addEventListener("click", () => {
  answerFirst.classList.toggle("hide");
  plusIconFirst.classList.toggle("fa-times");

  if (!answerFirst.classList.contains("hide")) {
    answerSecond.classList.add("hide");
    answerThird.classList.add("hide");
    answerFourth.classList.add("hide");
    answerFifth.classList.add("hide");
    answerSixth.classList.add("hide");
  }

  if (plusIconFirst.classList.contains("fa-times")) {
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnSecond.addEventListener("click", () => {
  answerSecond.classList.toggle("hide");
  plusIconSecond.classList.toggle("fa-times");

  if (!answerSecond.classList.contains("hide")) {
    answerFirst.classList.add("hide");
    answerThird.classList.add("hide");
    answerFourth.classList.add("hide");
    answerFifth.classList.add("hide");
    answerSixth.classList.add("hide");
  }

  if (plusIconSecond.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnThird.addEventListener("click", () => {
  answerThird.classList.toggle("hide");
  plusIconThird.classList.toggle("fa-times");

  if (!answerThird.classList.contains("hide")) {
    answerFirst.classList.add("hide");
    answerSecond.classList.add("hide");
    answerFourth.classList.add("hide");
    answerFifth.classList.add("hide");
    answerSixth.classList.add("hide");
  }

  if (plusIconThird.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnFourth.addEventListener("click", () => {
  answerFourth.classList.toggle("hide");
  plusIconFourth.classList.toggle("fa-times");

  if (!answerFourth.classList.contains("hide")) {
    answerFirst.classList.add("hide");
    answerSecond.classList.add("hide");
    answerThird.classList.add("hide");
    answerFifth.classList.add("hide");
    answerSixth.classList.add("hide");
  }

  if (plusIconFourth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnFifth.addEventListener("click", () => {
  answerFifth.classList.toggle("hide");
  plusIconFifth.classList.toggle("fa-times");

  if (!answerFifth.classList.contains("hide")) {
    answerFirst.classList.add("hide");
    answerSecond.classList.add("hide");
    answerThird.classList.add("hide");
    answerFourth.classList.add("hide");
    answerSixth.classList.add("hide");
  }

  if (plusIconFifth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnSixth.addEventListener("click", () => {
  answerSixth.classList.toggle("hide");
  plusIconSixth.classList.toggle("fa-times");

  if (!answerSixth.classList.contains("hide")) {
    answerFirst.classList.add("hide");
    answerSecond.classList.add("hide");
    answerThird.classList.add("hide");
    answerFourth.classList.add("hide");
    answerFifth.classList.add("hide");
  }

  if (plusIconSixth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
  }
});
