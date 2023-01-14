const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <;> за одну операцію у список ul#ingredients.

const getIngredientList = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  getIngredientList.appendChild(ingredientItem);
}
console.log(getIngredientList);
