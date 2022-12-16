const inputEl = document.querySelector("input");
console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const attribute = Number(inputEl.getAttribute("data-length"));

  if (inputEl.value.length === attribute) {
    inputEl.classList.add("valid");
  } else if (inputEl.value.length !== attribute) {
    inputEl.classList.add("invalid");
  }
}
