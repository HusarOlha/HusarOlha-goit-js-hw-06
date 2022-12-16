// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categoriesEl = document.querySelector("#categories");
const itemEls = categoriesEl.children.length;
console.log("Number of categories:", itemEls);
const itemEl = document.querySelectorAll(".item");
const el = [];
itemEl.forEach((number) => {
  const text = number.firstElementChild.textContent;
  const num = number.lastElementChild.children.length;
  console.log("Category:", text);
  console.log("Elements:", num);
});
