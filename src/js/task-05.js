// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const getInput = document.getElementById("name-input");

const getOutput = document.getElementById("name-output");

getInput.addEventListener("input", handlerInput);

function handlerInput(evt) {
  evt.preventDefault();
  evt.currentTarget.value === ""
    ? (getOutput.textContent = "Anonymous")
    : (getOutput.textContent = evt.currentTarget.value);
}
