"use strict";

// const btnall = document.querySelector(".show-model");
// console.log(btnall.textContent);

const btnallopen = document.querySelectorAll(".show-model");
console.log(btnallopen);
const btnallclose = document.querySelector(".close-model");
console.log(btnallclose);
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");

const opendiv = function (event) {
  const buttonevent = event.target.dataset.text;
  const modelText = document.querySelector("p");
  modelText.textContent = buttonevent;
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closediv = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnallopen.length; i++) {
  btnallopen[i].addEventListener("click", opendiv);
  btnallclose.addEventListener("click", closediv);
  overlay.addEventListener("click", closediv);
}

// document.getElementById("#model1").addEventListener("click", function () {
//   model.style.display = "block";
// });
