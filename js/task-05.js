const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

const inputHandler = (event) => {
  if (inputValue === "") {
    outputValue.textContent = "Anonymous";
  } else {
    outputValue.textContent = event.currentTarget.value;
  }
};

inputValue.addEventListener("input", inputHandler);
