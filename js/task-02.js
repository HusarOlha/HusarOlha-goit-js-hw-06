const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("#ingredients");
console.log(ingredientsContainer);
const elements = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = ingredient;
  return newEl;
});
console.log(elements);
ingredientsContainer.append(...elements);
