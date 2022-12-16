const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);

const textEl = document.querySelector("#text");
console.log(textEl);

inputEl.addEventListener("change", onInputRange);

function onInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
