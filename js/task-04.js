// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const getBtnDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const getBtnIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const getCounterValue = document.getElementById("value");

let counterValue = 0;

getBtnDecrement.addEventListener("click", handlerDecrement);
getBtnIncrement.addEventListener("click", handlerIncrement);

function handlerDecrement(evt) {
  counterValue -= 1;
  getCounterValue.textContent = counterValue;
}

function handlerIncrement(evt) {
  counterValue += 1;
  getCounterValue.textContent = counterValue;
}
