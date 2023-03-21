function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.getElementById("boxes");
const inputEl = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.width = 30 + i * 10 + "px";
    newElement.style.height = 30 + i * 10 + "px";
    newElement.style.backgroundColor = getRandomHexColor();
    divBox.append(newElement);
  }
}

function destroyBoxes() {
  divBox.remove();
}

createBtn.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});
