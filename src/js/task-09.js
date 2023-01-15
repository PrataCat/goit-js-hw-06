function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorWidget = document.querySelector(".widget");
const bodyElem = document.querySelector("body");
const spanText = document.querySelector(".color");

changeColorWidget.addEventListener("click", hendleClickForChangeColor);

function hendleClickForChangeColor(e) {
  spanText.textContent = getRandomHexColor();
  bodyElem.style.background = spanText.textContent;
}
