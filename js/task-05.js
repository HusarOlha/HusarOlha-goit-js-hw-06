// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
//     Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
// const refs = {
//   input: document.querySelector("#name-input"),
//   name: document.querySelector("#name-output"),
// };

const input = document.querySelector("#name-input");
console.log(input);
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInput);
let newName = "";
function onInput(event) {
  newName = event.currentTarget.value;
  nameLabel.textContent = newName;
}
