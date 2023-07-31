"use strict";

const btnall = document.querySelector(".show-model");
console.log(btnall.textContent);

const btnallopen = document.querySelectorAll(".show-model");
console.log(btnallopen);
const btnallclose = document.querySelector(".close-model");
console.log(btnallclose);
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");

const opendiv = function (event) {
  // const buttonevent = event.target.dataset.text;
  // const modelText = document.querySelector("p");
  // modelText.textContent = buttonevent;
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closediv = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnallopen.length; i++) {
  btnallopen[i].addEventListener("click", opendiv);
}

overlay.addEventListener("click", closediv);

btnallclose.addEventListener("click", closediv);
// document.getElementById("#model1").addEventListener("click", function () {
//   model.style.display = "block";
// });

// document.addEventListener("keypress", function () {
//   console.log("The key is pressed");
// });
// document.addEventListener("keydown", function () {
//   console.log("The key is down");
// });
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closediv();
  }
});
