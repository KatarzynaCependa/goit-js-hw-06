function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const firstEl = document.firstElementChild;
const bodyEl = firstEl.lastElementChild;
const buttonEl = document.querySelector(".change-color");
const paragraphEl = document.querySelector(".color");

const clickHandler = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  paragraphEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener("click", clickHandler);
