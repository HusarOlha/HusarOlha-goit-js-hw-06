// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterEl = document.querySelector("#value");
console.log(counterEl);
const descrBtn = document.querySelector('[data-action="decrement"]');
console.log(descrBtn);
const encremBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

descrBtn.addEventListener("click", removeNumb);
encremBtn.addEventListener("click", addNumb);

function addNumb() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

function removeNumb() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
