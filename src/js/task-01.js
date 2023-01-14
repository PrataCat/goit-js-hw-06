// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const getElementCategories = document.getElementById("categories");

const elemList = getElementCategories.children;
console.log(`Number of categories: ${elemList.length}`);

for (const elem of elemList) {
  console.dir(`Category: ${elem.firstElementChild.textContent}`);
  console.dir(`Elements: ${elem.lastElementChild.children.length}`);
}
