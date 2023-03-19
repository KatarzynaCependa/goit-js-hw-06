const counterDisplay = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

updateDisplay();

const decrementClick = () => {
  counter--;
  updateDisplay();
};

const incrementClick = () => {
  counter++;
  updateDisplay();
};

function updateDisplay() {
  counterDisplay.innerHTML = counter;
}

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
