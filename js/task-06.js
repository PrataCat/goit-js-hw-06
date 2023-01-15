// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputElem = document.getElementById("validation-input");
const inputLength = Number(inputElem.dataset.length);

inputElem.addEventListener("blur", hendlerChange);

function hendlerChange(evt) {
  if (evt.currentTarget.value.trim().length === inputLength) {
    if (inputElem.classList.contains("invalid")) {
      inputElem.classList.replace("invalid", "valid");
    } else {
      inputElem.classList.add("valid");
    }
  } else if (inputElem.classList.contains("valid")) {
    inputElem.classList.replace("valid", "invalid");
  } else {
    inputElem.classList.add("invalid");
  }
}
